export function createTextString(string: string) {
  const spacedString = string.split(/(?=[A-Z])/).join(" ")
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1)
}
