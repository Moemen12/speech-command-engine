import {
  voiceCommands,
  VoiceEvents,
  VoiceRecognitionConfig,
} from "../types/types";
import {
  processClickOn,
  processNavigateTo,
  processBack,
  processForward,
  processFocusOn,
  processFillOut,
  processClear,
  processScroll,
  processRefreshPage,
  processScrollTo,
} from "./voiceProcessor";

/**
 * Handles voice commands and executes the corresponding actions based on the command and configuration.
 *
 * @param command - The voice command received from the SpeechRecognition API.
 * @param config - Configuration object for handling voice commands.
 * @param config.scrollAmount - Amount to scroll for "scroll up" and "scroll down" commands (default: 500px).
 *
 * @returns void
 */
export const handleVoiceCommand = (
  command: string,
  config: VoiceRecognitionConfig = {}
) => {
  // Default scroll amount if not specified in the config
  const scrollAmount = config.scrollAmount || 500;

  let action: VoiceEvents | undefined;
  let target: string = "";

  // Identify the action and target from the command
  for (const cmd of voiceCommands) {
    if (command.startsWith(cmd)) {
      action = cmd as VoiceEvents;
      target = command.slice(cmd.length).trim();
      break;
    }
  }

  // Execute the appropriate action based on the identified command
  switch (action) {
    case "click on":
      processClickOn(target);
      break;

    case "navigate to":
      processNavigateTo(target);
      break;

    case "back":
      processBack();
      break;

    case "forward":
      processForward();
      break;

    case "focus on":
      processFocusOn(target);
      break;

    case "fill out":
      processFillOut(target);
      break;

    case "clear":
      processClear(target);
      break;

    case "scroll up":
      processScroll(scrollAmount, "up");
      break;

    case "scroll down":
      processScroll(scrollAmount, "down");
      break;

    case "refresh page":
      processRefreshPage();
      break;

    case "up":
      processScrollTo("top");
      break;

    case "down":
      processScrollTo("bottom");
      break;

    default:
      console.warn(`Unknown command: ${command}`);
  }
};
