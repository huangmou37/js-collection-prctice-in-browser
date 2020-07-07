'use strict';

function countSameElements(collection) {
  let countResultDict = {};

  collection.forEach(e => {
    if (e in countResultDict) {
      countResultDict[e] = countResultDict[e] + 1;
    } else {
      countResultDict[e] = 1;
    }
  });

  let countResultArray = [];

  for (let e in countResultDict) {
    countResultArray.push({key: e, count: countResultDict[e]});
  }

  return countResultArray;
}

