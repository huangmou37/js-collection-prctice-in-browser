'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map(e1 => e1.key).filter(
    e2 => objectB.value.includes(e2)
  );
}
