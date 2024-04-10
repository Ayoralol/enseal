import {fischerYates, generateUtf8} from "./smallerServices";
import {charArray, invalidIndexes} from "./structures";

export const enSeal = () => {
  const reducer = fischerYates(generateUtf8(invalidIndexes));
  const straightSwap = fischerYates(charArray);
  const utfSwap = fischerYates(generateUtf8(invalidIndexes));

  const enSeal = reducer.join("") + straightSwap.join("") + utfSwap.join("");
  return enSeal;
};
