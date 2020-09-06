import {removeByIndexes} from '@writetome51/array-remove-by-indexes';
import reverse from '@arr/reverse';


// Negative indexes not allowed.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes, array) {
	let removedItems = [];

	// Adds items to removedItems in descending index order:
	removeByIndexes(indexes, array, (item) => removedItems.push(item));

	// Return items in ascending index-order:
	return reverse(removedItems);
}
