import {errorIfIndexNotValid} from 'error-if-index-not-valid';
import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {getInNumericOrder} from '@writetome51/get-in-numeric-order';
import {notEmpty} from '@writetome51/is-empty-not-empty';
import {removeByIndex} from '@writetome51/array-remove-by-index';
import {removeDuplicates} from '@writetome51/array-remove-duplicates';
import {setArray} from '@writetome51/set-array';


// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes, array) {
	let indxs = getArrayCopy(indexes); // preserving original.
	validateIndexes(indxs, array);

	return __getAndRemoveByIndexes(indxs, array);


	function validateIndexes(indexes, array) {
		convertNegativeIndexesToPositives(indexes, array);
		removeDuplicates(indexes); // Just in case.


		function convertNegativeIndexesToPositives(indexes, array) {
			for (let i = 0; i < indexes.length; ++i) {
				errorIfIndexNotValid(indexes[i], array.length);

				if (indexes[i] < 0) indexes[i] = array.length + indexes[i];
			}
		}
	}


	function __getAndRemoveByIndexes(indexes, array) {
		// algorithm only works if they're in descending order:
		placeInDescendingOrder(indexes);

		let removedItems = [];
		while (notEmpty(indexes)) {
			removeItem_andAddTo_removedItems(indexes[0]);
			removeByIndex(0, indexes);
		}
		// Return all items in ascending index-order:
		return removedItems.reverse();


		function placeInDescendingOrder(indexes) {
			let ordered = getInNumericOrder(indexes).reverse();
			setArray(indexes, ordered);
		}


		function removeItem_andAddTo_removedItems(index) {
			let item = getAndRemoveByIndex(index, array);
			removedItems.push(item);
		}
	}

}
