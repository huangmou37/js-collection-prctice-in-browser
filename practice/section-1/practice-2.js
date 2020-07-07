'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(
    e => collectionB.some(subArray => subArray.includes(e)));
}
