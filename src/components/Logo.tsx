// Dunaya Dulnetha badge logo — recreated from Instagram branding
export default function Logo({ size = 48, color = "#C9A876" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dunaya Dulnetha logo"
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="57" stroke={color} strokeWidth="1.5" fill="none" opacity="0.9" />
      {/* Inner ring */}
      <circle cx="60" cy="60" r="51" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />

      {/* Top arc text path */}
      <defs>
        <path id="topArc" d="M 18,60 A 42,42 0 0,1 102,60" />
        <path id="bottomArc" d="M 22,68 A 40,40 0 0,0 98,68" />
      </defs>

      {/* Building / villa icon */}
      {/* Base */}
      <rect x="36" y="68" width="48" height="18" rx="1" fill={color} opacity="0.85" />
      {/* Door */}
      <rect x="53" y="74" width="14" height="12" rx="1" fill="#09080A" />
      {/* Main roof */}
      <polygon points="60,34 82,58 38,58" fill={color} opacity="0.9" />
      {/* Roof ridge cap */}
      <polygon points="60,30 65,38 55,38" fill={color} opacity="1" />
      {/* Left wing */}
      <rect x="28" y="62" width="16" height="10" rx="1" fill={color} opacity="0.6" />
      {/* Right wing */}
      <rect x="76" y="62" width="16" height="10" rx="1" fill={color} opacity="0.6" />
      {/* Left wing mini roof */}
      <polygon points="36,54 44,62 28,62" fill={color} opacity="0.65" />
      {/* Right wing mini roof */}
      <polygon points="84,54 92,62 76,62" fill={color} opacity="0.65" />
      {/* Windows */}
      <rect x="42" y="63" width="6" height="6" rx="0.5" fill={color} opacity="0.4" />
      <rect x="72" y="63" width="6" height="6" rx="0.5" fill={color} opacity="0.4" />

      {/* DUNAYA text along top arc */}
      <text
        fontFamily="serif"
        fontSize="9"
        fill={color}
        letterSpacing="3"
        opacity="0.9"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          DUNAYA
        </textPath>
      </text>

      {/* DULNETHA text along bottom arc */}
      <text
        fontFamily="serif"
        fontSize="7.5"
        fill={color}
        letterSpacing="2.5"
        opacity="0.7"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          DULNETHA
        </textPath>
      </text>

      {/* Small decorative dots */}
      <circle cx="22" cy="60" r="1.5" fill={color} opacity="0.5" />
      <circle cx="98" cy="60" r="1.5" fill={color} opacity="0.5" />
    </svg>
  );
}
