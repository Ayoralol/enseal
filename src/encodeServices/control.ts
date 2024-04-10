import {enSeal} from "./enSeal";
import {masterFunction} from "./master";
import {saveAs} from "file-saver";

export const control = (str: string, seal?: string) => {
  let willSealDL = false;

  if (!seal) {
    seal = enSeal();
    willSealDL = true;
  }
  const encodedMessage = masterFunction(str, seal);
  console.log(encodedMessage);
  const messageDL = new Blob([encodedMessage], {
    type: "text/plain; charset=utf-8",
  });
  const sealDL = new Blob([seal], {type: "text/plain; charset=utf-8"});

  saveAs(messageDL, "encodedMessage.txt");
  if (willSealDL) {
    saveAs(sealDL, "EnSeal.txt");
  }

  return "return";
};
