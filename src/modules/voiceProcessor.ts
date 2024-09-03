/**
 * Simulates a click on an element identified by a data-cmd attribute.
 *
 * @param target - The value of the data-cmd attribute of the element to click on.
 *
 * @returns void
 */
export const processClickOn = (target: string) => {
  const clickElement: Element | null = document.querySelector(
    `[data-cmd='${target}']`
  );
  if (clickElement) {
    (clickElement as HTMLElement).click();
  } else {
    console.warn(`Element with data-cmd='${target}' not found.`);
  }
};

/**
 * Navigates to a specified URL. Adds "https://" prefix if the URL does not start with "http://" or "https://".
 *
 * @param target - The URL or path to navigate to.
 *
 * @returns void
 */
export const processNavigateTo = (target: string) => {
  if (!/^https?:\/\//i.test(target)) {
    target = `https://${target}`;
  }
  window.location.href = target;
};

/**
 * Navigates back in the browser's history.
 *
 * @returns void
 */
export const processBack = (): void => {
  window.history.back();
};

/**
 * Navigates forward in the browser's history.
 *
 * @returns void
 */
export const processForward = (): void => {
  window.history.forward();
};

/**
 * Focuses on an element identified by a data-cmd attribute.
 *
 * @param target - The value of the data-cmd attribute of the element to focus on.
 *
 * @returns void
 */
export const processFocusOn = (target: string) => {
  const focusElement: Element | null = document.querySelector(
    `[data-cmd='${target}']`
  );
  if (focusElement) {
    (focusElement as HTMLElement).focus();
  } else {
    console.warn(`Element with data-cmd='${target}' not found for focusing.`);
  }
};

/**
 * Fills out a text input or textarea with the provided text. If no suitable element is focused, it appends text to the content of an editable element.
 *
 * @param target - The text to add to the currently focused input or textarea element, or content-editable element.
 *
 * @returns void
 */
export const processFillOut = (target: string) => {
  const activeElement = document.activeElement as HTMLElement;
  if (
    activeElement &&
    (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")
  ) {
    const currentValue = (
      activeElement as HTMLInputElement | HTMLTextAreaElement
    ).value;
    (activeElement as HTMLInputElement | HTMLTextAreaElement).value =
      currentValue + target;
  } else if (activeElement && activeElement.isContentEditable) {
    activeElement.textContent += target;
  } else {
    console.warn(`No suitable element is currently focused for text input.`);
  }
};

/**
 * Clears the value of a text input or textarea element identified by a data-cmd attribute.
 *
 * @param target - The value of the data-cmd attribute of the element to clear.
 *
 * @returns void
 */
export const processClear = (target: string) => {
  const clearInputElement = document.querySelector(`[data-cmd='${target}']`) as
    | HTMLInputElement
    | HTMLTextAreaElement;
  if (clearInputElement) {
    clearInputElement.value = "";
  } else {
    console.warn(`Input element with data-cmd='${target}' not found.`);
  }
};

/**
 * Scrolls the window by a specified amount in the given direction.
 *
 * @param scrollAmount - The amount to scroll (in pixels).
 * @param direction - The direction to scroll ("up" or "down").
 *
 * @returns void
 */
export const processScroll = (
  scrollAmount: number,
  direction: "up" | "down"
) => {
  window.scrollBy({
    top: direction === "up" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

/**
 * Refreshes the current page.
 *
 * @returns void
 */
export const processRefreshPage = () => {
  window.location.reload();
};

/**
 * Scrolls the window to the top or bottom of the page.
 *
 * @param position - The position to scroll to ("top" or "bottom").
 *
 * @returns void
 */
export const processScrollTo = (position: "top" | "bottom") => {
  window.scrollTo({
    top: position === "top" ? 0 : document.body.scrollHeight,
    behavior: "smooth",
  });
};
