# getAndRemoveByIndexes(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indexes: number[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>):  any[] 

Removes and returns items, identified by their `indexes`,  from `array`.   
`indexes` can be negative or positive.   
Items are returned in ascending index-order: i.e, item with index 0 appears first.  

## Examples
```
let arr = [10,20,30,40,50,60];

let removed = getAndRemoveByIndexes([3, 1], arr);
// removed is now [20, 40].  arr is now [10, 30, 50, 60] .

arr = [1,2,3,4,5,6,7];

removed = getAndRemoveByIndexes([-1, 0, 1], arr);
// removed is now [1, 2, 7] .  arr is now [3, 4, 5, 6] . 

arr = [1,2,3,4,5,6,7];

removed = getAndRemoveByIndexes([-2, -4, -6], arr);
// removed is now [2,4,6].  arr is now [1, 3, 5, 7] .
```


## Installation
`npm i  @writetome51/array-get-and-remove-by-indexes`


## Loading
```js
import {getAndRemoveByIndexes} 
	from '@writetome51/array-get-and-remove-by-indexes';
```
