Removes and returns items from array, identified by their indexes.  Indexes can be negative or positive.

getAndRemoveItems(indexes: number[], array):  any[] 

If there are any duplicates in indexes, they're ignored.

Examples:

let arr = [10,20,30,40,50,60];

getAndRemoveItems([3, 1], arr); //  arr now contains [10, 30, 50, 60]
