import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { setArray } from '@writetome51/set-array';
import { errorIfIndexNotValid } from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';


// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes: number[], array): any[] {
	let indxs = getCopy(indexes); // make copy to preserve original.
	convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
	return _getAndRemoveByIndexes(indxs, array);


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
		// Return all items in ascending index-order:
		return removedItems.reverse();


		function removeItem_and_addToRemovedItems(index) {
			let item = getAndRemoveByIndex(index, array);
			removedItems.push(item);
		}
	}


	function convertNegativeIndexesToPositives(indexes) {
		for (let i = 0; i < indexes.length; ++i) {
			errorIfIndexNotValid(indexes[i], array);
			if (indexes[i] < 0) indexes[i] = array.length + indexes[i];
		}
	}


	function placeInDescendingOrder(indexes) {
		let ordered = getInAscendingOrder(indexes).reverse();
		setArray(indexes, ordered);
	}


}
