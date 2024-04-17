import {saveAs} from "file-saver";
import {decodeMaster} from "./decodeMaster";

export const decodeControl = async (
  str: string,
  seal: string,
  utf: string[]
) => {
  const decodedMessage = await decodeMaster(str, seal, utf);
  if (decodedMessage === "Invalid EnSeal") {
    alert("Invalid EnSeal");
    return;
  }
  const messageDL = new Blob([decodedMessage], {
    type: "text/plain; charset=utf-8",
  });

  saveAs(messageDL, "decodedMessage.txt");
};
