import { View, Pressable, StyleSheet, Text, Animated, Modal, TextInput, useWindowDimensions, KeyboardAvoidingView, Platform } from 'react-native'
import { EmotionScores } from '../types';
import { useState } from 'react';

const EMOTION_COLORS: Record<keyof EmotionScores, string> = {
  happy: '#a8e070',
  sad: '#6ab0d4',
  angry: '#e07070',
  neutral: '#b0a8e0',
  anxious: '#e0c870',
}


export default function StatsPanel({ currentPoints, emotions }: { currentPoints: number, emotions: EmotionScores }) {
  const progress = Math.min(currentPoints / 200, 1)

  return (
    <View style={statStyles.container}>
      <View style={statStyles.progressRow}>
        <Text style={statStyles.label}>GROWTH</Text>
        <View style={statStyles.progressTrack}>
          <View style={[statStyles.progressFill, { width: `${progress * 100}%` }]} />
        </View>
        <Text style={statStyles.label}>{currentPoints}/200</Text>
      </View>

      <View style={statStyles.emotionRow}>
        {(Object.keys(emotions) as (keyof EmotionScores)[]).map((key) => (
          <View key={key} style={statStyles.emotionCol}>
            <View style={statStyles.emotionTrack}>
              <View style={[
                statStyles.emotionFill,
                { 
                  height: `${(emotions[key] / 5) * 100}%`,
                  backgroundColor: EMOTION_COLORS[key],
                }
              ]} />
            </View>
            <Text style={statStyles.emotionLabel}>{key.slice(0, 3).toUpperCase()}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const statStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    gap: 14,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    color: 'rgba(200,230,180,0.4)',
    fontSize: 10,
    letterSpacing: 1.5,
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#a8e070',
    borderRadius: 2,
  },
  emotionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  emotionCol: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  emotionTrack: {
    width: '100%',
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  emotionFill: {
    width: '100%',
    borderRadius: 4,
    opacity: 0.8,
  },
  emotionLabel: {
    color: 'rgba(200,230,180,0.4)',
    fontSize: 9,
    letterSpacing: 1,
  },
})