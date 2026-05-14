import Svg, { Path } from 'react-native-svg'

type Props = {
  size?: number
  color?: string
  opacity?: number
}

export default function WateringCanIcon({ 
  size = 32, 
  color = '#a8e070',
  opacity = 0.85 
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      {/* Main body of the can */}
      <Path
        d="M6 18 Q6 14 10 13 L10 10 Q10 7 13 7 L20 7 Q23 7 23 10 L23 20 Q23 23 20 23 L13 23 Q10 23 10 20 L10 18 Z"
        fill={color}
        opacity={opacity}
      />
      
      {/* Spout */}
      <Path
        d="M23 12 L27 10 Q29 9 29 12 L29 18 Q29 20 27 19 L23 17"
        fill={color}
        opacity={opacity * 0.8}
      />
      
      {/* Water droplets */}
      <Path
        d="M10 24 Q9 28 11 30"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.6}
      />
      <Path
        d="M14 24 Q14 28 14 30"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.6}
      />
      <Path
        d="M18 24 Q18 28 17 30"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.6}
      />
    </Svg>
  )
}