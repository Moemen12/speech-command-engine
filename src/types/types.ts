export type VoiceEvents =
  | "click on" // Click on elements
  | "submit form" // Form submissions
  | "navigate to" // Navigating to URLs or routes
  | "back" // Navigating back in the browser
  | "forward" // Navigating forward in the browser
  | "fill out" // Enter or update text in an input field
  | "clear" // Clear text input fields
  | "scroll top"
  | "scroll down"
  | "refresh page"; // Refresh the current page

export const voiceCommands: string[] = [
  "click on",
  "submit form",
  "navigate to",
  "back",
  "forward",
  "fill out",
  "clear",
  "maximize",
  "minimize",
  "scroll top",
  "scroll down",
  "refresh page",
];
