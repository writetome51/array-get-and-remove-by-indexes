"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var get_in_numeric_order_1 = require("@writetome51/get-in-numeric-order");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var array_remove_duplicates_1 = require("@writetome51/array-remove-duplicates");
var set_array_1 = require("@writetome51/set-array");
// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.
function getAndRemoveByIndexes(indexes, array) {
    var indxs = array_get_copy_1.getCopy(indexes); // make copy to preserve original.
    convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
    var removedItems = _getAndRemoveByIndexes(indxs, array);
    // Return all items in ascending index-order:
    return removedItems.reverse();
    function convertToPositives_placeInOrder_andRemoveDuplicates(indexes) {
        convertNegativeIndexesToPositives(indexes);
        // algorithm only works if they're in descending order:
        placeInDescendingOrder(indexes);
        array_remove_duplicates_1.removeDuplicates(indexes); // Just in case.
    }
    function _getAndRemoveByIndexes(indexes, array) {
        var removedItems = [];
        while (isEmpty_notEmpty_1.notEmpty(indexes)) {
            removeItem_and_addToRemovedItems(indexes[0]);
            array_remove_by_index_1.removeByIndex(0, indexes);
        }
        return removedItems;
        function removeItem_and_addToRemovedItems(index) {
            var item = array_get_and_remove_by_index_1.getAndRemoveByIndex(index, array);
            removedItems.push(item);
        }
    }
    function convertNegativeIndexesToPositives(indexes) {
        for (var i = 0; i < indexes.length; ++i) {
            error_if_index_not_valid_1.errorIfIndexNotValid(indexes[i], array.length);
            if (indexes[i] < 0)
                indexes[i] = array.length + indexes[i];
        }
    }
    function placeInDescendingOrder(indexes) {
        var ordered = get_in_numeric_order_1.getInNumericOrder(indexes).reverse();
        set_array_1.setArray(indexes, ordered);
    }
}
exports.getAndRemoveByIndexes = getAndRemoveByIndexes;
