import { useState, useRef, useCallback } from "react";
import { nodes, nodeMap, TRACK_COLORS } from "../data/nodes";
import { NODE_W, NODE_H } from "../layout/positions";

export default function SvgConnections({ positions, completed }) {
  const [hover, setHover] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const edges = [];

  nodes.forEach((node) => {
    node.prereqs.forEach((pid) => {
      const from = positions[pid];
      const to = positions[node.id];
      if (!from || !to) return;

      const isParentRoot = pid === "cs-basics";
      const fromW = isParentRoot ? 200 : NODE_W;
      const fromH = isParentRoot ? 62 : NODE_H;
      const fromXShift = isParentRoot ? -12 : 0;

      const x1 = from.x + fromXShift + fromW / 2;
      const y1 = from.y + fromH;
      const x2 = to.x + NODE_W / 2;
      const y2 = to.y;

      const dx = x2 - x1;
      const dy = y2 - y1;
      let pathD;
      if (Math.abs(dx) < 5) {
        pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
      } else {
        const cp1x = x1 + dx * 0.4;
        const cp1y = y1 + dy * 0.55;
        const cp2x = x2 - dx * 0.08;
        const cp2y = y2 - dy * 0.3;
        pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
      }

      edges.push({ key: `${pid}-${node.id}`, pathD, node, pid });
    });
  });

  const handleMove = useCallback((e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    >
      {edges.map(({ key, pathD, node: childNode, pid }) => {
        const bothDone = completed.has(pid) && completed.has(childNode.id);
        const parentDone = completed.has(pid);
        const tc = TRACK_COLORS[childNode.track] || TRACK_COLORS.Foundations;
        let strokeColor = "#1f2937";
        let strokeOpacity = 0.6;
        if (bothDone) {
          strokeColor = tc.base;
          strokeOpacity = 0.9;
        } else if (parentDone) {
          strokeColor = tc.base;
          strokeOpacity = 0.3;
        }

        const isHovered = hover === key;

        return (
          <g key={key}>
            {/* Glow layer for completed */}
            {bothDone && (
              <path
                d={pathD}
                fill="none"
                stroke={tc.base}
                strokeWidth={6}
                strokeLinecap="round"
                opacity={0.15}
                style={{ pointerEvents: "none" }}
              />
            )}
            {/* Visible line */}
            <path
              d={pathD}
              fill="none"
              stroke={isHovered ? tc.base : strokeColor}
              strokeWidth={isHovered ? 3 : 2}
              strokeLinecap="round"
              opacity={isHovered ? 1 : strokeOpacity}
              style={{ pointerEvents: "none", transition: "stroke 0.15s, stroke-width 0.15s, opacity 0.15s" }}
            />
            {/* Invisible fat hit-area for hover */}
            <path
              d={pathD}
              fill="none"
              stroke="transparent"
              strokeWidth={18}
              strokeLinecap="round"
              style={{ pointerEvents: "stroke", cursor: "default" }}
              onMouseEnter={() => setHover(key)}
              onMouseMove={handleMove}
              onMouseLeave={() => setHover(null)}
            />
          </g>
        );
      })}

      {/* Tooltip */}
      {hover && (() => {
        const edge = edges.find((e) => e.key === hover);
        if (!edge) return null;
        const label = edge.node.track;
        const tc = TRACK_COLORS[label] || TRACK_COLORS.Foundations;
        const tx = mouse.x;
        const ty = mouse.y - 28;
        const textLen = label.length * 7 + 16;
        return (
          <g style={{ pointerEvents: "none" }}>
            <rect
              x={tx - textLen / 2}
              y={ty - 12}
              width={textLen}
              height={24}
              rx={6}
              fill="#111"
              stroke={tc.base}
              strokeWidth={1}
              opacity={0.95}
            />
            <text
              x={tx}
              y={ty + 4}
              textAnchor="middle"
              fill={tc.base}
              fontSize={11}
              fontWeight={700}
              letterSpacing="0.08em"
              style={{ textTransform: "uppercase" }}
            >
              {label}
            </text>
          </g>
        );
      })()}
    </svg>
  );
}
