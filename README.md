# Speech Command Engine

The `speech-command-engine` package allows you to integrate voice commands into your web application. This package provides functions to start and stop voice recognition, as well as handle voice commands.

## Available Functions

### `startVoiceRecognition`

Starts the voice recognition process using the provided configuration.

- **Parameters**:
  - `config` (optional `VoiceRecognitionConfig`): Configuration options for the voice recognition process.

- **Usage Example**:

  ```typescript
  import { startVoiceRecognition } from "speech-command-engine";

  startVoiceRecognition({
     autoStart:true
    continuous: true,
    scrollAmount: 1000,
  });

 ```
 now say `refresh page` command : the page should refresh automatically
```
### `stopVoiceRecognition`

Stops the voice recognition process. This is useful for pausing or ending the voice command functionality.

  ```typescript
import { stopVoiceRecognition } from "speech-command-engine";

stopVoiceRecognition();
```



# Using `data-cmd` Attributes with `speech-command-engine`

To enable voice commands on specific elements in your web application, set a `data-cmd` attribute on any HTML element you want to control via voice. The value of this attribute should represent the action you want to trigger.

When the user says the predefined command followed by the value of the `data-cmd` attribute, the corresponding event or action will be executed.

## Example Usage

### HTML Setup

Here’s a practical example of how to set up elements with `data-cmd` attributes:

```html
<!-- When you say click on submit , this button will be clicked  -->
<button data-cmd="submit">Submit</button>

<!-- Here You should focus on the input or textarea u want by saying focus on {data-cmd value}
then fill out {anything u need to fill out with}

for the input below :

1-focus on email field
2-fill out hello world

  -->
<input type="email" data-cmd="email field" placeholder="Enter your email" />

```

## Type Definitions

### `VoiceRecognitionConfig`

Configuration options for the voice recognition process.

| Property    | Type     | Description                                |
| ----------- | -------- | ------------------------------------------ |
| `language` | `string` | The language to use for voice recognition (e.g., "en-US"). |
| `continuous` | `boolean` | Whether the voice recognition should continue indefinitely.            |
| `interimResults`   | `boolean` | Whether to receive interim results before final results are available. |
| `scrollAmount` | `number` | The amount to scroll in pixels for scroll commands.         |
| `grammar`   | `string` | Optional grammar for defining command patterns. |


### `VoiceEvents`

Possible voice command events.


| Property    | Description                                |
| ----------- | ------------------------------------------ |
|click on	| Clicks on an element specified by the command.|
|navigate to	|Navigates to the URL specified by the command.|
|back	|Navigates back in the browser history.|
|forward	|Navigates forward in the browser history.|
|fill out|	Fills out an input field specified by the command.|
clear	|Clears the value of an input field.|
|scroll up|	Scrolls up the page by the specified amount.|
|scroll down|	Scrolls down the page by the specified amount.|
|refresh|	Refreshes the current page.|
|focus on|	Focuses on an element specified by the command.|
|up	|Scrolls to the top of the page.|
|down|	Scrolls to the bottom of the page.|























