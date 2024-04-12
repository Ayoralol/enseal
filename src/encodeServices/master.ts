import {charReduce} from "./charReduce";
import {charSwap} from "./charSwap";
import {useUtf8CharArray} from "./smallerServices";
import {charArray} from "./structures";

export const masterFunction = async (str: string, seal: string) => {
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

  let passOne = charSwap(str, swapsReduces[0], charArray);
  let passTwo = charReduce(passOne, swapsReduces[1]);
  let passThree = charSwap(passTwo, swapsReduces[2], utf8CharArray);

  return passThree;
};
