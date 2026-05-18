import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse, Line } from 'react-native-svg'

type Props = {
  width?: number; height?: number
  bgTop?: string; bgBottom?: string; gridColor?: string
  moonColor?: string; frameColor?: string
  shelfColor?: string; shelfHighlight?: string
  potColor?: string; potRim?: string; soilColor?: string
}

export default function WeepingBellDeveloped({
  width, height,
  bgTop = '#1F3A2A', bgBottom = '#2A4A35', gridColor = '#2D4A38',
  moonColor = '#D4C56A', frameColor = 'rgba(101,67,33,0.35)',
  shelfColor = '#8B4F2A', shelfHighlight = '#A66238',
  potColor = '#B86E3A', potRim = '#C97D44', soilColor = '#3D2515',
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 680 1000" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', top: 0, left: 0 }}>
      <Defs>
        <LinearGradient id="bgFade" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={bgTop} />
          <Stop offset="100%" stopColor={bgBottom} />
        </LinearGradient>
        <Pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <Path d="M 20 0 L 0 0 0 20" fill="none" stroke={gridColor} strokeWidth="0.5" opacity="0.4" />
        </Pattern>
      </Defs>
      <Rect width="680" height="1000" fill="url(#bgFade)" />
      <Rect width="680" height="1000" fill="url(#grid)" />
      <Circle cx="80" cy="60" r="1.5" fill="#fff" opacity="0.6" />
      <Circle cx="220" cy="80" r="2" fill="#fff" opacity="0.5" />
      <Circle cx="420" cy="55" r="1.5" fill="#fff" opacity="0.3" />
      <Circle cx="600" cy="50" r="2" fill="#fff" opacity="0.4" />
      <Circle cx="560" cy="90" r="32" fill={moonColor} />
      <Circle cx="552" cy="85" r="28" fill={bgTop} />
      <Rect x="40" y="40" width="600" height="780" rx="8" fill="none" stroke={frameColor} strokeWidth="12" />
      <Line x1="340" y1="40" x2="340" y2="820" stroke={frameColor} strokeWidth="10" />
      <Line x1="40" y1="500" x2="640" y2="500" stroke={frameColor} strokeWidth="10" />
      <Rect x="80" y="700" width="520" height="24" rx="2" fill={shelfColor} />
      <Rect x="80" y="700" width="520" height="5" rx="2" fill={shelfHighlight} opacity="0.6" />
      <Path d="M 110 620 L 125 700 L 195 700 L 210 620 Z" fill="#9B5E2A" />
      <Rect x="104" y="612" width="112" height="16" rx="2" fill="#B06B30" />
      <Ellipse cx="157" cy="623" rx="46" ry="5" fill="#2A1A0F" />
      <Ellipse cx="157" cy="613" rx="20" ry="11" fill="#6A9E50" />
      <Ellipse cx="157" cy="601" rx="11" ry="7" fill="#8DC468" />
      <Path d="M 480 635 L 492 700 L 548 700 L 560 635 Z" fill="#9B5E2A" />
      <Rect x="474" y="627" width="92" height="14" rx="2" fill="#B06B30" />
      <Ellipse cx="517" cy="637" rx="36" ry="4" fill="#2A1A0F" />
      <Circle cx="507" cy="632" r="4" fill="#5A4A3A" />
      <Circle cx="520" cy="631" r="3.5" fill="#6A5A4A" />
      <Circle cx="530" cy="633" r="3" fill="#5A4A3A" />
      <Path d="M 200 490 L 250 700 L 430 700 L 480 490 Z" fill={potColor} />
      <Rect x="192" y="476" width="296" height="28" rx="4" fill={potRim} />
      <Ellipse cx="340" cy="490" rx="148" ry="11" fill={shelfColor} opacity="0.5" />
      <Ellipse cx="340" cy="493" rx="136" ry="10" fill={soilColor} />
      <Ellipse cx="315" cy="489" rx="28" ry="5" fill="#2A1A0F" opacity="0.7" />

      {/* Tall arching central stem */}
      <Path d="M340 480 Q344 350 340 250" fill="none" stroke="#5A8A50" strokeWidth="9" strokeLinecap="round" />
      {/* Drooping branches */}
      <Path d="M340 280 Q300 270 270 290 Q255 305 245 320" fill="none" stroke="#5A8A50" strokeWidth="6" strokeLinecap="round" />
      <Path d="M340 280 Q380 270 410 290 Q425 305 435 320" fill="none" stroke="#5A8A50" strokeWidth="6" strokeLinecap="round" />
      <Path d="M340 320 Q310 320 290 345 Q280 360 275 380" fill="none" stroke="#5A8A50" strokeWidth="5" strokeLinecap="round" />
      <Path d="M340 320 Q370 320 390 345 Q400 360 405 380" fill="none" stroke="#5A8A50" strokeWidth="5" strokeLinecap="round" />

      {/* Leaves */}
      <Ellipse cx="335" cy="445" rx="14" ry="7" fill="#7AB560" transform="rotate(-15 335 445)" />
      <Ellipse cx="350" cy="415" rx="14" ry="7" fill="#7AB560" transform="rotate(20 350 415)" />
      <Ellipse cx="320" cy="380" rx="12" ry="6" fill="#7AB560" transform="rotate(-25 320 380)" />
      <Ellipse cx="365" cy="375" rx="12" ry="6" fill="#7AB560" transform="rotate(25 365 375)" />

      {/* Hanging bells — many */}
      <Path d="M241 320 Q233 342 249 345 Q257 343 253 322Z" fill="#9070B8" />
      <Ellipse cx="247" cy="345" rx="5" ry="2.5" fill="#7A5AA0" />
      <Circle cx="247" cy="349" r="1.5" fill="#F4E090" />

      <Path d="M271 380 Q263 402 279 405 Q287 403 283 382Z" fill="#A088C0" />
      <Ellipse cx="277" cy="405" rx="5" ry="2.5" fill="#7A5AA0" />
      <Circle cx="277" cy="409" r="1.5" fill="#F4E090" />

      <Path d="M431 320 Q423 342 439 345 Q447 343 443 322Z" fill="#9070B8" />
      <Ellipse cx="437" cy="345" rx="5" ry="2.5" fill="#7A5AA0" />
      <Circle cx="437" cy="349" r="1.5" fill="#F4E090" />

      <Path d="M401 380 Q393 402 409 405 Q417 403 413 382Z" fill="#A088C0" />
      <Ellipse cx="407" cy="405" rx="5" ry="2.5" fill="#7A5AA0" />
      <Circle cx="407" cy="409" r="1.5" fill="#F4E090" />

      <Path d="M335 295 Q327 318 345 321 Q353 319 349 297Z" fill="#B098D0" />
      <Ellipse cx="341" cy="321" rx="5" ry="2.5" fill="#9070B8" />

      <Ellipse cx="430" cy="698" rx="14" ry="8" fill="#8B7355" />
      <Circle cx="424" cy="688" r="6" fill="#C4A882" />
      <Circle cx="424" cy="688" r="3" fill="#A08060" />
      <Circle cx="417" cy="677" r="1.5" fill="#8B7355" />
      <Circle cx="423" cy="676" r="1.5" fill="#8B7355" />
    </Svg>
  )
}