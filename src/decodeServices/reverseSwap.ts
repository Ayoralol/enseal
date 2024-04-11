export const reverseSwap = (
  str: string,
  seal: string,
  charArray: string[]
): string => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const index = seal.indexOf(str[i]);
    result += index !== -1 ? charArray[index] : str[i];
  }
  console.log("Reverse Swap - ", result);
  return result;
};
