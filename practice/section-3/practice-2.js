'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(entry => {
    if (objectB.value.includes(entry.key)) {
      entry.count -= Math.floor(entry.count/3)
    }
    return entry;
  });
}
