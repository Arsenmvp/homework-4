function createArrayIterator(array) {
 }
 
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined
 function createArrayIterator(array) {
    let index = 0;
    return function() {
        if (index < array.length) {
            return array[index++];
        } else {
            return undefined;
        }
    };
}
