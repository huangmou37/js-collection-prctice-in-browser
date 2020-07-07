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
    let key = e.charAt(0);
    let cnt = parseCnt(e);

    if (key in accCountDict) {
      accCountDict[key] += cnt;
    } else {
      accCountDict[key] = cnt;
    }
    return accCountDict;
  }, {});
}

function parseCnt(element) {
  if (element.length === 1) {
    return 1;
  } else {
    return parseInt(element.substring(2));
  }
}

function subOneEachThree(cnt) {
  return Math.floor(cnt / 3);
}

