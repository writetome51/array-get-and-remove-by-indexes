"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_remove_item_1 = require("@writetome51/array-remove-item");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
// indexes cannot be negative.
function removeItems(indexes, array) {
    var indxs = getCopy_1.getCopy(indexes); // make copy to preserve original.
    while (isEmpty_notEmpty_1.notEmpty(indxs)) {
        errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(indxs[0]);
        array_remove_item_1.removeItem(indxs[0], array);
        array_remove_item_1.removeItem(0, indxs);
        for (var i = 0; i < indxs.length; ++i)
            --indxs[i];
    }
}
exports.removeItems = removeItems;
