import {saveAs} from "file-saver";
import {fischerYates} from "./smallerServices";
import {charArray} from "./structures";

export const enSeal = async (utf: string[]) => {
  const reducer = await fischerYates(utf);
  const straightSwap = await fischerYates(charArray);
  const utfSwap = await fischerYates(utf);

  const enSeal = reducer.join("") + straightSwap.join("") + utfSwap.join("");
  const enSealDL = new Blob([enSeal], {
    type: "text/plain; charset=utf-8",
  });

  saveAs(enSealDL, "enSeal.txt");
};
