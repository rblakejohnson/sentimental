export const toTitleCase = (sentence) =>
  sentence
    .split(' ')
    .map((word) => {
      if (word[0]) {
        return word[0].toUpperCase() + word.substring(1);
      } else {
        return '';
      }
    })
    .join(' ');
