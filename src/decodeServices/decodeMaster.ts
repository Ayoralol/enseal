import {useUtf8CharArray} from "../encodeServices/smallerServices";
import {charArray} from "../encodeServices/structures";
import {reverseCharReduce} from "./reverseReduce";
import {reverseSwap} from "./reverseSwap";

export const decodeMaster = async (str: string, seal: string) => {
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
  const utf8CharArray = await useUtf8CharArray();

  let passOne = reverseSwap(str, swapsReduces[2], utf8CharArray);
  let passTwo = reverseCharReduce(passOne, swapsReduces[1]);
  let passThree = reverseSwap(passTwo, swapsReduces[0], charArray);

  return passThree;
};