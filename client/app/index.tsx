import { View, Pressable, StyleSheet, Text } from 'react-native'
import WateringCanIcon from '../components/svgs/WaterCanIcon';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', marginTop: 40 }} >Welcome to PlantPal!</Text>
      </View>

      <View style={styles.bottomBar}>
        <Pressable style={styles.canButton} onPress={() => console.log('recording!')}>
          <Pressable style={styles.canButton}>
            <WateringCanIcon size={32} color="#a8e070" />
          </Pressable>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1f0e',
  },
  bottomBar: {
    paddingBottom: 40,      // extra padding for iPhone home bar
    paddingTop: 20,
    backgroundColor: 'rgba(10, 20, 10, 0.95)',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(126,200,80,0.12)',
    borderWidth: 0.5,
    borderColor: 'rgba(126,200,80,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  }
})