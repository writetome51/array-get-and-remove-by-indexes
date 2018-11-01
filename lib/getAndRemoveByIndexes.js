"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var get_in_ascending_order_1 = require("@writetome51/get-in-ascending-order");
var removeDuplicates_1 = require("@writetome51/array-remove-duplicates/removeDuplicates");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var set_array_1 = require("@writetome51/set-array");
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
// indexes can be negative or positive.
// If there are any duplicates in indexes, they're ignored.
// The items are returned in ascending index-order: i.e, item with index 0 appears first.
function getAndRemoveByIndexes(indexes, array) {
    var indxs = getCopy_1.getCopy(indexes); // make copy to preserve original.
    convertToPositives_placeInOrder_andRemoveDuplicates(indxs);
    return _getAndRemoveByIndexes(indxs, array);
    function convertToPositives_placeInOrder_andRemoveDuplicates(indexes) {
        convertNegativeIndexesToPositives(indexes);
        // algorithm only works if they're in descending order:
        placeInDescendingOrder(indexes);
        removeDuplicates_1.removeDuplicates(indexes); // Just in case.
    }
    function _getAndRemoveByIndexes(indexes, array) {
        var removedItems = [];
        while (isEmpty_notEmpty_1.notEmpty(indexes)) {
            removeItem_and_addToRemovedItems(indexes[0]);
            array_remove_by_index_1.removeByIndex(0, indexes);
        }
        // Return all items in ascending index-order:
        return removedItems.reverse();
        function removeItem_and_addToRemovedItems(index) {
            var item = array_get_and_remove_by_index_1.getAndRemoveByIndex(index, array);
            removedItems.push(item);
        }
    }
    function convertNegativeIndexesToPositives(indexes) {
        for (var i = 0; i < indexes.length; ++i) {
            errorIfIndexNotValid_1.errorIfIndexNotValid(indexes[i], array);
            if (indexes[i] < 0)
                indexes[i] = array.length + indexes[i];
        }
    }
    function placeInDescendingOrder(indexes) {
        var ordered = get_in_ascending_order_1.getInAscendingOrder(indexes).reverse();
        set_array_1.setArray(indexes, ordered);
    }
}
exports.getAndRemoveByIndexes = getAndRemoveByIndexes;
