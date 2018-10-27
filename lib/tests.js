"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeItems_1 = require("./removeItems");
var arr = ['he', 'llo', 'bay', 'bayyyy'];
// Test 1: Make sure 0 removes first item:
removeItems_1.removeItems([0], arr);
if (arr[0] === 'llo')
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure 1 removes second item:
arr = ['he', 'llo', 'zz'];
removeItems_1.removeItems([1], arr);
if (arr.length === 2 && arr[1] === 'zz')
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 4: Make sure -2 removes second to last item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeItems_1.removeItems([-2], arr);
if (arr.length === 5 && arr[3] === 'gg' && arr[4] === 'aa')
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: Make sure -6 removes first item:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removeItems_1.removeItems([-6], arr);
if (arr.length === 5 && arr[0] === 'llo')
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
var errorTriggered = false;
try {
    removeItems_1.removeItems([-7], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
    removeItems_1.removeItems([6], arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: Make sure string '1' triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
    removeItems_1.removeItems('1', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9: Make sure object in second argument triggers error:
errorTriggered = false;
try {
    removeItems_1.removeItems(0, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 9 passed');
else
    console.log('test 9 failed');
