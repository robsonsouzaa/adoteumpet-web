export const TextService = {
  limitText(text: string, maxSize: number): string {
    if (text.length < maxSize) {
      return text;
    }

    return `${text.slice(0, maxSize)} ...`;
  }
}