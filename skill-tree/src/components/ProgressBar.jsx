export default function ProgressBar({ completed, total }) {
  const pct = Math.round((completed / total) * 100);
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          Progress
        </span>
        <span className="text-xs text-gray-300 font-mono">
          {completed} / {total} skills
        </span>
      </div>
      <div className="h-2.5 bg-gray-800/80 rounded-full overflow-hidden ring-1 ring-gray-700/50">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #22c55e 0%, #4ade80 60%, #86efac 100%)",
            boxShadow: pct > 0 ? "0 0 12px rgba(34,197,94,0.4)" : "none",
          }}
        />
      </div>
    </div>
  );
}
