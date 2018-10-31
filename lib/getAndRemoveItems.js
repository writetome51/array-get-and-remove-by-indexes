"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_item_1 = require("@writetome51/array-get-and-remove-item");
var array_remove_item_1 = require("@writetome51/array-remove-item");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var get_in_ascending_order_1 = require("@writetome51/get-in-ascending-order");
var removeDuplicates_1 = require("@writetome51/array-remove-duplicates/removeDuplicates");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var set_array_1 = require("@writetome51/set-array");
// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.
function getAndRemoveItems(indexes, array) {
    var indxs = getCopy_1.getCopy(indexes); // make copy to preserve original.
    convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
    return _getAndRemoveItems(indxs, array);
    function convertToPositives_placeInOrder_andRemoveDuplicates(indexes) {
        convertNegativeIndexesToPositives(indexes);
        // algorithm only works if they're in descending order:
        placeInDescendingOrder(indexes);
        removeDuplicates_1.removeDuplicates(indexes); // Just in case.
    }
    function _getAndRemoveItems(indexes, array) {
        var removedItems = [];
        while (isEmpty_notEmpty_1.notEmpty(indexes)) {
            removeItem_and_addToRemovedItems(indexes[0]);
            array_remove_item_1.removeItem(0, indexes);
        }
        // Return all items in ascending index-order:
        return removedItems.reverse();
        function removeItem_and_addToRemovedItems(index) {
            var item = array_get_and_remove_item_1.getAndRemoveItem(index, array);
            removedItems.push(item);
        }
    }
    function convertNegativeIndexesToPositives(indexes) {
        for (var i = 0; i < indexes.length; ++i) {
            if (isInteger_isFloat_1.notInteger(indexes[i]))
                throw new Error('The array contains a value that is not an integer');
            if (indexes[i] < 0)
                indexes[i] = array.length + indexes[i];
            errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(indexes[i]);
        }
    }
    function placeInDescendingOrder(indexes) {
        var ordered = get_in_ascending_order_1.getInAscendingOrder(indexes).reverse();
        set_array_1.setArray(indexes, ordered);
    }
}
exports.getAndRemoveItems = getAndRemoveItems;
