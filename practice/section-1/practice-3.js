'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(e => objectB.value.includes(e));
}
