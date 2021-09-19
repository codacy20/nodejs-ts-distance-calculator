export const calculateDistance = (rawInput = []) => {
  let array = [];
  let invertedArr = rawInput.map((item: any, index) =>
    item.map((subItem: number, subIndex: number) => {
      // Identify the Black and White elements
      if (subItem === 1) {
        // building the array of cordinates
        array.push([index, subIndex]);
        return 0;
      }
      return Number.MAX_SAFE_INTEGER;
    })
  );
  const updateNode = (
    index: number,
    subIndex: number,
    min: number,
    array: any = []
  ) => {
    if (
      index < 0 ||
      subIndex < 0 ||
      index == rawInput.length ||
      subIndex == (rawInput[0] as any).length
    ) {
      // out of bound, therefor do not continue
      return;
    }
    // check if the node has been visited before
    if (invertedArr[index][subIndex] < min + 2) {
      return;
    }
    // if the cordinates hasn't been visited before increment it based on the current value
    invertedArr[index][subIndex] = min + 1;
    array.push([index, subIndex]);
  };
  // stop when all the nodes have been visited
  while (array.length) {
    let next: any[] = [];
    for (let [index, subIndex] of array) {
      // index is x, subIndex is y (cordinates). Remmeber that "array" was a 2D array
      // checking the right node
      updateNode(index, subIndex + 1, invertedArr[index][subIndex], next);
      // checking the left node
      updateNode(index, subIndex - 1, invertedArr[index][subIndex], next);
      // checking the upper node
      updateNode(index + 1, subIndex, invertedArr[index][subIndex], next);
      // checking the lower node
      updateNode(index - 1, subIndex, invertedArr[index][subIndex], next);
    }
    array = next;
  }
  return invertedArr;
};
