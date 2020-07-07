'use strict';

function countSameElements(collection) {
  let countResultDict = {};

  collection.forEach(e => {
    let val = e.charAt(0);
    let cnt = parseCnt(e);

    if (val in countResultDict) {
      countResultDict[val] += cnt;
    } else {
      countResultDict[val] = cnt;
    }
  });

  let countResultArray = [];

  for (let e in countResultDict) {
    countResultArray.push({name: e, summary: countResultDict[e]});
  }

  return countResultArray;
}

function parseCnt(element) {
  let cnt;

  if (element.length === 1) {
    cnt = 1;
  } else {
    let sep = element.charAt(1);
    if ([':', '-'].includes(sep)) {
      cnt = element.substring(2)
    } else if (sep === '[') {
      cnt = element.substring(2, element.length-1)
    }
  }

  return parseInt(cnt);
}
