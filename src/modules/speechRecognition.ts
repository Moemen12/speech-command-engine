import { handleVoiceCommand } from "./voiceCommands";
import { grammars, VoiceRecognitionConfig } from "../types/types";

let speechRecognition: SpeechRecognition | null = null;
let recognitionRunning = false;
const restartDelay = 1000; // Delay before restarting recognition (in milliseconds)

/**
 * Initializes the SpeechRecognition API with the given configuration.
 *
 * @param config - Configuration object for the voice recognition.
 * @param config.language - Language to be used by the SpeechRecognition API (default: "en-US").
 * @param config.interimResults - Whether interim results should be returned (default: false).
 * @param config.grammar - Grammar string for the SpeechRecognition API.
 *
 * @returns A configured SpeechRecognition instance.
 *
 * @throws Error if SpeechRecognition is not supported in the browser.
 */
export const initializeVoiceRecognition = (
  config: VoiceRecognitionConfig
): SpeechRecognition => {
  const isSpeechRecognitionSupported =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

  if (!isSpeechRecognitionSupported) {
    throw new Error("SpeechRecognition is not supported in this browser.");
  }

  const newSpeechRecognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)() as SpeechRecognition;

  newSpeechRecognition.lang = config.language || "en-US";
  newSpeechRecognition.continuous = true;
  newSpeechRecognition.interimResults = config.interimResults ?? false;

  const grammarsString: string = config.grammar ?? grammars;
  const grammarList = new (window.SpeechGrammarList ||
    window.webkitSpeechGrammarList)();
  grammarList.addFromString(grammarsString);
  newSpeechRecognition.grammars = grammarList;

  newSpeechRecognition.onresult = (event: SpeechRecognitionEvent) => {
    const lastResultIndex: number = event.results.length - 1;
    const command: string = event.results[lastResultIndex][0].transcript
      .trim()
      .toLowerCase();
    handleVoiceCommand(command, config);
  };

  newSpeechRecognition.onend = (): void => {
    recognitionRunning = false;
    if (speechRecognition) {
      setTimeout(
        (): void => restartRecognition(newSpeechRecognition),
        restartDelay
      );
    }
  };

  newSpeechRecognition.onerror = (event: SpeechRecognitionErrorEvent): void => {
    recognitionRunning = false;
    if (speechRecognition) {
      setTimeout(
        (): void => restartRecognition(newSpeechRecognition),
        restartDelay
      );
    }
  };

  return newSpeechRecognition;
};

/**
 * Restarts the SpeechRecognition instance if it's not already running.
 *
 * @param recognition - The SpeechRecognition instance to be restarted.
 *
 * @returns void
 */
const restartRecognition = (recognition: SpeechRecognition): void => {
  if (!recognitionRunning) {
    try {
      recognition.start();
      recognitionRunning = true;
    } catch (error) {
      recognitionRunning = false;
      setTimeout(() => restartRecognition(recognition), restartDelay);
    }
  }
};
