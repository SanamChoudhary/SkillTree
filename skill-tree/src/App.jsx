import { useState, useEffect, useRef, useCallback } from "react";
import { nodes } from "./data/nodes";
import { buildPixelPositions, getNodeState, NODE_W, NODE_H, TREE_PAD_X } from "./layout/positions";
import ProgressBar from "./components/ProgressBar";
import SkillNode from "./components/SkillNode";
import SvgConnections from "./components/SvgConnections";
import SidePanel from "./components/SidePanel";

function App() {
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem("skill-tree-completed");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [selectedId, setSelectedId] = useState(null);
  const positions = useRef(buildPixelPositions()).current;

  useEffect(() => {
    localStorage.setItem("skill-tree-completed", JSON.stringify([...completed]));
  }, [completed]);

  const markComplete = useCallback((id) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const selectedNode = nodes.find((n) => n.id === selectedId) || null;
  const selectedState = selectedNode ? getNodeState(selectedNode, completed) : null;

  // Canvas dimensions
  const allPos = Object.values(positions);
  const canvasW = Math.max(...allPos.map((p) => p.x)) + NODE_W + TREE_PAD_X + 40;
  const canvasH = Math.max(...allPos.map((p) => p.y)) + NODE_H + 80;

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #1a1a2e 0%, #0f0f0f 50%, #080808 100%)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b border-gray-800/50 px-6 py-5"
        style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(16px)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-xl font-bold tracking-tight text-gray-100">
            CS Skill Tree
          </h1>
        </div>
        <ProgressBar completed={completed.size} total={nodes.length} />
        {completed.size > 0 && (
          <div className="flex justify-center mt-3">
            <button
              onClick={() => {
                if (window.confirm("Reset all progress? This cannot be undone.")) {
                  setCompleted(new Set());
                }
              }}
              className="text-[11px] text-gray-500 hover:text-red-400 transition-colors cursor-pointer uppercase tracking-wider font-medium"
            >
              Reset Progress
            </button>
          </div>
        )}
      </header>

      {/* Tree */}
      <div className="overflow-x-auto px-4 pt-6 pb-16">
        <div className="relative mx-auto" style={{ width: canvasW, height: canvasH }}>
          <SvgConnections positions={positions} completed={completed} />
          {nodes.map((node) => {
            const state = getNodeState(node, completed);
            return (
              <SkillNode
                key={node.id}
                node={node}
                state={state}
                position={positions[node.id]}
                onClick={() => setSelectedId(node.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Side Panel */}
      {selectedNode && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(2px)" }}
            onClick={() => setSelectedId(null)}
          />
          <SidePanel
            node={selectedNode}
            state={selectedState}
            onClose={() => setSelectedId(null)}
            onComplete={() => markComplete(selectedNode.id)}
          />
        </>
      )}
    </div>
  );
}

export default App;
