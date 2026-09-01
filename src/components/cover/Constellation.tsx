type Layout = "grid" | "route";
type Tone = "plain" | "fill" | "warm" | "ghost";

type Slot = { x: number; y: number; s: number; r: number; tone: Tone };

type LayoutSpec = {
  slots: Slot[];
  /**
   * Reading paths through the composition, given as slot INDICES rather than
   * coordinates. The wire is derived from the slots themselves, so a
   * connector can never drift off the tile it appears to join. The previous
   * version hardcoded the path from a mockup, and every endpoint missed its
   * centre by 7 to 76px: lines that looked like they linked the tiles
   * without ever touching them.
   */
  runs: number[][];

  wire: "line" | "curve";
};

const LAYOUTS: Record<Layout, LayoutSpec> = {
  /* Things I built: a dense cluster, weighted to the upper middle. */
  grid: {
    slots: [
      { x: 144, y: 64, s: 88, r: 3, tone: "fill" },
      { x: 376, y: 52, s: 78, r: 5, tone: "plain" },
      { x: 262, y: 126, s: 72, r: -5, tone: "warm" },
      { x: 352, y: 182, s: 66, r: -3, tone: "warm" },
      { x: 60, y: 164, s: 64, r: -4, tone: "plain" },
      { x: 206, y: 196, s: 60, r: 7, tone: "plain" },
      { x: 26, y: 34, s: 52, r: -7, tone: "ghost" },
      { x: 452, y: 196, s: 46, r: 6, tone: "ghost" },
    ],
    runs: [
      [4, 0, 2, 1],
      [0, 5, 3],
    ],
    wire: "line",
  },

  /* Places and teams: the same vocabulary strung along one path. */
  route: {
    slots: [
      { x: 46, y: 170, s: 82, r: -4, tone: "fill" },
      { x: 364, y: 120, s: 74, r: 3, tone: "plain" },
      { x: 170, y: 106, s: 70, r: 4, tone: "plain" },
      { x: 268, y: 150, s: 64, r: -6, tone: "warm" },
      { x: 452, y: 196, s: 58, r: -3, tone: "warm" },
      { x: 436, y: 38, s: 48, r: 6, tone: "ghost" },
      { x: 30, y: 52, s: 44, r: -6, tone: "ghost" },
    ],
    /* One sweep left to right through the five substantive tiles. The ghost
       pair stays off the path: it is the back layer, not a station. */
    runs: [[0, 2, 3, 1, 4]],
    wire: "curve",
  },
};

/**
 * Tool name to mark. A tool with no entry simply does not appear on the
 * cover — it is still listed in full on the toolkit and the exhibits
 * themselves, so nothing is lost by leaving it off the artwork.
 */
const GLYPHS: Record<string, keyof typeof MARKS> = {
  Python: "python",
  TypeScript: "braces",
  React: "orbit",
  "Next.js": "layers",
  FastAPI: "api",
  Neo4j: "graph",
  PostgreSQL: "db",
  Docker: "container",
  Linux: "terminal",
  ServiceNow: "ticket",
  "Microsoft Defender": "shield",
  Sentinel: "radar",
  Azure: "cloud",
  "Power Automate": "bolt",
  "Agile / Scrum": "cycle",
};

const MARKS = {
  python: (
    <>
      <path d="M12 3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8a3 3 0 0 0-3 3v2" />
      <path d="M12 21H8a3 3 0 0 1-3-3V6" />
      <circle cx="8.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  braces: (
    <>
      <path d="M9.5 4C7.6 4 7 5 7 6.6v2.2c0 1.4-.8 2.4-2 3.2 1.2.8 2 1.8 2 3.2v2.2C7 19 7.6 20 9.5 20" />
      <path d="M14.5 4c1.9 0 2.5 1 2.5 2.6v2.2c0 1.4.8 2.4 2 3.2-1.2.8-2 1.8-2 3.2v2.2c0 1.6-.6 2.6-2.5 2.6" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="18" cy="9" r="2.4" />
      <circle cx="11" cy="18" r="2.4" />
      <path d="M8.2 8 15.7 8.6M16.6 11.1 12.6 15.8M9.4 16.2 7 9.3" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6" />
      <path d="M5 12c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8" />
    </>
  ),
  container: (
    <>
      <rect x="4" y="11" width="5" height="5" />
      <rect x="10" y="11" width="5" height="5" />
      <rect x="10" y="5.5" width="5" height="5" />
      <path d="M3 18.5c2.4 1.6 5 1.6 7.2 0 2.3 1.6 5.4 1.6 7.6 0 1.4.8 2.6.8 3.2 0" />
    </>
  ),
  orbit: (
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
    </>
  ),
  api: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 8.5 12 12l-4 3.5M13 15.5h4" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7 10l3 2.4-3 2.4M12.5 15h4.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5 21 8.5l-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="M9 12.2l2.2 2.2L15.4 10" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M12 5.5a6.5 6.5 0 0 1 6.5 6.5" />
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 9a3 3 0 0 1 3 3" />
    </>
  ),
  cloud: <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.4A3.4 3.4 0 0 0 7 18Z" />,
  bolt: <path d="M13 3 5.5 13.5H11L10.5 21 18.5 10H13l0-7Z" strokeLinejoin="round" />,
  cycle: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 3.5V8h-4.5" />
    </>
  ),
  ticket: (
    <>
      <rect x="3" y="7" width="13" height="10" rx="1.5" />
      <path d="M6.5 11h6M6.5 13.6h4" />
      <path d="M16 12h4.5" />
      <circle cx="21" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
} as const;

type Point = [number, number];

const centreOf = (slot: Slot): Point => [slot.x + slot.s / 2, slot.y + slot.s / 2];

/** Build a wire through a run of tile centres. */
function wirePath(pts: Point[], kind: "line" | "curve"): string {
  if (pts.length < 2) return "";
  const d = [`M${pts[0][0]} ${pts[0][1]}`];

  if (kind === "line") {
    for (const [x, y] of pts.slice(1)) d.push(`L${x} ${y}`);
    return d.join(" ");
  }

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    const p3 = pts[i + 2] ?? pts[i + 1];
    const c1x = x1 + (x2 - p0[0]) / 6;
    const c1y = y1 + (y2 - p0[1]) / 6;
    const c2x = x2 - (p3[0] - x1) / 6;
    const c2y = y2 - (p3[1] - y1) / 6;
    d.push(`C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x2} ${y2}`);
  }
  return d.join(" ");
}

export default function Constellation({
  items,
  layout,
}: {
  items: string[];
  layout: Layout;
}) {
  const { slots, runs, wire } = LAYOUTS[layout];

  /* Content order drives prominence; anything without a mark is skipped
     rather than substituted, so no tool is represented by the wrong glyph. */
  const marks = items
    .map((name) => GLYPHS[name])
    .filter((mark): mark is keyof typeof MARKS => Boolean(mark))
    .slice(0, slots.length);

  /* A room with fewer tools than slots leaves the tail slots empty, so a
     wire is only drawn between tiles that actually rendered. */
  const wirePaths = runs
    .map((run) => run.filter((i) => i < marks.length).map((i) => centreOf(slots[i])))
    .map((pts) => wirePath(pts, wire))
    .filter(Boolean);

  return (
    <svg
      viewBox="0 0 560 315"
      className="constellation"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {wirePaths.map((d) => (
        <path key={d} className="constellation__wire" d={d} />
      ))}

      {marks.map((mark, i) => {
        const { x, y, s, r, tone } = slots[i];
        const inset = s * 0.21;
        const glyph = s * 0.58;

        return (
          <g
            key={mark}
            className="constellation__tile"
            data-tone={tone}
            transform={`rotate(${r} ${x + s / 2} ${y + s / 2})`}
          >
            <rect x={x} y={y} width={s} height={s} rx="3" />
            <svg
              x={x + inset}
              y={y + inset}
              width={glyph}
              height={glyph}
              viewBox="0 0 24 24"
              className="constellation__mark"
            >
              {MARKS[mark]}
            </svg>
          </g>
        );
      })}
    </svg>
  );
}
