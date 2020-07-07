'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(entry => {
    if (objectB.value.includes(entry.key)) {
      entry.count -= 1;
    }
    return entry;
  });
}
