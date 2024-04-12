import {enSeal} from "./enSeal";
import {masterFunction} from "./master";
import {saveAs} from "file-saver";

export const control = async (str: string, seal?: any) => {
  let willSealDL = false;

  if (!seal) {
    seal = await enSeal();
    willSealDL = true;
  }
  const encodedMessage = await masterFunction(str, seal);
  if (encodedMessage === "Invalid EnSeal") {
    alert("Invalid EnSeal");
    return;
  }
  const messageDL = new Blob([encodedMessage], {
    type: "text/plain; charset=utf-8",
  });
  const sealDL = new Blob([seal], {type: "text/plain; charset=utf-8"});

  saveAs(messageDL, "encodedMessage.txt");
  if (willSealDL) {
    saveAs(sealDL, "EnSeal.txt");
  }
};
