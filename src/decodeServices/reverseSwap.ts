export const reverseSwap = (
  str: string,
  seal: string,
  charArray: string[]
): string => {
  let result = "";
  str = str.replace(/(?:\r\n|\n|\r)/g, " ");
  for (let i = 0; i < str.length; i++) {
    if (result.length === str.length) break;
    const index = seal.indexOf(str[i]);
    if (index !== -1 && index < charArray.length) {
      result += charArray[index];
    } else {
      result += str[i];
    }
  }
  return result;
};
