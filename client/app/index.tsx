import { useEffect, useRef, useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Animated,
  Easing,
  Modal,
  TextInput,
  Keyboard,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import WateringCanIcon from "../components/svgs/WaterCanIcon";
import PlantDisplay from "@/components/PlantDisplay";
import StatsPanel from "@/components/StatsPanel";
import { usePlant } from "@/hooks/usePlant";
import { useSpeechInput } from "@/hooks/useSpeechInput";
import { EmotionKey, EmotionScores, PlantType } from "@/types";
import { parseEmotion } from "@/utils/api";
import { applyEmotionEntry } from "@/utils/emotions";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();

  const {
    plant,
    isLoading,
    showNamePrompt,
    newPlantName,
    setNewPlantName,
    currentPoints,
    setCurrentPoints,
    emotions,
    setEmotions,
    saveProgress,
    createPlant,
    evolutionPending,
    confirmEvolution,
  } = usePlant();

  const {
    isListening,
    showConfirm,
    setShowConfirm,
    pendingTranscript,
    setPendingTranscript,
    pulseAnimation,
    onRecordPress,
  } = useSpeechInput();

  const [chosenType, setChosenType] = useState<PlantType | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const celebrationScale = useRef(new Animated.Value(0)).current;

  const sparkleAnim1 = useRef(new Animated.Value(0)).current;
  const sparkleAnim2 = useRef(new Animated.Value(0)).current;
  const [sparkleColor, setSparkleColor] = useState("#a8e070");

  const EMOTION_COLORS: Record<EmotionKey, string> = {
    happy: "#a8e070",
    sad: "#6ab0d4",
    angry: "#e07070",
    neutral: "#b0a8e0",
    anxious: "#e0c870",
  };

  const triggerRipple = (scores: EmotionScores) => {
    const dominant = (Object.keys(scores) as EmotionKey[]).reduce((a, b) =>
      scores[a] >= scores[b] ? a : b,
    );
    setSparkleColor(EMOTION_COLORS[dominant]);
    sparkleAnim1.setValue(0);
    sparkleAnim2.setValue(0);
    Animated.sequence([
      Animated.timing(sparkleAnim1, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(sparkleAnim2, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (!evolutionPending) return;
    if (evolutionPending.candidates.length === 1) {
      setChosenType(evolutionPending.candidates[0]);
      setShowCelebration(true);
    }
  }, [evolutionPending]);

  useEffect(() => {
    if (showCelebration) {
      Animated.spring(celebrationScale, {
        toValue: 1,
        useNativeDriver: true,
        damping: 14,
        stiffness: 100,
      }).start();
    } else {
      celebrationScale.setValue(0);
    }
  }, [showCelebration]);

  const handlePickType = (type: PlantType) => {
    setChosenType(type);
    setShowCelebration(true);
  };

  const handleContinue = async () => {
    if (!chosenType) return;
    await confirmEvolution(chosenType);
    setShowCelebration(false);
    setChosenType(null);
  };

  const sendToBackend = async () => {
    setShowConfirm(false);
    try {
      console.log(pendingTranscript);
      const emotionScores = await parseEmotion(pendingTranscript);
      triggerRipple(emotionScores);
      const { newEmotions, newPoints, didEvolve } = applyEmotionEntry(
        emotions,
        emotionScores,
        currentPoints,
      );
      setEmotions(newEmotions);
      setCurrentPoints(newPoints);
      await saveProgress(newEmotions, newPoints, didEvolve);
    } catch (error) {
      console.error("Error parsing emotion:", error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <PlantDisplay
          plantType={null}
          stage={null}
          width={width}
          height={height}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <PlantDisplay
        plantType={plant?.plantType ?? null}
        stage={plant?.stage ?? null}
        width={width}
        height={height}
      />

      {/* Sparkle burst 1 */}
      {(
        [
          [0, -1],
          [0.71, -0.71],
          [1, 0],
          [0.71, 0.71],
          [0, 1],
          [-0.71, 0.71],
          [-1, 0],
          [-0.71, -0.71],
        ] as [number, number][]
      ).map(([dx, dy], i) => (
        <Animated.Text
          key={`s1-${i}`}
          style={{
            position: "absolute",
            top: height * 0.4,
            left: width * 0.45,
            color: sparkleColor,
            fontSize: 14,
            opacity: sparkleAnim1.interpolate({
              inputRange: [0, 0.2, 0.8, 1],
              outputRange: [0, 1, 1, 0],
            }),
            transform: [
              {
                translateX: sparkleAnim1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, dx * 70],
                }),
              },
              {
                translateY: sparkleAnim1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, dy * 70],
                }),
              },
              {
                scale: sparkleAnim1.interpolate({
                  inputRange: [0, 0.4, 1],
                  outputRange: [0.2, 1.3, 0.6],
                }),
              },
            ],
          }}
        >
          ✦
        </Animated.Text>
      ))}

      {/* Sparkle burst 2 */}
      {(
        [
          [0, -1],
          [0.71, -0.71],
          [1, 0],
          [0.71, 0.71],
          [0, 1],
          [-0.71, 0.71],
          [-1, 0],
          [-0.71, -0.71],
        ] as [number, number][]
      ).map(([dx, dy], i) => (
        <Animated.Text
          key={`s2-${i}`}
          style={{
            position: "absolute",
            top: height * 0.5,
            left: width * 0.58,
            color: sparkleColor,
            fontSize: 14,
            opacity: sparkleAnim2.interpolate({
              inputRange: [0, 0.2, 0.8, 1],
              outputRange: [0, 1, 1, 0],
            }),
            transform: [
              {
                translateX: sparkleAnim2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, dx * 70],
                }),
              },
              {
                translateY: sparkleAnim2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, dy * 70],
                }),
              },
              {
                scale: sparkleAnim2.interpolate({
                  inputRange: [0, 0.4, 1],
                  outputRange: [0.2, 1.3, 0.6],
                }),
              },
            ],
          }}
        >
          ✦
        </Animated.Text>
      ))}

      <View style={styles.header}>
        <View style={styles.growingTag}>
          <Text style={styles.growingText}>↑ GROWING</Text>
        </View>
        <Text style={styles.plantName}>{plant?.name ?? ""}</Text>
      </View>

      <Modal visible={showNamePrompt} transparent animationType="fade">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.centeredModalOverlay}>
            <View style={styles.centeredModalBox}>
              <Text style={styles.modalTitle}>● NAME YOUR PLANT</Text>
              <TextInput
                style={styles.modalInput}
                value={newPlantName}
                onChangeText={setNewPlantName}
                placeholder="e.g. Mochi"
                autoFocus
                selectionColor="#a8e070"
                placeholderTextColor="rgba(255,255,255,0.2)"
              />
              <View style={styles.modalButtons}>
                <Pressable style={styles.sendBtn} onPress={createPlant}>
                  <Text style={styles.sendText}>Create →</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal visible={showConfirm} transparent animationType="slide">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>● WHAT YOU SAID</Text>
              <TextInput
                style={styles.modalInput}
                value={pendingTranscript}
                onChangeText={setPendingTranscript}
                multiline
                autoFocus
                selectionColor="#a8e070"
                placeholderTextColor="rgba(255,255,255,0.2)"
              />
              <View style={styles.modalButtons}>
                <Pressable
                  style={styles.cancelBtn}
                  onPress={() => {
                    Keyboard.dismiss();
                    setShowConfirm(false);
                  }}
                >
                  <Text style={styles.cancelText}>Discard</Text>
                </Pressable>
                <Pressable
                  style={styles.sendBtn}
                  onPress={() => {
                    Keyboard.dismiss();
                    sendToBackend();
                  }}
                >
                  <Text style={styles.sendText}>Send →</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Tie-breaker picker */}
      <Modal
        visible={
          evolutionPending !== null &&
          evolutionPending.candidates.length > 1 &&
          !showCelebration
        }
        transparent
        animationType="fade"
      >
        <View style={styles.centeredModalOverlay}>
          <View style={styles.centeredModalBox}>
            <Text style={styles.modalTitle}>● CHOOSE YOUR PLANT'S FORM</Text>
            <View style={styles.pickerButtons}>
              {evolutionPending?.candidates.map((type) => (
                <Pressable
                  key={type}
                  style={styles.sendBtn}
                  onPress={() => handlePickType(type)}
                >
                  <Text style={styles.sendText}>{type}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* Evolution celebration */}
      <Modal
        visible={showCelebration && chosenType !== null}
        transparent
        animationType="fade"
      >
        <View style={{ flex: 1 }}>
          {evolutionPending && chosenType && (
            <PlantDisplay
              plantType={chosenType}
              stage={evolutionPending.newStage}
              width={width}
              height={height}
            />
          )}
          <Animated.View
            style={[
              styles.celebrationBar,
              {
                transform: [{ scale: celebrationScale }],
                opacity: celebrationScale,
              },
            ]}
          >
            <Text style={styles.celebrationTitle}>● YOUR PLANT EVOLVED</Text>
            <Text style={styles.celebrationStage}>
              {evolutionPending?.newStage?.toUpperCase() ?? ""}
            </Text>
            <Pressable style={styles.sendBtn} onPress={handleContinue}>
              <Text style={styles.sendText}>Continue →</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>

      <View style={styles.bottomBar}>
        <StatsPanel currentPoints={currentPoints} emotions={emotions} />
        <View style={styles.buttonRow}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Animated.View style={{ transform: [{ scale: pulseAnimation }] }}>
              <Pressable
                style={[
                  styles.canButton,
                  isListening && {
                    backgroundColor: "rgba(126,200,80,0.25)",
                    borderColor: "rgba(126,200,80,0.6)",
                  },
                ]}
                onPress={onRecordPress}
              >
                <WateringCanIcon size={32} color="#a8e070" />
              </Pressable>
            </Animated.View>
          </View>

          {isListening && (
            <Text
              style={{
                color: "#a8e070",
                marginTop: 8,
                fontSize: 12,
                letterSpacing: 2,
              }}
            >
              ● listening
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F3A2A",
  },
  header: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    alignItems: "center",
    gap: 8,
  },
  growingTag: {
    backgroundColor: "rgba(126,200,80,0.15)",
    borderWidth: 0.5,
    borderColor: "rgba(126,200,80,0.3)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  growingText: {
    color: "#a8e070",
    fontSize: 10,
    letterSpacing: 2,
  },
  plantName: {
    color: "#fff",
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "300",
    letterSpacing: 1,
  },
  bottomBar: {
    marginTop: "auto",
    backgroundColor: "rgba(10, 20, 10, 0.95)",
    borderTopWidth: 0.5,
    borderTopColor: "rgba(255,255,255,0.06)",
  },
  buttonRow: {
    paddingBottom: 40,
    paddingTop: 16,
    alignItems: "center",
  },
  canButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(126,200,80,0.12)",
    borderWidth: 0.5,
    borderColor: "rgba(126,200,80,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
  },
  modalBox: {
    backgroundColor: "#111e12",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 28,
    paddingBottom: 48,
    borderTopWidth: 0.5,
    borderColor: "rgba(126,200,80,0.2)",
  },
  modalTitle: {
    color: "#a8e070",
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 16,
  },
  modalInput: {
    color: "#fff",
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 28,
    minHeight: 80,
    maxHeight: 160,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  sendBtn: {
    flex: 2,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "rgba(126,200,80,0.15)",
    borderWidth: 0.5,
    borderColor: "rgba(126,200,80,0.4)",
  },
  cancelText: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 15,
  },
  sendText: {
    color: "#a8e070",
    fontSize: 15,
  },
  centeredModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  centeredModalBox: {
    backgroundColor: "#111e12",
    borderRadius: 24,
    padding: 28,
    borderWidth: 0.5,
    borderColor: "rgba(126,200,80,0.2)",
  },
  pickerButtons: {
    flexDirection: "column",
    gap: 12,
  },
  celebrationBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(10,20,10,0.95)",
    borderTopWidth: 0.5,
    borderTopColor: "rgba(126,200,80,0.2)",
    padding: 28,
    paddingBottom: 48,
    gap: 12,
  },
  celebrationTitle: {
    color: "#a8e070",
    fontSize: 11,
    letterSpacing: 3,
  },
  celebrationStage: {
    color: "#fff",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "300",
    letterSpacing: 2,
    marginBottom: 8,
  },
});
