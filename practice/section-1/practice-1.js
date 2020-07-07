'use strict';

function collectSameElements(collectionA, collectionB) {
  let sameElements = [];
  for (let e of collectionA) {
  	if (collectionB.includes(e)) {
  		sameElements.push(e)
  	}
  }
  return sameElements;
}
