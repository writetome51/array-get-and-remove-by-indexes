import { removeItem } from '@writetome51/array-remove-item';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';


// indexes cannot be negative.

export function removeItems(indexes: number[], array): void {
	let indxs = getCopy(indexes); // make copy to preserve original.

	while (notEmpty(indxs)) {
		errorIfNotIntegerZeroOrGreater(indxs[0]);
		removeItem(indxs[0], array);
		removeItem(0, indxs);
		for (let i = 0; i < indxs.length; ++i) --indxs[i];
	}
}
