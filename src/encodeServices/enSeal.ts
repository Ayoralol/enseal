import {fischerYates, useUtf8CharArray} from "./smallerServices";
import {charArray} from "./structures";

export const enSeal = async () => {
  const reducer = fischerYates(await useUtf8CharArray());
  const straightSwap = fischerYates(charArray);
  const utfSwap = fischerYates(await useUtf8CharArray());

  const enSeal = reducer.join("") + straightSwap.join("") + utfSwap.join("");
  return enSeal;
};
