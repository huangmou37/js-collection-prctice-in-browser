'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(
    e => collectionB.filter(subArray => subArray.includes(e)).length > 0);
}
