import { removeByIndexes } from '@writetome51/array-remove-by-indexes';
import { prepend } from '@writetome51/array-append-prepend';


// Negative indexes not allowed.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes: number[], array): any[] {
	let removedItems = [];

	// removes items in descending index order:
	removeByIndexes(indexes, array, (item) => prepend(item, removedItems));
	
	return removedItems;
}
