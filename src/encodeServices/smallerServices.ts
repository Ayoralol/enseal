export const fischerYates = (array: any[]): any[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const generateUtf8 = (invalidIndexes: number[]): string[] => {
  const characters: string[] = [];
  for (let i = 0; i <= 0x10ffff; i++) {
    const char = String.fromCodePoint(i + 32);
    if (!char.match(/\p{C}/u)) {
      characters.push(char);
      if (characters.length >= 10082) {
        break;
      }
    }
  }
  for (let i = invalidIndexes.length - 1; i >= 0; i--) {
    const index = invalidIndexes[i];
    characters.splice(index, 1);
  }
  return characters;
};

export const reduceObject = (
  charArray: string[],
  seal: string
): {[key: string]: string} => {
  const reduceArray = seal.split("");
  let output: {[key: string]: string} = {};
  let index = 0;

  for (let i = 0; i < charArray.length; i++) {
    for (let j = 0; j < charArray.length; j++) {
      const key = charArray[i] + charArray[j];
      output[key] = reduceArray[index];
      index++;
    }
  }

  return output;
};

export const txtFileToString = async (file: string): Promise<string> => {
  try {
    const response = await fetch(file, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch the file");
    }
    const text = await response.text();
    return text;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export const jsonFileToString = async (file: string): Promise<string> => {
  try {
    const response = await fetch(file, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch the file");
    }
    const text = await response.text();
    return text;
  } catch (err) {
    console.error(err);
    return "";
  }
};

export const useUtf8CharArray = async () => {
  try {
    const jsonString = await jsonFileToString("utf8CharArray.json");
    const utf8CharArray = JSON.parse(jsonString);
    return utf8CharArray;
  } catch (error) {
    console.error("Error loading utf8CharArray:", error);
    return [];
  }
};
