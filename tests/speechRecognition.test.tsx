// import { startListening } from "../src/voiceCommands";

// describe("Speech Recognition", () => {
//   beforeAll(() => {
//     (window as any).webkitSpeechRecognition = jest.fn();
//   });

//   afterAll(() => {
//     delete (window as any).webkitSpeechRecognition;
//   });

//   it("should throw an error if speech recognition is not supported", () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       throw new Error("SpeechRecognition is not supported");
//     }
//     expect("webkitSpeechRecognition" in window).toBe(true);
//   });

//   describe("voice recognizer working", () => {
//     it("should check if voice recognizer starts working by default", () => {
//       expect(startListening("m")).toBe(true);
//     });
//     it("should check if voice recognizer doesn't start working by default", () => {
//       expect(
//         startListening("m", {
//           started: false,
//         })
//       ).toBe(false);
//     });
//   });
// });
