import { getAndRemoveItems } from './getAndRemoveItems';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = ['he', 'llo', 'bay', 'bayyyy'];

// Test 1: Make sure 0 and 1 removes first 2 items:
let removed = getAndRemoveItems([0, 1], arr);
if (arr[0] === 'bay') console.log('test 1 passed');
else console.log('test 1 failed');


// Test 1A: Make sure the correct items were returned:
if (arraysMatch(removed, ['he', 'llo'])) console.log('test 1A passed');
else console.log('test 1A failed');


// Test 2: Make sure 4 and 5 removes the last 2 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveItems([4, 5], arr);
if (arr.length === 4 && arr[3] === 'gg') console.log('test 2 passed');
else console.log('test 2 failed');


// Test 2A: Make sure the correct items were returned:
if (arraysMatch(removed, ['cc', 'aa'])) console.log('test 2A passed');
else console.log('test 2A failed');


// Test 3: Make sure [-8, 1] removes first 2 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'];
removed = getAndRemoveItems([-8, 1], arr);
if (arraysMatch(arr, [ 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'])) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 3A: Make sure the correct items were returned:
if (arraysMatch(removed, ['he', 'llo'])) console.log('test 3A passed');
else console.log('test 3A failed');



// Test 4: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
	getAndRemoveItems([-7], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	let x = getAndRemoveItems([6], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: Make sure non-array as first arg triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	getAndRemoveItems('1', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: Make sure non-array as second arg triggers error:
errorTriggered = false;
try {
	getAndRemoveItems(0, {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');
