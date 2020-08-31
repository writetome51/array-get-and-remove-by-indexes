# getAndRemoveByIndexes(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indexes: number[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>):  any[] 

Removes and returns items, identified by their `indexes`,  from `array`.   
Negative indexes not allowed.  
Items are returned in ascending index-order: i.e, item with index 0 appears first.  

## Examples
```
let arr = [10,20,30,40,50,60];
let removed = getAndRemoveByIndexes([3, 1], arr);
// removed is now [20, 40].  arr is now [10, 30, 50, 60].

arr = ['he', 'llo', 'zz', 'gg', 'cc'];
removed = getAndRemoveByIndexes([4, 0], arr);
//  removed is now ['he', 'cc'].  arr is ['llo', 'zz', 'gg']. 

let arr = [10,20,30,40,50,60];
let removed = getAndRemoveByIndexes([1,3,5], arr);
// removed is now [20, 40, 60].  arr is [10, 30, 50].

// It can work with duplicate indexes, though the result may not be
// what you wanted:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([2, 3, 4, 4], arr);
// removed is now ['zz', 'gg', 'aa', 'cc'].  arr is ['he', 'llo']

arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
removed = getAndRemoveByIndexes([1, 1, 1], arr);
// removed is now ['gg', 'zz', 'llo'].  arr is ['he', 'cc', 'aa']
```


## Installation
`npm i  @writetome51/array-get-and-remove-by-indexes`


## Loading
```js
import {getAndRemoveByIndexes} 
	from '@writetome51/array-get-and-remove-by-indexes';
```
