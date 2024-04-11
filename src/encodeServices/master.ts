import {reverseCharReduce} from "../decodeServices/reverseReduce";
import {reverseSwap} from "../decodeServices/reverseSwap";
import {charReduce} from "./charReduce";
import {charSwap} from "./charSwap";
import {generateUtf8} from "./smallerServices";
import {charArray, invalidIndexes} from "./structures";

export const masterFunction = (str: string, seal: string): string => {
  if (seal.length != 18145) {
    return "Invalid EnSeal";
  }
  if (str.length % 2 != 0) {
    str += " ";
  }
  const swapsReduces = [
    seal.slice(9025, 9025 + 95),
    seal.slice(0, 9025),
    seal.slice(9025 + 95, 9025 + 95 + 9025),
  ];
  const utf8CharArray = generateUtf8(invalidIndexes);

  let passOne = charSwap(str, swapsReduces[0], charArray);
  let passTwo = charReduce(passOne, swapsReduces[1]);
  let passThree = charSwap(passTwo, swapsReduces[2], utf8CharArray);

  let passFour = reverseSwap(passThree, swapsReduces[2], utf8CharArray);
  let passFive = reverseCharReduce(passFour, swapsReduces[1]);
  let passSix = reverseSwap(passFive, swapsReduces[0], charArray);

  return passSix;
};
