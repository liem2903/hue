import Svg, { Defs, LinearGradient, Pattern, Stop, Rect, Circle, Path, Ellipse } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
}

export default function Seed({ width = 360, height = 480 }: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 680 700">
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
      <Rect width="680" height="700" fill="url(#bgFade)" />
      <Rect width="680" height="700" fill="url(#grid)" />

      {/* Moon */}
      <Circle cx="560" cy="90" r="32" fill="#D4C56A" />
      <Circle cx="552" cy="85" r="28" fill="#1F3A2A" />

      {/* Wooden shelf */}
      <Rect x="120" y="540" width="440" height="20" rx="2" fill="#8B4F2A" />
      <Rect x="120" y="540" width="440" height="4" rx="2" fill="#A66238" opacity="0.6" />

      {/* Pot */}
      <Path d="M 280 400 L 305 540 L 415 540 L 440 400 Z" fill="#B86E3A" />
      <Rect x="272" y="392" width="176" height="22" rx="3" fill="#C97D44" />
      <Ellipse cx="360" cy="403" rx="86" ry="8" fill="#8B4F2A" opacity="0.5" />

      {/* Soil */}
      <Ellipse cx="360" cy="405" rx="78" ry="8" fill="#3D2515" />
      <Ellipse cx="345" cy="402" rx="20" ry="4" fill="#2A1A0F" opacity="0.7" />
      <Ellipse cx="380" cy="404" rx="14" ry="3" fill="#2A1A0F" opacity="0.5" />

      {/* Seed */}
      <Ellipse cx="360" cy="392" rx="11" ry="13" fill="#A0764A" />
      <Ellipse cx="356" cy="388" rx="5" ry="6" fill="#C49A6C" opacity="0.7" />

      {/* Tiny sprout */}
      <Path d="M360 380 Q368 368 376 372" fill="none" stroke="#7DB55E" strokeWidth="3" strokeLinecap="round" />
      <Ellipse cx="378" cy="370" rx="8" ry="5" fill="#8DC468" transform="rotate(-20 378 370)" />
    </Svg>
  )
}
