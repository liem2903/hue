import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse, Line } from 'react-native-svg'

type Props = {
  width?: number; height?: number
  bgTop?: string; bgBottom?: string; gridColor?: string
  moonColor?: string; frameColor?: string
  shelfColor?: string; shelfHighlight?: string
  potColor?: string; potRim?: string; soilColor?: string
}

export default function ClimbingVineDeveloped({
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
      <Path d="M 200 490 L 250 700 L 430 700 L 480 490 Z" fill={potColor} />
      <Rect x="192" y="476" width="296" height="28" rx="4" fill={potRim} />
      <Ellipse cx="340" cy="490" rx="148" ry="11" fill={shelfColor} opacity="0.5" />
      <Ellipse cx="340" cy="493" rx="136" ry="10" fill={soilColor} />
      <Ellipse cx="315" cy="489" rx="28" ry="5" fill="#2A1A0F" opacity="0.7" />

      {/* Tall trellis */}
      <Rect x="335" y="180" width="6" height="300" rx="2" fill="#8B6F3F" opacity="0.6" />
      <Rect x="295" y="280" width="86" height="4" fill="#8B6F3F" opacity="0.5" />
      <Rect x="295" y="380" width="86" height="4" fill="#8B6F3F" opacity="0.5" />

      {/* Lush winding vine */}
      <Path d="M340 480 Q300 450 320 410 Q360 390 350 350 Q325 320 365 290 Q380 260 340 230 Q310 210 340 185" fill="none" stroke="#4A8A50" strokeWidth="8" strokeLinecap="round" />
      <Path d="M340 480 Q380 460 360 420 Q325 400 345 360 Q380 340 360 310" fill="none" stroke="#5A9A60" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

      {/* Many leaves */}
      <Path d="M308 442 Q288 438 290 458 Q304 464 308 442Z" fill="#6AB060" />
      <Path d="M358 415 Q378 410 376 432 Q362 436 358 415Z" fill="#6AB060" />
      <Path d="M335 375 Q315 370 318 392 Q331 397 335 375Z" fill="#6AB060" />
      <Path d="M358 340 Q380 335 378 358 Q362 363 358 340Z" fill="#6AB060" />
      <Path d="M325 305 Q304 300 308 324 Q321 328 325 305Z" fill="#6AB060" />
      <Path d="M358 270 Q380 265 378 290 Q362 294 358 270Z" fill="#6AB060" />
      <Path d="M325 240 Q304 235 308 258 Q321 262 325 240Z" fill="#6AB060" />
      <Path d="M350 205 Q372 200 370 222 Q356 227 350 205Z" fill="#6AB060" />
      <Path d="M320 195 Q300 190 304 212 Q316 216 320 195Z" fill="#6AB060" />

      {/* Small flowers */}
      <Circle cx="290" cy="448" r="6" fill="#D8C0E8" />
      <Circle cx="380" cy="425" r="6" fill="#D8C0E8" />
      <Circle cx="378" cy="285" r="6" fill="#D8C0E8" />
      <Circle cx="370" cy="218" r="6" fill="#D8C0E8" />
      <Circle cx="290" cy="448" r="2.5" fill="#F4E090" />
      <Circle cx="380" cy="425" r="2.5" fill="#F4E090" />
      <Circle cx="378" cy="285" r="2.5" fill="#F4E090" />
      <Circle cx="370" cy="218" r="2.5" fill="#F4E090" />

      <Ellipse cx="430" cy="698" rx="14" ry="8" fill="#8B7355" />
      <Circle cx="424" cy="688" r="6" fill="#C4A882" />
      <Circle cx="424" cy="688" r="3" fill="#A08060" />
      <Circle cx="417" cy="677" r="1.5" fill="#8B7355" />
      <Circle cx="423" cy="676" r="1.5" fill="#8B7355" />
    </Svg>
  )
}