var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function apples(input) {
  const boxesPerPackage = 2;
  const applesPerBox = 4;
  const boxesPerFriend = boxesPerPackage * 2;

  let result = [];
  let friendIndex = 0;
  let packageIndex = 0;

  while (input.length > 0) {
    if (!result[friendIndex]) {
      result[friendIndex] = [];
    }

    if (!result[friendIndex][packageIndex]) {
      result[friendIndex][packageIndex] = [];
    }

    for (let i = 0; i < boxesPerPackage; i++) {
      if (input.length > 0) {
        const box = input.splice(0, applesPerBox);
        result[friendIndex][packageIndex].push(box);
      }
    }

    packageIndex++;

    if (packageIndex === boxesPerFriend || input.length === 0) {
      friendIndex++;
      packageIndex = 0;
    }
  }

  return result;
}

console.log(apples(input));
