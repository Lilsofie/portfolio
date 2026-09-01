# Generates the three Projects-cover directions as .dc.html artboards.
# Geometry is computed, not eyeballed - that is the whole point of the rebuild.

PAL = dict(
    ink="#2f2f2b", ink_text="#f1ece1", paper="#f7f2e9", paper_mid="#f3ede2",
    warm_a="#e7ddce", warm_b="#d9c7a8", warm_c="#cbb896",
    text="#57524a", muted="#6f6960", head="#33322f",
    line="rgba(60,48,34,.22)", hair="rgba(60,48,34,.14)", wire="rgba(60,48,34,.20)",
)

MARKS = {
"window": '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 9h18M6 7.1h.01M8.4 7.1h.01"/>',
"graph": '<circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="9" r="2.4"/><circle cx="11" cy="18" r="2.4"/><path d="M8.2 8 15.7 8.6M16.6 11.1 12.6 15.8M9.4 16.2 7 9.3"/>',
"shield": '<path d="M12 3 5 6v6c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6l-7-3Z"/><path d="M9 12.2l2.2 2.2L15.4 10"/>',
"ticket": '<rect x="3" y="7" width="13" height="10" rx="1.5"/><path d="M6.5 11h6M6.5 13.6h4"/><path d="M16 12h4.5"/><circle cx="21" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
"device": '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10.6 5.2h2.8"/><path d="M10.4 18.6h3.2"/>',
"calendar": '<rect x="3.5" y="5" width="17" height="15.5" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="M7.5 13h3M7.5 16.6h6"/>',
"cycle": '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 3.5V8h-4.5"/>',
"terminal": '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M7 10l3 2.4-3 2.4M12.5 15h4.5"/>',
}

# The eight projects, in the order they appear in src/content/professional.ts.
# `tone` is prominence, not category: the featured project carries the ink tile.
PROJECTS = [
    dict(n="01", title="Personal Website",        year="Jan. 2025",  kind="Full-Stack Web",        mark="window",   x=146, y=62,  s=92, r=3,  tone="fill"),
    dict(n="03", title="Literature Search Engine",year="Sept. 2024", kind="Information Retrieval", mark="graph",    x=272, y=132, s=76, r=-5, tone="warm"),
    dict(n="04", title="IP, Domain & URL Analysis",year="July 2024", kind="Cybersecurity Tooling", mark="shield",   x=388, y=58,  s=76, r=4,  tone="plain"),
    dict(n="02", title="Hack the Valley Website", year="Jan. 2025",  kind="Event Platform",        mark="ticket",   x=392, y=176, s=66, r=-3, tone="warm"),
    dict(n="05", title="Department Comms App",    year="Nov. 2023",  kind="Android",               mark="device",   x=60,  y=174, s=66, r=-4, tone="plain"),
    dict(n="06", title="Eventful",                year="Oct. 2023",  kind="Mobile App",            mark="calendar", x=196, y=208, s=58, r=6,  tone="plain"),
    dict(n="07", title="Not that Deep",           year="Aug. 2023",  kind="Web App",               mark="cycle",    x=482, y=142, s=58, r=-3, tone="ghost"),
    dict(n="08", title="System Monitoring Tool",  year="April 2023", kind="Systems Programming",   mark="terminal", x=36,  y=62,  s=50, r=5,  tone="ghost"),
]

def centre(p):
    return (p["x"] + p["s"] / 2, p["y"] + p["s"] / 2)

def check_overlaps():
    bad = []
    for i, a in enumerate(PROJECTS):
        for b in PROJECTS[i + 1:]:
            # 6px of slack absorbs the rotation of two adjacent tiles.
            if (a["x"] < b["x"] + b["s"] + 6 and b["x"] < a["x"] + a["s"] + 6
                    and a["y"] < b["y"] + b["s"] + 6 and b["y"] < a["y"] + a["s"] + 6):
                bad.append((a["title"], b["title"]))
    return bad

def in_frame():
    return [p["title"] for p in PROJECTS
            if p["x"] < 18 or p["y"] < 18 or p["x"] + p["s"] > 542 or p["y"] + p["s"] > 297]

TONE = {
    "fill":  (PAL["ink"],       PAL["ink"],  PAL["ink_text"], "1"),
    "warm":  (PAL["warm_b"],    "rgba(60,48,34,.28)", "#2b2620", "1"),
    "plain": (PAL["paper_mid"], PAL["line"], PAL["ink"],       "1"),
    "ghost": (PAL["warm_a"],    PAL["hair"], PAL["muted"],     ".55"),
}

def tile(p):
    fill, stroke, ink, op = TONE[p["tone"]]
    cx, cy = centre(p)
    inset, g = p["s"] * 0.21, p["s"] * 0.58
    return (f'<g transform="rotate({p["r"]} {cx} {cy})" opacity="{op}" color="{ink}">'
            f'<rect x="{p["x"]}" y="{p["y"]}" width="{p["s"]}" height="{p["s"]}" rx="3" '
            f'fill="{fill}" stroke="{stroke}" stroke-width="1"/>'
            f'<svg x="{p["x"]+inset:.1f}" y="{p["y"]+inset:.1f}" width="{g:.1f}" height="{g:.1f}" '
            f'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" '
            f'overflow="visible">{MARKS[p["mark"]]}</svg></g>')

def wires():
    """Reading paths through real tile centres - this is the fix. The old cover
       hardcoded a path that missed every centre by 5-8px, which is what read
       as 'a little off': the connectors did not actually connect anything."""
    by = {p["title"]: centre(p) for p in PROJECTS}
    runs = [
        ["System Monitoring Tool", "Personal Website", "IP, Domain & URL Analysis"],
        ["Department Comms App", "Eventful", "Literature Search Engine",
         "Hack the Valley Website", "Not that Deep"],
    ]
    out = []
    for run in runs:
        pts = [by[t] for t in run]
        d = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in pts)
        out.append(f'<path d="{d}" fill="none" stroke="{PAL["wire"]}" stroke-width="1"/>')
    return "".join(out)

HEAD = '''<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Faustina:wght@400;500;600&family=Inter:wght@400;500&display=swap">
  <style>
    body {{ margin: 0; font-family: Inter, system-ui, sans-serif; background: {ink}; }}
    a {{ color: {text}; }} a:hover {{ color: {head}; }}
    .meta {{ font-size: 10px; letter-spacing: .22em; text-transform: uppercase; }}
    .serif {{ font-family: Faustina, Georgia, serif; }}
    .cover {{ background: {paper}; border: 1px solid {hair}; border-radius: 2px; overflow: hidden; }}
  </style>
</helmet>
<div style="padding: 40px; display: flex; flex-direction: column; gap: 18px;">
  <div style="display: flex; flex-direction: column; gap: 6px;">
    <span class="meta" style="color: {warm_b};">{label}</span>
    <span style="color: rgba(236,230,218,.55); font-size: 13px; line-height: 1.5; max-width: 60ch;">{blurb}</span>
  </div>
'''

FOOT = '''  <div style="display: flex; gap: 10px; align-items: baseline;">
    <span class="meta" style="color: rgba(236,230,218,.38);">Room 02</span>
    <span class="meta" style="color: rgba(236,230,218,.38);">Projects</span>
  </div>
</div>
</x-dc>
<script data-dc-script data-props='{{"$preview":{{"width":{w},"height":{h}}}}}'>
class Component extends DCLogic {{}}
</script>
</body>
</html>
'''

def page(label, blurb, body, w=720, h=520):
    return (HEAD.format(label=label, blurb=blurb, **PAL) + body
            + FOOT.format(w=w, h=h))

# ---- Direction A: Constellation, rebuilt --------------------------------
def direction_a():
    body = ('  <div class="cover" style="width: 640px; height: 360px;">\n'
            '    <svg viewBox="0 0 560 315" width="640" height="360">'
            + wires() + "".join(tile(p) for p in PROJECTS)
            + '</svg>\n  </div>\n')
    return page("Constellation &middot; rebuilt",
                "One mark per project, not per library &mdash; eight projects, eight glyphs. "
                "Size carries prominence: the featured site takes the ink tile, the two "
                "student projects sit back in the ghost layer. Every connector now lands on a "
                "real tile centre, which the shipped version does not.",
                body)

# ---- Direction B: Index -------------------------------------------------
def direction_b():
    rows = []
    for i, p in enumerate(PROJECTS):
        top = "" if i == 0 else f"border-top: 1px solid {PAL['hair']};"
        rows.append(
            f'''      <div style="display: grid; grid-template-columns: 34px 26px 1fr auto; gap: 14px;
        align-items: center; padding: 9px 0; {top}">
        <span class="meta" style="color: {PAL['muted']};">{p['n']}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="{PAL['ink']}"
          stroke-width="1.5" overflow="visible">{MARKS[p['mark']]}</svg>
        <span class="serif" style="color: {PAL['head']}; font-size: 15px;">{p['title']}</span>
        <span class="meta" style="color: {PAL['muted']};">{p['kind']}</span>
      </div>''')
    body = f'''  <div class="cover" style="width: 640px; height: 360px; padding: 26px 30px; box-sizing: border-box;">
    <div style="display: flex; flex-direction: column;">
{chr(10).join(rows)}
    </div>
  </div>
'''
    return page("Index",
                "The cover as an exhibition checklist &mdash; the eight works listed the way a "
                "gallery lists what is in the room. Says the most with the least invention, and "
                "the glyphs stay small enough that no one reads them as logos.",
                body)

# ---- Direction C: Range -------------------------------------------------
# Placement along one axis: how close the project sits to the machine vs the person.
AXIS = [
    ("System Monitoring Tool",   0.04, "terminal"),
    ("Literature Search Engine", 0.22, "graph"),
    ("IP, Domain & URL Analysis",0.36, "shield"),
    ("Hack the Valley Website",  0.52, "ticket"),
    ("Personal Website",         0.66, "window"),
    ("Not that Deep",            0.78, "cycle"),
    ("Eventful",                 0.89, "calendar"),
    ("Department Comms App",     0.97, "device"),
]

def direction_c():
    L, R, AY = 46.0, 514.0, 196.0
    marks, ticks = [], []
    for i, (title, t, mark) in enumerate(AXIS):
        x = L + (R - L) * t
        # Alternate above and below the axis so eight marks never crowd one band.
        up = i % 2 == 0
        s = 44
        ty = AY - 34 - s if up else AY + 34
        ticks.append(f'<path d="M{x:.1f} {AY} V{ty + s if up else ty:.1f}" '
                     f'stroke="{PAL["wire"]}" stroke-width="1"/>')
        ticks.append(f'<circle cx="{x:.1f}" cy="{AY}" r="2.6" fill="{PAL["ink"]}"/>')
        marks.append(
            f'<g color="{PAL["ink"]}"><rect x="{x - s/2:.1f}" y="{ty:.1f}" width="{s}" height="{s}" '
            f'rx="3" fill="{PAL["paper_mid"]}" stroke="{PAL["line"]}" stroke-width="1"/>'
            f'<svg x="{x - s/2 + s*0.21:.1f}" y="{ty + s*0.21:.1f}" width="{s*0.58:.1f}" '
            f'height="{s*0.58:.1f}" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
            f'stroke-width="1.5" overflow="visible">{MARKS[mark]}</svg></g>')
    body = f'''  <div class="cover" style="width: 640px; height: 360px;">
    <svg viewBox="0 0 560 315" width="640" height="360">
      <path d="M{L} {AY} H{R}" stroke="{PAL['ink']}" stroke-width="1.2" fill="none"/>
      {"".join(ticks)}
      {"".join(marks)}
      <text x="{L}" y="{AY + 28}" font-family="Inter, sans-serif" font-size="8.5"
        letter-spacing="1.8" fill="{PAL['muted']}">CLOSE TO THE MACHINE</text>
      <text x="{R}" y="{AY + 28}" text-anchor="end" font-family="Inter, sans-serif"
        font-size="8.5" letter-spacing="1.8" fill="{PAL['muted']}">CLOSE TO THE PERSON</text>
    </svg>
  </div>
'''
    return page("Range",
                "The cover makes an argument instead of a list: eight projects placed along one "
                "axis, from a C tool reading Linux process tables to an Android app people "
                "actually tap. The spread is the point &mdash; it is the one thing a stack list "
                "cannot say.",
                body)

open("Main.dc.html", "w").write(direction_a())
open("Index.dc.html", "w").write(direction_b())
open("Range.dc.html", "w").write(direction_c())
print("wrote Main.dc.html, Index.dc.html, Range.dc.html")
