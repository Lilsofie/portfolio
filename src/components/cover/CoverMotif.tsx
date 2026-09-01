export type Motif = "network" | "aperture" | "stack" | "route";

export default function CoverMotif({
  motif,
  detail = "cover",
  className,
}: {
  motif: Motif;
  detail?: "cover" | "label";
  className?: string;
}) {
  const fine = detail === "cover";

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {motif === "network" && (
        <>
          <circle cx="100" cy="100" r="78" stroke="var(--motif-line)" strokeWidth={fine ? 1 : 3} />
          {fine && <circle cx="100" cy="100" r="30" stroke="var(--motif-line)" strokeWidth="1" />}
          <g stroke="var(--motif-accent)" strokeWidth={fine ? 1.2 : 3}>
            <path d="M100 22 L170.7 141 L29.3 141 Z" />
            {fine && <path d="M22 100 L170.7 59 L129.4 168" />}
          </g>
          <g fill="var(--motif-accent)">
            <circle cx="100" cy="22" r={fine ? 6 : 11} />
            <circle cx="170.7" cy="141" r={fine ? 6 : 11} />
            <circle cx="29.3" cy="141" r={fine ? 6 : 11} />
          </g>
          {fine && (
            <g fill="var(--motif-bg)" stroke="var(--motif-line-strong)" strokeWidth="1.4">
              <circle cx="22" cy="100" r="5.5" />
              <circle cx="178" cy="100" r="5.5" />
              <circle cx="170.7" cy="59" r="5.5" />
              <circle cx="29.3" cy="59" r="5.5" />
            </g>
          )}
        </>
      )}

      {motif === "aperture" && (
        <>
          <circle cx="100" cy="100" r="78" stroke="var(--motif-line)" strokeWidth={fine ? 1 : 3} />
          {fine && <circle cx="100" cy="100" r="64" stroke="var(--motif-line)" strokeWidth="1" />}
          <g stroke="var(--motif-accent)" strokeWidth={fine ? 1.3 : 3} strokeLinecap="round">
            <path d="M100 66 L163.9 55.3" /><path d="M129.4 83 L170.7 133" />
            <path d="M129.4 117 L106.8 177.7" /><path d="M100 134 L36.1 144.7" />
            <path d="M70.6 117 L29.3 67" /><path d="M70.6 83 L93.2 22.3" />
          </g>
          <path
            d="M100 66 L129.4 83 L129.4 117 L100 134 L70.6 117 L70.6 83 Z"
            stroke="var(--motif-accent)"
            strokeWidth={fine ? 1.6 : 3.5}
          />
        </>
      )}

      {motif === "stack" && (
        <>
          {/* Things I built: closed forms locked together on a ground line. */}
          <path d="M22 158 H178" stroke="var(--motif-line)" strokeWidth={fine ? 1 : 2.5} />
          <g stroke="var(--motif-accent)" strokeWidth={fine ? 1.5 : 3.5}>
            <rect x="46" y="106" width="54" height="52" />
            <rect x="100" y="72" width="42" height="86" />
            <rect x="142" y="120" width="36" height="38" />
            {fine && <rect x="72" y="66" width="28" height="40" />}
          </g>
          {fine && (
            <g stroke="var(--motif-line-strong)" strokeWidth="1" strokeDasharray="3 4">
              <path d="M46 106 L72 66" /><path d="M142 72 L178 120" />
            </g>
          )}
          <g fill="var(--motif-accent)">
            <circle cx="46" cy="106" r={fine ? 4 : 7} />
            <circle cx="100" cy="72" r={fine ? 4 : 7} />
            <circle cx="142" cy="120" r={fine ? 4 : 7} />
          </g>
        </>
      )}

      {motif === "route" && (
        <>
          {/* Places and teams: one continuous path with stations along it. */}
          <path
            d="M22 132 C 62 132, 64 74, 92 74 S 140 128, 168 104 S 186 58, 190 58"
            stroke="var(--motif-accent)"
            strokeWidth={fine ? 1.8 : 3.5}
          />
          {fine && (
            <g stroke="var(--motif-line)" strokeWidth="1.2">
              <rect x="12" y="112" width="20" height="20" />
              <rect x="82" y="52" width="20" height="22" />
              <rect x="158" y="82" width="20" height="22" />
            </g>
          )}
          <g fill="var(--motif-accent)">
            <circle cx="22" cy="132" r={fine ? 5 : 9} />
            <circle cx="92" cy="74" r={fine ? 5 : 9} />
            <circle cx="168" cy="104" r={fine ? 5 : 9} />
          </g>
        </>
      )}
    </svg>
  );
}
