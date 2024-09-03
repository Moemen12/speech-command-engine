import { initializeVoiceRecognition } from "./speechRecognition";
import { VoiceRecognitionConfig } from "../types/types";

let speechRecognition: SpeechRecognition | null = null;
let recognitionActive = false;
let recognitionRunning = false;

/**
 * Initializes and starts voice recognition if it is not already active.
 *
 * @param config - Configuration options for voice recognition. Optional. Defaults to an empty object.
 *
 * @returns void
 */
export const startVoiceRecognition = (
  config: VoiceRecognitionConfig = {}
): void => {
  if (!recognitionActive) {
    // Initialize the speech recognition with the provided config
    speechRecognition = initializeVoiceRecognition(config);

    if (config.autoStart !== false) {
      recognitionActive = true;
      recognitionRunning = true; // Mark as running when first starting
      speechRecognition.start(); // Start the speech recognition
    }
  }
};

/**
 * Stops voice recognition if it is currently active.
 *
 * @returns void
 */
export const stopVoiceRecognition = (): void => {
  if (recognitionActive && speechRecognition) {
    recognitionActive = false;
    recognitionRunning = false;
    speechRecognition.stop(); // Stop the speech recognition
  }
};
