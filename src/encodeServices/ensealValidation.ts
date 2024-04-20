import {charArray} from "./structures";

export const ensealValidation = (seal: string, utf: string[]): boolean => {
  if (seal.length !== 18145) {
    return false;
  }
  const strings = [
    seal.slice(9025, 9025 + 95), // 95
    seal.slice(0, 9025), // 9025
    seal.slice(9025 + 95, 9025 + 95 + 9025), // 9025
  ];

  const short = strings[0].split("");
  const long1 = strings[1].split("");
  const long2 = strings[2].split("");

  const shortValid = charArray.every((char) => short.includes(char));
  const long1Valid = utf.every((char) => long1.includes(char));
  const long2Valid = utf.every((char) => long2.includes(char));

  return shortValid && long1Valid && long2Valid;
};
