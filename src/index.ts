import { handleVoiceCommand } from "./voiceCommands";

// Define types for the callback functions
type VoiceCommandHandler = (command: string) => void;

// Initialize and configure SpeechRecognition
const initializeVoice = (): SpeechRecognition => {
  const isSpeechRecognition: boolean =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

  if (!isSpeechRecognition) {
    throw new Error("SpeechRecognition is not supported");
  }

  const speechRecognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)() as SpeechRecognition;
  speechRecognition.lang = "en-US";
  speechRecognition.continuous = true;
  speechRecognition.interimResults = false;

  return speechRecognition;
};

// Start voice recognition
const startVoiceRecognition = (onCommand: VoiceCommandHandler): void => {
  const speechRecognition = initializeVoice();

  speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
    const lastResultIndex = event.results.length - 1;
    const command = event.results[lastResultIndex][0].transcript
      .trim()
      .toLowerCase();

    // Handle the recognized command
    onCommand(command);
  };

  speechRecognition.start();
};

// Example usage: Start voice recognition with a custom command handler
document.addEventListener("DOMContentLoaded", () => {
  startVoiceRecognition(handleVoiceCommand);
});
