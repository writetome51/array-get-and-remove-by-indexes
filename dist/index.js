import {getAndRemoveByIndex} from '@writetome51/array-get-and-remove-by-index';
import {getArrayCopy} from '@writetome51/get-array-copy';
import {orderNumerically} from '@writetome51/order-numerically';
import reverse from '@arr/reverse';


// Negative indexes not allowed.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.

export function getAndRemoveByIndexes(indexes, array) {
	indexes = getArrayCopy(indexes);

	return __getAndRemoveByIndexes(indexes, array);


	function __getAndRemoveByIndexes(indexes, array) {
		orderNumerically(indexes);

		let removedItems = [], i = indexes.length;
		// algorithm only works if they're removed in descending order:
		while (--i > -1) removeItem_andAddTo_removedItems(indexes[i]);

		// Return all items in ascending index-order:
		return reverse(removedItems);


		function removeItem_andAddTo_removedItems(index) {
			if (index < 0) throw new Error('Negative indexes are not allowed in this function');
			let item = getAndRemoveByIndex(index, array);
			removedItems.push(item);
		}
	}

}
