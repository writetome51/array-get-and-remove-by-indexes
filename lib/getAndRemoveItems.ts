import { getAndRemoveItem } from '@writetome51/array-get-and-remove-item';
import { removeItem } from '@writetome51/array-remove-item';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { getInAscendingOrder } from '@writetome51/get-in-ascending-order';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';


// indexes cannot be negative.  If there are any duplicates in indexes, they're ignored.

export function getAndRemoveItems(indexes: number[], array): any[] {
	let indxs = getCopy(indexes); // make copy to preserve original.

	indxs = getInAscendingOrder(indxs).reverse(); // algorithm only works if they're in descending order.
	removeDuplicates(indxs); // Just in case the coder gets sloppy.
	let removedItems = [];

	while (notEmpty(indxs)) {
		removeItem_and_addToRemovedItems(indxs[0]);
		removeItem(0, indxs);
	}
	return removedItems;


	function removeItem_and_addToRemovedItems(index) {
		errorIfNotIntegerZeroOrGreater(index);
		let item = getAndRemoveItem(index, array);
		removedItems.push(item);
	}
}
