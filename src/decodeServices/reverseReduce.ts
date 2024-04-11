import {reduceObject} from "../encodeServices/smallerServices";
import {charArray} from "../encodeServices/structures";

export const reverseCharReduce = (str: string, seal: string): string => {
  const reducedObject = reduceObject(charArray, seal);
  let result = "";

  const reverseReducedObject = Object.fromEntries(
    Object.entries(reducedObject).map(([key, value]) => [value, key])
  );

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += reverseReducedObject[char] || char;
  }

  console.log("Reverse Char Reduce - ", result);
  return result;
};
