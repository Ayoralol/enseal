import {charArray} from "../encodeServices/structures";
import {reverseCharReduce} from "./reverseReduce";
import {reverseSwap} from "./reverseSwap";

export const decodeMaster = async (
  str: string,
  seal: string,
  utf: string[]
) => {
  if (seal.length != 18145) {
    return "Invalid EnSeal";
  }
  const swapsReduces = [
    seal.slice(9025, 9025 + 95),
    seal.slice(0, 9025),
    seal.slice(9025 + 95, 9025 + 95 + 9025),
  ];

  let passOne = reverseSwap(str, swapsReduces[2], utf);
  let passTwo = reverseCharReduce(passOne, swapsReduces[1]);
  let passThree = reverseSwap(passTwo, swapsReduces[0], charArray);

  return passThree;
};
