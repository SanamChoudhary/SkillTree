import { TRACK_COLORS } from "../data/nodes";

export default function SidePanel({ node, state, onClose, onComplete }) {
  if (!node) return null;
  const tc = TRACK_COLORS[node.track];

  return (
    <div
      className="fixed top-0 right-0 h-full w-[400px] z-50 flex flex-col overflow-y-auto border-l border-gray-700/50"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
        boxShadow: "-8px 0 40px rgba(0,0,0,0.6)",
      }}
    >
      {/* Header */}
      <div className="p-7 pb-5 border-b border-gray-800/60">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: tc.base, boxShadow: `0 0 6px ${tc.glow}` }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.15em]"
                style={{ color: tc.base }}
              >
                {node.track}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white leading-tight">
              {node.label}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors text-lg leading-none p-1 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            ✕
          </button>
        </div>
        {state === "completed" && (
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
            <span>✓</span> Completed
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-7 flex-1">
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {node.description}
        </p>

        <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-4">
          Free Resources
        </h3>
        <ul className="space-y-3 mb-10">
          {node.resources.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 border border-gray-800/50 hover:border-gray-700 transition-all"
              >
                <span className="text-blue-400 group-hover:text-blue-300 mt-0.5 text-xs shrink-0">
                  ↗
                </span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {r.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {state !== "completed" && (
          <button
            onClick={onComplete}
            className="w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer"
            style={{
              background: `linear-gradient(135deg, #16a34a, #22c55e)`,
              boxShadow: "0 4px 20px rgba(34,197,94,0.25)",
              color: "white",
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0 4px 28px rgba(34,197,94,0.45)")}
            onMouseLeave={(e) => (e.target.style.boxShadow = "0 4px 20px rgba(34,197,94,0.25)")}
          >
            ✓ Mark as Complete
          </button>
        )}
      </div>
    </div>
  );
}
