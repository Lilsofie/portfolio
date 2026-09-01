# One cover per project, each drawn from that project's own description.
# Grid exhibits render at 16:10, the featured exhibit at 4:3 (globals.css).

INK, INK_T = "#2f2f2b", "#f1ece1"
PAPER, MID, WARM_A, WARM_B = "#f7f2e9", "#f3ede2", "#e7ddce", "#d9c7a8"
TEXT, MUTED, HEAD = "#57524a", "#6f6960", "#33322f"
LINE, HAIR = "rgba(60,48,34,.22)", "rgba(60,48,34,.14)"

W, H = 400, 250          # 16:10 grid exhibits
FW, FH = 400, 300        # 4:3 featured exhibit

def lab(x, y, s, fill=MUTED, anchor="start", size=7.5):
    return (f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="Inter, sans-serif" '
            f'font-size="{size}" letter-spacing="1.5" fill="{fill}">{s}</text>')

def box(x, y, w, h, fill=MID, stroke=LINE, rx=2, sw=1):
    return (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" '
            f'stroke="{stroke}" stroke-width="{sw}"/>')

def ln(d, stroke=LINE, sw=1, dash=None):
    da = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<path d="{d}" fill="none" stroke="{stroke}" stroke-width="{sw}"{da}/>'

# ---- 01 Personal Website (featured, 4:3) --------------------------------
# "UI, front end, and back end" + five external sources through REST.
def personal_website():
    o = []
    layers = [("UI", 60, INK, INK_T), ("FRONT END", 122, WARM_B, "#2b2620"),
              ("BACK END", 184, MID, HEAD)]
    for name, y, fill, ink in layers:
        o.append(box(52, y, 214, 48, fill=fill, stroke=INK if fill == INK else LINE))
        o.append(lab(66, y + 28, name, fill=ink))
    # Five external sources feeding the back end.
    for i in range(5):
        sy = 46 + i * 34
        o.append(box(310, sy, 40, 20, fill=PAPER, stroke=HAIR))
        o.append(ln(f"M310 {sy+10} C 292 {sy+10}, 286 208, 266 208"))
    o.append(lab(310, 200, "FIVE SOURCES", size=7))
    o.append(ln(f"M52 {184+48+14} H266", stroke=HAIR))
    return svg(o, FW, FH)

# ---- 02 Hack the Valley (event platform) --------------------------------
def hack_the_valley():
    o = [box(96, 40, 208, 172, fill=PAPER)]
    o.append(ln("M96 66 H304", stroke=HAIR))
    o.append(lab(110, 58, "SCHEDULE"))
    blocks = [(78, 34, WARM_B), (118, 26, MID), (150, 44, INK), (200, 22, MID)]
    for y, h, fill in blocks:
        o.append(box(112, y, 118, h, fill=fill, stroke=INK if fill == INK else LINE))
    for y, h, _ in blocks:
        o.append(ln(f"M240 {y+h/2} H288", stroke=HAIR))
    for i in range(4):
        o.append(ln(f"M104 {78+i*44} H110", stroke=LINE))
    return svg(o, W, H)

# ---- 03 Literature Search Engine ----------------------------------------
# A graph of records resolving into a ranked result list.
def search_engine():
    o = []
    nodes = [(76, 76), (128, 52), (60, 138), (126, 122), (92, 190), (150, 176)]
    for i, (x, y) in enumerate(nodes):
        for x2, y2 in nodes[i + 1:]:
            if abs(x - x2) + abs(y - y2) < 96:
                o.append(ln(f"M{x} {y} L{x2} {y2}", stroke=HAIR))
    for i, (x, y) in enumerate(nodes):
        o.append(f'<circle cx="{x}" cy="{y}" r="{7 if i in (1,3) else 5}" fill="{PAPER}" '
                 f'stroke="{INK if i in (1,3) else LINE}" stroke-width="1.2"/>')
    o.append(lab(60, 216, "5,000+ RECORDS"))
    o.append(ln("M182 122 H214", stroke=INK, sw=1.2))
    o.append(ln("M208 117 L214 122 L208 127", stroke=INK, sw=1.2))
    # Ranked results — bar length is the score, descending.
    for i, w in enumerate((116, 92, 74, 58)):
        y = 62 + i * 34
        o.append(box(232, y, w, 22, fill=INK if i == 0 else MID,
                     stroke=INK if i == 0 else LINE))
        o.append(lab(232 + w + 8, y + 15, f"0{i+1}", size=7))
    o.append(lab(232, 216, "RANKED"))
    return svg(o, W, H)

# ---- 04 IP / Domain / URL Analysis Tool ---------------------------------
# Five external APIs converging into one investigation view.
def analysis_tool():
    o = []
    for i in range(5):
        y = 44 + i * 34
        o.append(box(40, y, 62, 22, fill=PAPER, stroke=HAIR))
        o.append(ln(f"M102 {y+11} C 150 {y+11}, 158 125, 196 125"))
    o.append(lab(40, 226, "FIVE APIs"))
    o.append(box(196, 56, 164, 138, fill=PAPER, stroke=INK, sw=1.2))
    o.append(ln("M196 84 H360", stroke=LINE))
    o.append(lab(210, 76, "INVESTIGATION", fill=HEAD))
    o.append(box(210, 98, 60, 60, fill=INK, stroke=INK))
    for i, w in enumerate((66, 52, 74)):
        o.append(box(282, 98 + i * 22, w, 10, fill=MID, stroke=HAIR, rx=1))
    o.append(ln("M210 172 H346", stroke=HAIR))
    return svg(o, W, H)

# ---- 05 Department Communication App ------------------------------------
def dept_app():
    o = [box(132, 34, 104, 182, fill=PAPER, stroke=INK, sw=1.2, rx=8)]
    o.append(ln("M168 44 H200", stroke=LINE, sw=1.4))
    o.append(lab(146, 74, "ANNOUNCEMENTS", size=6.4))
    for i, fill in enumerate((INK, MID, MID)):
        y = 86 + i * 38
        o.append(box(146, y, 76, 30, fill=fill, stroke=INK if fill == INK else LINE, rx=2))
        o.append(ln(f"M154 {y+11} H{200 if i==0 else 190}",
                    stroke=INK_T if fill == INK else LINE, sw=1.2))
        o.append(ln(f"M154 {y+20} H{182 if i==0 else 172}",
                    stroke="rgba(241,236,225,.5)" if fill == INK else HAIR))
    # Test coverage — JUnit and Mockito, per the description.
    for i in range(3):
        y = 96 + i * 34
        o.append(f'<path d="M266 {y} l6 6 l12 -12" fill="none" stroke="{INK}" '
                 f'stroke-width="1.5" stroke-linecap="round"/>')
        o.append(ln(f"M294 {y+2} H340", stroke=HAIR))
    o.append(lab(266, 216, "TESTED"))
    return svg(o, W, H)

# ---- 06 Eventful ---------------------------------------------------------
# Separate plans converging on one agreed date.
def eventful():
    o = []
    for i, (x, y, rot) in enumerate(((56, 74, -6), (92, 58, 3), (128, 82, -3))):
        o.append(f'<g transform="rotate({rot} {x+42} {y+40})">'
                 + box(x, y, 84, 80, fill=PAPER if i < 2 else MID)
                 + ln(f"M{x} {y+20} H{x+84}", stroke=HAIR)
                 + "".join(ln(f"M{x+10} {y+34+r*14} H{x+56}", stroke=HAIR) for r in range(3))
                 + "</g>")
    o.append(ln("M228 122 H258", stroke=INK, sw=1.2))
    o.append(ln("M252 117 L258 122 L252 127", stroke=INK, sw=1.2))
    o.append(box(274, 74, 84, 80, fill=INK, stroke=INK))
    o.append(ln("M274 94 H358", stroke="rgba(241,236,225,.28)"))
    for r in range(2):
        for c in range(4):
            cx, cy = 288 + c * 18, 108 + r * 18
            on = (r, c) == (0, 2)
            o.append(f'<circle cx="{cx}" cy="{cy}" r="{5 if on else 3}" '
                     f'fill="{INK_T if on else "rgba(241,236,225,.34)"}"/>')
    o.append(lab(56, 190, "SEPARATE PLANS"))
    o.append(lab(274, 190, "ONE DATE", fill=HEAD))
    return svg(o, W, H)

# ---- 07 Not that Deep ----------------------------------------------------
# A daily reminder to enjoy life: the restraint is the content.
def not_that_deep():
    o = [ln("M40 156 H360", stroke=HAIR)]
    o.append(f'<circle cx="200" cy="112" r="26" fill="none" stroke="{INK}" stroke-width="1.4"/>')
    for i in range(8):
        import math
        a = math.radians(i * 45)
        x1, y1 = 200 + 36 * math.cos(a), 112 + 36 * math.sin(a)
        x2, y2 = 200 + 44 * math.cos(a), 112 + 44 * math.sin(a)
        o.append(ln(f"M{x1:.1f} {y1:.1f} L{x2:.1f} {y2:.1f}", stroke=LINE))
    o.append(lab(200, 186, "ONE A DAY", anchor="middle"))
    return svg(o, W, H)

# ---- 08 System Monitoring Tool -------------------------------------------
# Linux utilisation metrics, plus the fork-and-pipes structure.
def system_monitor():
    o = [box(40, 36, 320, 106, fill=PAPER)]
    o.append(ln("M40 58 H360", stroke=HAIR))
    o.append(lab(54, 51, "/PROC", size=7))
    for i, (name, frac) in enumerate((("MEM", .72), ("CPU", .41), ("CORES", .58))):
        y = 74 + i * 22
        o.append(lab(54, y + 9, name, size=6.6))
        o.append(box(104, y, 220, 11, fill=MID, stroke=HAIR, rx=1))
        o.append(box(104, y, round(220 * frac), 11, fill=INK, stroke=INK, rx=1))
    # fork() into two pipes, then back.
    o.append(ln("M76 168 V186", stroke=INK, sw=1.2))
    o.append(ln("M76 186 H200 M76 186 H76", stroke=INK, sw=1.2))
    o.append(ln("M76 186 V208 M200 186 V208", stroke=INK, sw=1.2))
    o.append(ln("M76 186 H200", stroke=INK, sw=1.2))
    for x in (76, 200):
        o.append(box(x - 26, 208, 52, 22, fill=MID))
    o.append(lab(240, 180, "FORK"))
    o.append(lab(240, 196, "PIPES"))
    o.append(lab(240, 222, "SIGINT / SIGTSTP", size=6.6))
    return svg(o, W, H)

def svg(parts, w, h):
    return (f'<svg viewBox="0 0 {w} {h}" width="100%" height="100%" '
            f'style="display:block">{"".join(parts)}</svg>')

COVERS = [
    ("02", "Hack the Valley Website", "Event Platform", hack_the_valley),
    ("03", "Literature Search Engine", "Information Retrieval", search_engine),
    ("04", "IP, Domain &amp; URL Analysis", "Cybersecurity Tooling", analysis_tool),
    ("05", "Department Comms App", "Android", dept_app),
    ("06", "Eventful", "Mobile App", eventful),
    ("07", "Not that Deep", "Web App", not_that_deep),
    ("08", "System Monitoring Tool", "Systems Programming", system_monitor),
]

SHELL = '''<!doctype html>
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
    body {{ margin: 0; font-family: Inter, system-ui, sans-serif; background: #0b0a09; }}
    a {{ color: #b8b0a2; }} a:hover {{ color: #ece6da; }}
    .meta {{ font-size: 9.5px; letter-spacing: .2em; text-transform: uppercase; }}
    .serif {{ font-family: Faustina, Georgia, serif; }}
    .frame {{ background: rgba(255,255,255,.55); border: 1px solid rgba(60,48,34,.18);
      border-radius: 2px; overflow: hidden; }}
  </style>
</helmet>
{body}
</x-dc>
<script data-dc-script data-props='{{"$preview":{{"width":{w},"height":{h}}}}}'>
class Component extends DCLogic {{}}
</script>
</body>
</html>
'''

def card(num, title, kind, ratio, art):
    return f'''    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div class="frame" style="aspect-ratio: {ratio};">{art}</div>
      <div style="display: flex; flex-direction: column; gap: 3px;">
        <div style="display: flex; justify-content: space-between; gap: 12px;">
          <span class="meta" style="color: #6f6960;">Exhibit {num}</span>
          <span class="meta" style="color: #6f6960;">{kind}</span>
        </div>
        <span class="serif" style="color: #ece6da; font-size: 16px;">{title}</span>
      </div>
    </div>'''

grid = "\n".join(card(n, t, k, "16 / 10", f()) for n, t, k, f in COVERS)
main_body = f'''<div style="padding: 40px; display: flex; flex-direction: column; gap: 26px;">
  <div style="display: flex; flex-direction: column; gap: 6px;">
    <span class="meta" style="color: #d9c7a8;">Project covers</span>
    <span style="color: rgba(236,230,218,.55); font-size: 13px; line-height: 1.5; max-width: 62ch;">
      One drawing per project, taken from what that project actually does &mdash; not a browser
      window repeated eight times. Same frame, stroke weight and palette throughout, so they read
      as a set on the page.
    </span>
  </div>
  <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px;">
{grid}
  </div>
</div>'''

feat_body = f'''<div style="padding: 40px; display: flex; flex-direction: column; gap: 26px;">
  <div style="display: flex; flex-direction: column; gap: 6px;">
    <span class="meta" style="color: #d9c7a8;">Featured exhibit &middot; 4:3</span>
    <span style="color: rgba(236,230,218,.55); font-size: 13px; line-height: 1.5; max-width: 52ch;">
      The featured slot is a different shape and renders far larger, so it gets its own drawing:
      the three layers you built, with the five external sources feeding the back end.
    </span>
  </div>
{card("01", "Personal Website", "Full-Stack Web", "4 / 3", personal_website())}
</div>'''

open("Main.dc.html", "w").write(SHELL.format(body=main_body, w=800, h=1500))
open("Featured.dc.html", "w").write(SHELL.format(body=feat_body, w=560, h=520))
print("wrote Main.dc.html, Featured.dc.html")
