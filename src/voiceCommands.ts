import { voiceCommands, VoiceEvents } from "./types/types";

const scrollAmount = 100; // Amount to scroll in pixels for each command

export const handleVoiceCommand = (command: string) => {
  // Identify the action and target from the command
  let action: VoiceEvents | undefined;
  let target: string = "";

  // Check for each command type
  for (const cmd of voiceCommands) {
    if (command.startsWith(cmd)) {
      action = cmd as VoiceEvents;
      target = command.slice(cmd.length).trim();
      break;
    }
  }

  console.log(`Processed Action: '${action}'`);
  console.log(`Processed Target: '${target}'`);

  switch (action) {
    case "click on":
      const clickElement = document.querySelector(`[data-cmd='${target}']`);
      if (clickElement) {
        (clickElement as HTMLElement).click();
      } else {
        console.warn(`Element with data-cmd='${target}' not found.`);
      }
      break;

    case "navigate to":
      // Ensure the target is a complete URL with protocol
      if (!/^https?:\/\//i.test(target)) {
        target = `https://${target}`;
      }
      window.location.href = target;
      break;

    case "back":
      window.history.back();
      break;

    case "forward":
      window.history.forward();
      break;

    case "fill out":
      const fillElement = document.querySelector(
        `[data-cmd='${target}']`
      ) as HTMLInputElement;
      if (fillElement) {
        fillElement.focus();
        fillElement.value = "Sample text"; // Set the value or update as needed
      } else {
        console.warn(`Input element with data-cmd='${target}' not found.`);
      }
      break;

    case "clear":
      const clearInputElement = document.querySelector(
        `[data-cmd='${target}']`
      ) as HTMLInputElement;
      if (clearInputElement) {
        clearInputElement.value = "";
      } else {
        console.warn(`Input element with data-cmd='${target}' not found.`);
      }
      break;

    case "scroll top":
      window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      break;

    case "scroll down":
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      break;

    case "refresh page":
      window.location.reload();
      break;

    default:
      console.warn(`Unknown command: ${command}`);
  }
};
