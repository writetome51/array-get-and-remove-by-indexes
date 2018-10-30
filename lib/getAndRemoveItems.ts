import { getAndRemoveItem } from '@writetome51/array-get-and-remove-item';
import { removeItem } from '@writetome51/array-remove-item';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { notInteger } from 'basic-data-handling/isInteger_isFloat';
import { setArray } from '@writetome51/set-array';


// If there are any duplicates in indexes, they're ignored.
// The returned items are not in same order that indexes are listed.  First, any negative indexes are 
// converted to their positive equivalents (i.e, -1 becomes array.length - 1).  Then all the indexes are 
// placed in descending order.  So the returned items are in order of highest index to lowest.

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


	function placeInDescendingOrder(numbers) {
		let ordered = getInAscendingOrder(numbers).reverse();
		setArray(numbers, ordered);
	}


	function _getAndRemoveItems(indexes, array) {
		let removedItems = [];
		while (notEmpty(indexes)) {
			removeItem_and_addToRemovedItems(indexes[0]);
			removeItem(0, indexes);
		}
		return removedItems;


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


}
