export function isRequired(input) {
  if (input === "") {
    return "Enter API key pls";
  } else {
    return true;
  }
}
