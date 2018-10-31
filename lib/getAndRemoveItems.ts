import { getAndRemoveItem } from '@writetome51/array-get-and-remove-item';
import { removeItem } from '@writetome51/array-remove-item';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { notInteger } from 'basic-data-handling/isInteger_isFloat';
import { setArray } from '@writetome51/set-array';


// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveItems(indexes: number[], array): any[] {
	let indxs = getCopy(indexes); // make copy to preserve original.
	convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
	return _getAndRemoveItems(indxs, array);


	function convertToPositives_placeInOrder_andRemoveDuplicates(indexes) {
		convertNegativeIndexesToPositives(indexes);
		// algorithm only works if they're in descending order:
		placeInDescendingOrder(indexes);
		removeDuplicates(indexes); // Just in case.
	}


	function _getAndRemoveItems(indexes, array) {
		let removedItems = [];
		while (notEmpty(indexes)) {
			removeItem_and_addToRemovedItems(indexes[0]);
			removeItem(0, indexes);
		}
		// Return all items in ascending index-order:
		return removedItems.reverse();


		function removeItem_and_addToRemovedItems(index) {
			let item = getAndRemoveItem(index, array);
			removedItems.push(item);
		}
	}


	function convertNegativeIndexesToPositives(indexes) {
		for (let i = 0; i < indexes.length; ++i) {
			if (notInteger(indexes[i])) throw new Error('The array contains a value that is not an integer');
			if (indexes[i] < 0) indexes[i] = array.length + indexes[i];
			errorIfNotIntegerZeroOrGreater(indexes[i]);
		}
	}


	function placeInDescendingOrder(indexes) {
		let ordered = getInAscendingOrder(indexes).reverse();
		setArray(indexes, ordered);
	}


}
