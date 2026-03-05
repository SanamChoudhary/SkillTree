/* ───────────────────────────────────────────────────────
   TREE LAYOUT — every node gets an explicit (col, row)
   so the tree fans out from the root with zero crossings.

   Row 0 = root (cs-basics) centered at col 3
   7 branches fan outward: all lines flow downward.
   Sub-branches (Data Analysis, Cloud) start at the row
   below their parent in the adjacent column.
   ─────────────────────────────────────────────────────── */

export const NODE_POSITIONS = {
  // Root — centered above the 7 branches
  "cs-basics": { col: 3, row: 0 },

  // Web Dev (col 0)
  "internet":   { col: 0, row: 1 },
  "html-css":   { col: 0, row: 2 },
  "javascript": { col: 0, row: 3 },
  "dom":        { col: 0, row: 4 },
  "fetch":      { col: 0, row: 5 },
  "react":      { col: 0, row: 6 },

  // Python path (col 1)
  "cli":          { col: 1, row: 1 },
  "git":          { col: 1, row: 2 },
  "python":       { col: 1, row: 3 },
  "py-functions": { col: 1, row: 4 },
  "fileio":       { col: 1, row: 5 },
  "flask":        { col: 1, row: 6 },

  // Data Analysis (col 2) — branches off python (col 1, row 3)
  "data-wrangling": { col: 2, row: 4 },
  "data-viz":       { col: 2, row: 5 },
  "statistics":     { col: 2, row: 6 },
  "ml-basics":      { col: 2, row: 7 },

  // Algorithms (col 3)
  "ds":        { col: 3, row: 1 },
  "sorting":   { col: 3, row: 2 },
  "bigo":      { col: 3, row: 3 },
  "recursion": { col: 3, row: 4 },

  // OOP & Design (col 4)
  "oop-concepts":    { col: 4, row: 1 },
  "design-patterns": { col: 4, row: 2 },
  "solid":           { col: 4, row: 3 },
  "software-arch":   { col: 4, row: 4 },

  // Systems (col 5)
  "binary":     { col: 5, row: 1 },
  "os":         { col: 5, row: 2 },
  "networking": { col: 5, row: 3 },
  "databases":  { col: 5, row: 4 },

  // Cloud (col 6) — branches off networking (col 5, row 3)
  "cloud-fundamentals": { col: 6, row: 4 },
  "cloud-services":     { col: 6, row: 5 },
  "containers":         { col: 6, row: 6 },
  "devops":             { col: 6, row: 7 },
};

export const NODE_W = 176;
export const NODE_H = 56;
export const COL_SPACING = 220;
export const ROW_SPACING = 110;
export const TREE_PAD_X = 60;
export const TREE_PAD_Y = 70;

/** Extra vertical breathing room below the root for fan-out curves */
export const ROOT_GAP = 60;

/** Convert logical (col,row) → pixel (x,y) top-left of node */
export function toPixel(col, row) {
  return {
    x: TREE_PAD_X + col * COL_SPACING,
    y: TREE_PAD_Y + (row === 0 ? 0 : ROOT_GAP) + row * ROW_SPACING,
  };
}

export function buildPixelPositions() {
  const pos = {};
  for (const [id, { col, row }] of Object.entries(NODE_POSITIONS)) {
    pos[id] = toPixel(col, row);
  }
  return pos;
}

export function getNodeState(node, completed) {
  if (completed.has(node.id)) return "completed";
  if (node.prereqs.length === 0) return "unlocked";
  if (node.prereqs.every((p) => completed.has(p))) return "unlocked";
  return "locked";
}
