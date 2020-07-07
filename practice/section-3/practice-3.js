'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let countResult = getCountResult(collectionA);

  return Object.entries(countResult).map(entry => {
    let newEntry = { key: entry[0], count: entry[1] };
    if (objectB.value.includes(newEntry.key)) {
      newEntry.count -= subOneEachThree(newEntry.count)
    }
    return newEntry;
  });
}

function getCountResult(collectionA) {
  return collectionA.reduce((accCountDict, e) => {
    if (e in accCountDict) {
      accCountDict[e] += 1
    } else {
      accCountDict[e] = 1
    }
    return accCountDict;
  }, {});
}

function subOneEachThree(cnt) {
  return Math.floor(cnt / 3);
}
