"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_item_1 = require("@writetome51/array-get-and-remove-item");
var array_remove_item_1 = require("@writetome51/array-remove-item");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var get_in_ascending_order_1 = require("@writetome51/get-in-ascending-order");
var removeDuplicates_1 = require("@writetome51/array-remove-duplicates/removeDuplicates");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
// indexes cannot be negative.  If there are any duplicates in indexes, they're ignored.
function getAndRemoveItems(indexes, array) {
    var indxs = getProperlyOrderedIndexesWithoutDuplicates(indexes);
    var removedItems = [];
    while (isEmpty_notEmpty_1.notEmpty(indxs)) {
        removeItem_and_addToRemovedItems(indxs[0]);
        array_remove_item_1.removeItem(0, indxs);
    }
    return removedItems;
    function getProperlyOrderedIndexesWithoutDuplicates(indexes) {
        var indxs = getCopy_1.getCopy(indexes); // make copy to preserve original.
        indxs = get_in_ascending_order_1.getInAscendingOrder(indxs).reverse(); // algorithm only works if they're in descending order.
        removeDuplicates_1.removeDuplicates(indxs); // Just in case the coder gets sloppy.
        return indxs;
    }
    function removeItem_and_addToRemovedItems(index) {
        errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(index);
        var item = array_get_and_remove_item_1.getAndRemoveItem(index, array);
        removedItems.push(item);
    }
}
exports.getAndRemoveItems = getAndRemoveItems;
