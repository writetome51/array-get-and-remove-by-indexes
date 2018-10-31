To include in your project:

import {getAndRemoveItems} from '@writetome51/array-get-and-remove-items';

getAndRemoveItems(indexes: number[], array):  any[] 

Removes and returns items from array, identified by their indexes.  Indexes can be negative or 
positive.  Items are returned in ascending index-order: i.e, item with index 0 appears first.  

Examples:

let arr = [10,20,30,40,50,60];

let removed = getAndRemoveItems([3, 1], arr);

arr is now [10, 30, 50, 60].  removed is now [20, 40]


arr = [1,2,3,4,5,6,7];

removed = getAndRemoveItems([-1, 0, 1], arr);

arr is now [3, 4, 5, 6].  removed is now [1, 2, 7]


arr = [1,2,3,4,5,6,7];

removed = getAndRemoveItems([-2, -4, -6], arr);

arr is now [1, 3, 5, 7].  removed is now [2,4,6]
