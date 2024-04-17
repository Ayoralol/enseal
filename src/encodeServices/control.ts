import {masterFunction} from "./master";
import {saveAs} from "file-saver";

export const control = async (str: string, seal: string, utf: string[]) => {
  const encodedMessage = await masterFunction(str, seal, utf);
  if (encodedMessage === "Invalid EnSeal") {
    alert("Invalid EnSeal");
    return;
  }
  const messageDL = new Blob([encodedMessage], {
    type: "text/plain; charset=utf-8",
  });

  saveAs(messageDL, "encodedMessage.txt");
};
