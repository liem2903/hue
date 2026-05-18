import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse, Line } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
  bgTop?: string
  bgBottom?: string
  gridColor?: string
  moonColor?: string
  frameColor?: string
  shelfColor?: string
  shelfHighlight?: string
  potColor?: string
  potRim?: string
  soilColor?: string
}

export default function CactusBloomDeveloping({
  width,
  height,
  bgTop = '#1F3A2A',
  bgBottom = '#2A4A35',
  gridColor = '#2D4A38',
  moonColor = '#D4C56A',
  frameColor = 'rgba(101,67,33,0.35)',
  shelfColor = '#8B4F2A',
  shelfHighlight = '#A66238',
  potColor = '#B86E3A',
  potRim = '#C97D44',
  soilColor = '#3D2515',
}: Props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 680 1000"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
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

      {/* Stars */}
      <Circle cx="80" cy="60" r="1.5" fill="#fff" opacity="0.6" />
      <Circle cx="160" cy="40" r="1" fill="#fff" opacity="0.4" />
      <Circle cx="220" cy="80" r="2" fill="#fff" opacity="0.5" />
      <Circle cx="310" cy="30" r="1" fill="#fff" opacity="0.6" />
      <Circle cx="420" cy="55" r="1.5" fill="#fff" opacity="0.3" />
      <Circle cx="480" cy="25" r="1" fill="#fff" opacity="0.5" />
      <Circle cx="600" cy="50" r="2" fill="#fff" opacity="0.4" />
      <Circle cx="100" cy="160" r="1" fill="#fff" opacity="0.3" />
      <Circle cx="260" cy="140" r="1.5" fill="#fff" opacity="0.4" />
      <Circle cx="500" cy="150" r="1" fill="#fff" opacity="0.6" />

      {/* Moon */}
      <Circle cx="560" cy="90" r="32" fill={moonColor} />
      <Circle cx="552" cy="85" r="28" fill={bgTop} />

      {/* Window frame */}
      <Rect x="40" y="40" width="600" height="780" rx="8" fill="none" stroke={frameColor} strokeWidth="12" />
      <Line x1="340" y1="40" x2="340" y2="820" stroke={frameColor} strokeWidth="10" />
      <Line x1="40" y1="500" x2="640" y2="500" stroke={frameColor} strokeWidth="10" />

      {/* Rain streaks */}
      <Line x1="120" y1="80" x2="110" y2="160" stroke="rgba(150,210,255,0.08)" strokeWidth="1.5" />
      <Line x1="200" y1="60" x2="190" y2="150" stroke="rgba(150,210,255,0.06)" strokeWidth="1" />
      <Line x1="460" y1="90" x2="450" y2="180" stroke="rgba(150,210,255,0.08)" strokeWidth="1.5" />
      <Line x1="580" y1="70" x2="570" y2="170" stroke="rgba(150,210,255,0.06)" strokeWidth="1" />

      {/* Shelf */}
      <Rect x="80" y="700" width="520" height="24" rx="2" fill={shelfColor} />
      <Rect x="80" y="700" width="520" height="5" rx="2" fill={shelfHighlight} opacity="0.6" />

      {/* Small decorative pot left */}
      <Path d="M 110 620 L 125 700 L 195 700 L 210 620 Z" fill="#9B5E2A" />
      <Rect x="104" y="612" width="112" height="16" rx="2" fill="#B06B30" />
      <Ellipse cx="157" cy="620" rx="54" ry="6" fill="#6B3A1A" opacity="0.5" />
      <Ellipse cx="157" cy="623" rx="46" ry="5" fill="#2A1A0F" />
      <Ellipse cx="157" cy="613" rx="20" ry="11" fill="#6A9E50" />
      <Ellipse cx="144" cy="607" rx="14" ry="8" fill="#7AB560" />
      <Ellipse cx="170" cy="606" rx="13" ry="8" fill="#7AB560" />
      <Ellipse cx="157" cy="601" rx="11" ry="7" fill="#8DC468" />

      {/* Small decorative pot right */}
      <Path d="M 480 635 L 492 700 L 548 700 L 560 635 Z" fill="#9B5E2A" />
      <Rect x="474" y="627" width="92" height="14" rx="2" fill="#B06B30" />
      <Ellipse cx="517" cy="634" rx="44" ry="5" fill="#6B3A1A" opacity="0.5" />
      <Ellipse cx="517" cy="637" rx="36" ry="4" fill="#2A1A0F" />
      <Circle cx="507" cy="632" r="4" fill="#5A4A3A" />
      <Circle cx="520" cy="631" r="3.5" fill="#6A5A4A" />
      <Circle cx="530" cy="633" r="3" fill="#5A4A3A" />

      {/* Main pot */}
      <Path d="M 200 490 L 250 700 L 430 700 L 480 490 Z" fill={potColor} />
      <Rect x="192" y="476" width="296" height="28" rx="4" fill={potRim} />
      <Ellipse cx="340" cy="490" rx="148" ry="11" fill={shelfColor} opacity="0.5" />
      <Ellipse cx="340" cy="493" rx="136" ry="10" fill={soilColor} />
      <Ellipse cx="315" cy="489" rx="28" ry="5" fill="#2A1A0F" opacity="0.7" />
      <Ellipse cx="370" cy="491" rx="20" ry="4" fill="#2A1A0F" opacity="0.5" />

      {/* Main stem — taller */}
      <Rect x="322" y="280" width="36" height="210" rx="18" fill="#5A8A40" />
      {/* Spines on stem */}
      <Circle cx="326" cy="295" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="354" cy="305" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="326" cy="325" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="354" cy="340" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="326" cy="360" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="354" cy="375" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="326" cy="395" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="354" cy="410" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="326" cy="430" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="354" cy="448" r="2.5" fill="#8DC468" opacity="0.6" />

      {/* Left arm — bigger */}
      <Path d="M322 360 Q272 355 268 320 Q265 295 285 290" fill="none" stroke="#5A8A40" strokeWidth="28" strokeLinecap="round" />
      <Circle cx="270" cy="318" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="286" cy="291" r="2.5" fill="#8DC468" opacity="0.6" />

      {/* Right arm */}
      <Path d="M358 390 Q408 385 412 350 Q415 325 395 320" fill="none" stroke="#5A8A40" strokeWidth="24" strokeLinecap="round" />
      <Circle cx="410" cy="348" r="2.5" fill="#8DC468" opacity="0.6" />
      <Circle cx="394" cy="321" r="2.5" fill="#8DC468" opacity="0.6" />

      {/* Opening bloom on top */}
      <Circle cx="340" cy="272" r="18" fill="#E8A0C0" />
      <Circle cx="340" cy="272" r="10" fill="#F4C430" />
      {/* Petals starting to open */}
      <Ellipse cx="340" cy="252" rx="6" ry="10" fill="#E8A0C0" opacity="0.8" />
      <Ellipse cx="357" cy="259" rx="6" ry="10" fill="#E8A0C0" opacity="0.8" transform="rotate(45 357 259)" />
      <Ellipse cx="323" cy="259" rx="6" ry="10" fill="#E8A0C0" opacity="0.8" transform="rotate(-45 323 259)" />

      {/* Snail */}
      <Ellipse cx="430" cy="698" rx="14" ry="8" fill="#8B7355" />
      <Path d="M416 698 Q409 691 416 686 Q427 680 433 690 Q436 697 427 699Z" fill="#A08060" />
      <Circle cx="424" cy="688" r="6" fill="#C4A882" />
      <Circle cx="424" cy="688" r="3" fill="#A08060" />
      <Line x1="420" y1="684" x2="417" y2="678" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      <Line x1="425" y1="683" x2="423" y2="677" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      <Circle cx="417" cy="677" r="1.5" fill="#8B7355" />
      <Circle cx="423" cy="676" r="1.5" fill="#8B7355" />
    </Svg>
  )
}