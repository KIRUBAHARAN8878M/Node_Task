function swappingMinMax(a, b) {

  var copyInputArray1 = [...a];
  var copyInputArray2 = [...b];

  var emptyArray1 = [];
  var emptyArray2 = [];

  for (let i = 0; i < copyInputArray1.length; i++) {

    if (copyInputArray1[i] < copyInputArray2[i]) {

      emptyArray1.push(copyInputArray2[i]);
      emptyArray2.push(copyInputArray1[i]);

    } else {

      emptyArray1.push(copyInputArray1[i]);
      emptyArray2.push(copyInputArray2[i]);

    }
  }

  var sortedArray1 = emptyArray1.sort((a, b) => b - a);
  var sortedArray2 = emptyArray2.sort((a, b) => b - a);

  return sortedArray1[0] * sortedArray2[0];

}

console.log(swappingMinMax([1, 2, 6, 5, 1, 2], [3, 4, 3, 2, 2, 5]));
// Output 1 :  18

console.log(
  swappingMinMax(
    [8, 7, 9, 6, 5, 6, 6, 5, 6, 4, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 7, 8],
    [2, 4, 5, 6, 7, 6, 7, 8, 9, 8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 5, 5, 5, 4, 5]
  )
);
// Output 2 :  63

console.log(
  swappingMinMax(
    [1, 2, 3, 2, 3, 4, 5, 3, 5, 6, 7, 8],
    [2, 1, 5, 3, 4, 6, 4, 3, 2, 3, 1, 2]
  )
);
// Output 3 :  32
