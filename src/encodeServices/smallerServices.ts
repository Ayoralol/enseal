export const fischerYates = async (array: any[]) => {
  let copy = array.slice();

  let currentIndex = copy.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temporaryValue;
  }

  return copy;
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
