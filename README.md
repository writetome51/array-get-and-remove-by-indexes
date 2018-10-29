Removes items from array, identified by their indexes.  The indexes cannot be negative.

removeItems(indexes: number[], array): void 

If there are any duplicates in indexes, they're ignored.

Examples:

let arr = [10,20,30,40,50,60];

removeItems([3, 1], arr); //  arr now contains [10, 30, 50, 60]
