import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Animated,
  Modal,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import WateringCanIcon from "../components/svgs/WaterCanIcon";
import PlantDisplay from "@/components/PlantDisplay";
import StatsPanel from "@/components/StatsPanel";
import { usePlant } from "@/hooks/usePlant";
import { useSpeechInput } from "@/hooks/useSpeechInput";
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

  const sendToBackend = async () => {
    setShowConfirm(false);
    try {
      const emotionScores = await parseEmotion(pendingTranscript);
      const { newEmotions, newPoints } = applyEmotionEntry(
        emotions,
        emotionScores,
        currentPoints,
      );
      setEmotions(newEmotions);
      setCurrentPoints(newPoints);
      await saveProgress(newEmotions, newPoints);
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
                  onPress={() => setShowConfirm(false)}
                >
                  <Text style={styles.cancelText}>Discard</Text>
                </Pressable>
                <Pressable style={styles.sendBtn} onPress={sendToBackend}>
                  <Text style={styles.sendText}>Send →</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <View style={styles.bottomBar}>
        <StatsPanel currentPoints={currentPoints} emotions={emotions} />
        <View style={styles.buttonRow}>
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
});
