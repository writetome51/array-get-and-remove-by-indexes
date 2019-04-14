import { errorIfIndexNotValid } from 'error-if-index-not-valid';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getCopy } from '@writetome51/array-get-copy';
import { getInNumericOrder } from '@writetome51/get-in-numeric-order';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { removeDuplicates } from '@writetome51/array-remove-duplicates';
import { setArray } from '@writetome51/set-array';


// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes: number[], array): any[] {
	let indxs = getCopy(indexes); // make copy to preserve original.
	convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
	let removedItems = _getAndRemoveByIndexes(indxs, array);
	// Return all items in ascending index-order:
	return removedItems.reverse();


	function convertToPositives_placeInOrder_andRemoveDuplicates(indexes) {
		convertNegativeIndexesToPositives(indexes);
		// algorithm only works if they're in descending order:
		placeInDescendingOrder(indexes);
		removeDuplicates(indexes); // Just in case.
	}


	function _getAndRemoveByIndexes(indexes, array) {
		let removedItems = [];
		while (notEmpty(indexes)) {
			removeItem_and_addToRemovedItems(indexes[0]);
			removeByIndex(0, indexes);
		}
		return removedItems;


		function removeItem_and_addToRemovedItems(index) {
			let item = getAndRemoveByIndex(index, array);
			removedItems.push(item);
		}
	}


	function convertNegativeIndexesToPositives(indexes) {
		for (let i = 0; i < indexes.length; ++i) {
			errorIfIndexNotValid(indexes[i], array.length);
			if (indexes[i] < 0) indexes[i] = array.length + indexes[i];
		}
	}


	function placeInDescendingOrder(indexes) {
		let ordered = getInNumericOrder(indexes).reverse();
		setArray(indexes, ordered);
	}


}
