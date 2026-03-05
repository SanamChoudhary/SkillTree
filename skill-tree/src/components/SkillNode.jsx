import { TRACK_COLORS } from "../data/nodes";

export default function SkillNode({ node, state, position, onClick }) {
  const tc = TRACK_COLORS[node.track];
  const isRoot = node.id === "cs-basics";

  const baseClasses =
    "absolute flex items-center justify-center text-[12px] font-semibold select-none transition-all duration-200 text-center leading-snug px-3 rounded-xl border-2 backdrop-blur-sm";

  const sizeClass = isRoot ? "w-[200px] h-[62px]" : "w-[176px] h-[56px]";

  let stateClasses = "";
  let inlineStyle = {
    left: isRoot ? position.x - 12 : position.x,
    top: position.y,
    zIndex: 10,
  };

  if (state === "locked") {
    stateClasses =
      "bg-gray-800/40 border-gray-700/50 text-gray-600 opacity-40 cursor-not-allowed";
  } else if (state === "unlocked") {
    stateClasses =
      "bg-gray-900/80 border-yellow-400/80 text-yellow-100 cursor-pointer hover:scale-[1.06] hover:border-yellow-300 animate-pulse-glow";
  } else {
    stateClasses =
      "bg-gray-900/80 border-green-500/80 text-green-200 cursor-pointer hover:scale-[1.06] hover:border-green-400";
    inlineStyle.boxShadow = `0 0 18px 3px ${tc.glow}, inset 0 0 12px ${tc.bg}`;
  }

  return (
    <div
      className={`${baseClasses} ${sizeClass} ${stateClasses}`}
      style={inlineStyle}
      onClick={state !== "locked" ? onClick : undefined}
    >
      {state === "completed" && (
        <span className="mr-1.5 text-green-400 text-sm">✓</span>
      )}
      <span className="truncate">{node.label}</span>
      {isRoot && state !== "completed" && state !== "locked" && (
        <span className="absolute -top-5 text-[9px] text-gray-500 tracking-wider uppercase">
          Start Here
        </span>
      )}
    </div>
  );
}
