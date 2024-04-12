import {reduceObject} from "./smallerServices";
import {charArray} from "./structures";

export const charReduce = (str: string, seal: string): string => {
  const reducedObject = reduceObject(charArray, seal);
  let result = "";

  for (let i = 0; i < str.length; i += 2) {
    const pair = str[i] + str[i + 1];
    result += reducedObject[pair];
  }
  return result;
};
