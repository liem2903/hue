import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";

export function useSpeechInput() {
  const [isListening, setIsListening] = useState(false);
  const [isPermitted, setIsPermitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingTranscript, setPendingTranscript] = useState("");
  const pulseAnimation = useRef(new Animated.Value(1)).current;
  const transcriptRef = useRef("");

  useEffect(() => {
    (async () => {
      const { granted } =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      setIsPermitted(granted);
    })();
  }, []);

  useSpeechRecognitionEvent("result", (event) => {
    transcriptRef.current = event.results[0]?.transcript ?? "";
  });

  useSpeechRecognitionEvent("end", () => {
    setIsListening(false);
    if (transcriptRef.current.trim().length > 0) {
      setPendingTranscript(transcriptRef.current);
      setShowConfirm(true);
      transcriptRef.current = "";
    }
  });

  useSpeechRecognitionEvent("error", (event) => {
    console.error("Speech recognition error", event.error);
    setIsListening(false);
  });

  useEffect(() => {
    if (isListening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1.2,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      pulseAnimation.setValue(1);
    }
  }, [isListening]);

  const onRecordPress = () => {
    if (!isPermitted) {
      alert("Microphone permission is required.");
      return;
    }
    if (isListening) {
      ExpoSpeechRecognitionModule.stop();
    } else {
      transcriptRef.current = "";
      setIsListening(true);
      ExpoSpeechRecognitionModule.start({
        lang: "en-AU",
        interimResults: true,
        continuous: true,
      });
    }
  };

  return {
    isListening,
    showConfirm,
    setShowConfirm,
    pendingTranscript,
    setPendingTranscript,
    pulseAnimation,
    onRecordPress,
  };
}
