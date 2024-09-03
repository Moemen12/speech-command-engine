export type VoiceEvents =
  | "click on"
  | "navigate to"
  | "back"
  | "forward"
  | "fill out"
  | "clear"
  | "scroll up"
  | "scroll down"
  | "refresh page"
  | "up"
  | "down"
  | "focus on";

export const voiceCommands: string[] = [
  "click on",
  "navigate to",
  "back",
  "forward",
  "fill out",
  "clear",
  "scroll up",
  "scroll down",
  "refresh page",
  "up",
  "down",
  "focus on",
];

export interface VoiceRecognitionConfig {
  scrollAmount?: number;
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  grammar?: string;
  autoStart?: boolean;
}

export const grammars: string =
  "#JSGF V1.0; grammar commands; public <command> = click on | focus | navigate to | back | forward | fill out | clear | scroll down | scroll up | refresh ;";
