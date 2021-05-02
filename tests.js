import {getAndRemoveByIndexes} from './index.js';
import {isMatch} from '@writetome51/is-match';


let arr = ['he', 'llo', 'bay', 'bayyyy'];

// Test 1: Make sure 0 and 1 removes first 2 items:
let removed = getAndRemoveByIndexes([0, 1], arr);
if (isMatch(arr, ['bay', 'bayyyy'])) console.log('test 1 passed');
else console.log('test 1 FAILED');

// Test 1A: Make sure the correct items were returned:
if (isMatch(removed, ['he', 'llo'])) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2: Make sure 4 and 5 removes the last 2 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([4, 5], arr);
if (arr.length === 4 && arr[3] === 'gg') console.log('test 2 passed');
else console.log('test 2 FAILED');

// Test 2A: Make sure the correct items were returned:
if (isMatch(removed, ['cc', 'aa'])) console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 3: Make sure [4, 1] removes the correct items, though they're not in order:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'];
removed = getAndRemoveByIndexes([4, 1], arr);
if (isMatch(arr, ['he', 'zz', 'gg', 'aa', 'hh', 'oo'])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3A: Make sure the correct items were returned:
if (isMatch(removed, ['llo', 'cc'])) console.log('test 3A passed');
else console.log('test 3A FAILED');


// Test 3B:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'];
removed = getAndRemoveByIndexes([7, 0], arr);
if (isMatch(arr, ['llo', 'zz', 'gg', 'cc', 'aa', 'hh'])) console.log('test 3B passed');
else console.log('test 3B FAILED');


// Test 3C: Make sure the correct items were returned:
if (isMatch(removed, ['he', 'oo'])) console.log('test 3C passed');
else console.log('test 3C FAILED');


// Test 3D: Make sure it handles duplicate indexes without error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([2, 3, 4, 4], arr);
if (isMatch(arr, ['he', 'llo'])) console.log('test 3D passed');
else console.log('test 3D FAILED');

// Test 3E: Make sure the correct items were returned:
if (isMatch(removed, ['zz', 'gg', 'aa', 'cc'])) console.log('test 3E passed');
else console.log('test 3E FAILED');


arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([2, 3, 4, 5], arr);
if (isMatch(arr, ['he', 'llo'])) console.log('test 3F passed');
else console.log('test 3F FAILED');

// Test 3F: Make sure the correct items were returned:
if (isMatch(removed, ['zz', 'gg', 'cc', 'aa'])) console.log('test 3G passed');
else console.log('test 3G FAILED');


arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([1, 1, 1], arr);
if (isMatch(arr, ['he', 'cc', 'aa'])) console.log('test 3H passed');
else console.log('test 3H FAILED');

if (isMatch(removed, ['gg', 'zz', 'llo'])) console.log('test 3I passed');
else console.log('test 3I FAILED');


// Test 4: Make sure -1 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
	getAndRemoveByIndexes([-1], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	let x = getAndRemoveByIndexes([6], arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Make sure non-array as first arg triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	getAndRemoveByIndexes('1', arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure non-array as second arg triggers error:
errorTriggered = false;
try {
	getAndRemoveByIndexes(0, {});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
