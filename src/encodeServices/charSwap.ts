export const charSwap = (
  str: string,
  seal: string,
  charArray: string[]
): string => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const index = charArray.indexOf(str[i]);
    result += index !== -1 ? seal[index] : str[i];
  }
  console.log("Char Swap - ", result);
  return result;
};
