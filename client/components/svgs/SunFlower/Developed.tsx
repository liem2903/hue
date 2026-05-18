import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse, Line } from 'react-native-svg'

type Props = {
  width?: number; height?: number
  bgTop?: string; bgBottom?: string; gridColor?: string
  moonColor?: string; frameColor?: string
  shelfColor?: string; shelfHighlight?: string
  potColor?: string; potRim?: string; soilColor?: string
}

export default function SunflowerDeveloped({
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

      {/* Tall stem */}
      <Rect x="335" y="240" width="10" height="240" rx="4" fill="#6AA050" />
      {/* Leaves */}
      <Ellipse cx="290" cy="420" rx="36" ry="18" fill="#7AB560" transform="rotate(-25 290 420)" />
      <Ellipse cx="390" cy="390" rx="36" ry="18" fill="#7AB560" transform="rotate(25 390 390)" />
      <Ellipse cx="295" cy="350" rx="32" ry="16" fill="#8DC468" transform="rotate(-20 295 350)" />
      <Ellipse cx="385" cy="320" rx="32" ry="16" fill="#8DC468" transform="rotate(20 385 320)" />
      <Path d="M290 420 L335 420" stroke="#5A8A40" strokeWidth="0.8" />
      <Path d="M390 390 L345 390" stroke="#5A8A40" strokeWidth="0.8" />
      <Path d="M295 350 L335 355" stroke="#5A8A40" strokeWidth="0.8" />
      <Path d="M385 320 L345 325" stroke="#5A8A40" strokeWidth="0.8" />

      {/* Full sunflower head */}
      {/* Outer petals (12) */}
      <Ellipse cx="340" cy="180" rx="14" ry="36" fill="#F4C430" />
      <Ellipse cx="340" cy="280" rx="14" ry="36" fill="#F4C430" />
      <Ellipse cx="290" cy="230" rx="36" ry="14" fill="#F4C430" />
      <Ellipse cx="390" cy="230" rx="36" ry="14" fill="#F4C430" />
      <Ellipse cx="305" cy="195" rx="14" ry="34" fill="#F4C430" transform="rotate(-45 305 195)" />
      <Ellipse cx="375" cy="195" rx="14" ry="34" fill="#F4C430" transform="rotate(45 375 195)" />
      <Ellipse cx="305" cy="265" rx="14" ry="34" fill="#F4C430" transform="rotate(45 305 265)" />
      <Ellipse cx="375" cy="265" rx="14" ry="34" fill="#F4C430" transform="rotate(-45 375 265)" />
      <Ellipse cx="320" cy="185" rx="10" ry="32" fill="#F8D058" transform="rotate(-22 320 185)" />
      <Ellipse cx="360" cy="185" rx="10" ry="32" fill="#F8D058" transform="rotate(22 360 185)" />
      <Ellipse cx="320" cy="275" rx="10" ry="32" fill="#F8D058" transform="rotate(22 320 275)" />
      <Ellipse cx="360" cy="275" rx="10" ry="32" fill="#F8D058" transform="rotate(-22 360 275)" />

      {/* Center disc */}
      <Circle cx="340" cy="230" r="32" fill="#5A3A1A" />
      <Circle cx="340" cy="230" r="26" fill="#7A4F2A" />
      {/* Seeds pattern */}
      <Circle cx="335" cy="225" r="2" fill="#3A2510" />
      <Circle cx="345" cy="225" r="2" fill="#3A2510" />
      <Circle cx="340" cy="232" r="2" fill="#3A2510" />
      <Circle cx="330" cy="235" r="2" fill="#3A2510" />
      <Circle cx="350" cy="235" r="2" fill="#3A2510" />
      <Circle cx="335" cy="240" r="2" fill="#3A2510" />
      <Circle cx="345" cy="240" r="2" fill="#3A2510" />

      <Ellipse cx="430" cy="698" rx="14" ry="8" fill="#8B7355" />
      <Circle cx="424" cy="688" r="6" fill="#C4A882" />
      <Circle cx="424" cy="688" r="3" fill="#A08060" />
      <Circle cx="417" cy="677" r="1.5" fill="#8B7355" />
      <Circle cx="423" cy="676" r="1.5" fill="#8B7355" />
    </Svg>
  )
}