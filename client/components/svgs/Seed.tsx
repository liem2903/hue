import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse, Line } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
}

export default function Seed({ width, height }: Props) {
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
          <Stop offset="0%" stopColor="#1F3A2A" />
          <Stop offset="100%" stopColor="#2A4A35" />
        </LinearGradient>
        <Pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <Path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2D4A38" strokeWidth="0.5" opacity="0.4" />
        </Pattern>
      </Defs>

      {/* Background */}
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
      <Circle cx="640" cy="130" r="1" fill="#fff" opacity="0.5" />
      <Circle cx="100" cy="160" r="1" fill="#fff" opacity="0.3" />
      <Circle cx="260" cy="140" r="1.5" fill="#fff" opacity="0.4" />
      <Circle cx="500" cy="150" r="1" fill="#fff" opacity="0.6" />

      {/* Moon */}
      <Circle cx="560" cy="90" r="32" fill="#D4C56A" />
      <Circle cx="552" cy="85" r="28" fill="#1F3A2A" />

      {/* Window frame */}
      <Rect x="40" y="40" width="600" height="780" rx="8" fill="none" stroke="rgba(101,67,33,0.35)" strokeWidth="12" />
      {/* Window cross */}
      <Line x1="340" y1="40" x2="340" y2="820" stroke="rgba(101,67,33,0.3)" strokeWidth="10" />
      <Line x1="40" y1="430" x2="640" y2="430" stroke="rgba(101,67,33,0.3)" strokeWidth="10" />

      {/* Rain streaks on window */}
      <Line x1="120" y1="80" x2="110" y2="160" stroke="rgba(150,210,255,0.08)" strokeWidth="1.5" />
      <Line x1="200" y1="60" x2="190" y2="150" stroke="rgba(150,210,255,0.06)" strokeWidth="1" />
      <Line x1="460" y1="90" x2="450" y2="180" stroke="rgba(150,210,255,0.08)" strokeWidth="1.5" />
      <Line x1="580" y1="70" x2="570" y2="170" stroke="rgba(150,210,255,0.06)" strokeWidth="1" />
      <Line x1="280" y1="100" x2="270" y2="200" stroke="rgba(150,210,255,0.05)" strokeWidth="1" />

      {/* Shelf */}
      <Rect x="80" y="590" width="520" height="20" rx="2" fill="#8B4F2A" />
      <Rect x="80" y="590" width="520" height="4" rx="2" fill="#A66238" opacity="0.6" />

      {/* Small decorative pot on the left */}
      <Path d="M 155 530 L 165 590 L 215 590 L 225 530 Z" fill="#9B5E2A" />
      <Rect x="150" y="524" width="80" height="14" rx="2" fill="#B06B30" />
      <Ellipse cx="190" cy="531" rx="38" ry="5" fill="#6B3A1A" opacity="0.5" />
      <Ellipse cx="190" cy="533" rx="32" ry="4" fill="#2A1A0F" />
      {/* Small cactus in left pot */}
      <Rect x="187" y="500" width="6" height="30" rx="3" fill="#5A8A40" />
      <Path d="M187 515 Q175 510 175 500" fill="none" stroke="#5A8A40" strokeWidth="5" strokeLinecap="round" />
      <Path d="M193 510 Q205 505 205 495" fill="none" stroke="#5A8A40" strokeWidth="5" strokeLinecap="round" />

      {/* Small decorative pot on the right */}
      <Path d="M 470 545 L 478 590 L 518 590 L 526 545 Z" fill="#9B5E2A" />
      <Rect x="465" y="539" width="66" height="12" rx="2" fill="#B06B30" />
      <Ellipse cx="497" cy="545" rx="32" ry="4" fill="#6B3A1A" opacity="0.5" />
      <Ellipse cx="497" cy="547" rx="26" ry="3" fill="#2A1A0F" />
      {/* Small pebbles in right pot */}
      <Circle cx="490" cy="543" r="3" fill="#5A4A3A" />
      <Circle cx="500" cy="542" r="2.5" fill="#6A5A4A" />
      <Circle cx="506" cy="544" r="2" fill="#5A4A3A" />

      {/* Main pot — centered at 340 */}
      <Path d="M 260 450 L 285 590 L 395 590 L 420 450 Z" fill="#B86E3A" />
      <Rect x="252" y="442" width="176" height="22" rx="3" fill="#C97D44" />
      <Ellipse cx="340" cy="453" rx="86" ry="8" fill="#8B4F2A" opacity="0.5" />

      {/* Soil */}
      <Ellipse cx="340" cy="455" rx="78" ry="8" fill="#3D2515" />
      <Ellipse cx="325" cy="452" rx="20" ry="4" fill="#2A1A0F" opacity="0.7" />
      <Ellipse cx="360" cy="454" rx="14" ry="3" fill="#2A1A0F" opacity="0.5" />

      {/* Seed */}
      <Ellipse cx="340" cy="442" rx="11" ry="13" fill="#A0764A" />
      <Ellipse cx="336" cy="438" rx="5" ry="6" fill="#C49A6C" opacity="0.7" />

      {/* Sprout */}
      <Path d="M340 430 Q348 418 356 422" fill="none" stroke="#7DB55E" strokeWidth="3" strokeLinecap="round" />
      <Ellipse cx="358" cy="420" rx="8" ry="5" fill="#8DC468" transform="rotate(-20 358 420)" />

      {/* Snail on shelf */}
      <Ellipse cx="430" cy="588" rx="10" ry="6" fill="#8B7355" />
      <Path d="M420 588 Q415 583 420 580 Q428 576 432 582 Q434 587 428 588Z" fill="#A08060" />
      <Circle cx="427" cy="581" r="4" fill="#C4A882" />
      <Circle cx="427" cy="581" r="2" fill="#A08060" />
      <Line x1="424" y1="578" x2="422" y2="574" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" />
      <Line x1="427" y1="577" x2="426" y2="573" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" />
      <Circle cx="422" cy="573" r="1" fill="#8B7355" />
      <Circle cx="426" cy="572" r="1" fill="#8B7355" />
    </Svg>
  )
}