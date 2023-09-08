export function truncateString(inputString, strLength = 20) {
  if (inputString && inputString.length > strLength) {
    const truncatedString = inputString.slice(0, strLength) + "...";
    return truncatedString;
  } else {
    return inputString;
  }
}
