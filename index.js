/*** Get unique Array items ***/
const getUnique = (arr) => arr.reduce((acc, item) => {
    const isItem = !!(acc.indexOf(item) !== -1);

    if (!isItem) acc.push(item);
    return acc.sort((a,b) => a-b);
}, []);

/*** Create a LinkedList from an Array ***/
const createLinkedList = (arr) => {
    let llist = {
        data: arr.shift(),
        next: null
    };
    let currNode = llist;

    while (arr.length) {
        let node = {
            data: arr.shift(),
            next: null
        };
        currNode.next = node;
        currNode = node;
    }
    
    return llist;
};

/*** Create a Doubly LinkedList from an Array ***/
const createDoublyLinkedList = (arr) => {
    let doublyLL = {
        data: arr.shift(),
        prev: null,
        next: null
    };
    let current = doublyLL;
    
    while (arr.length) {
        let node = {
            data: arr.shift(),
            prev: null,
            next: null
        };
        node.prev = current;
        current.next = node;
        current = node;
    }
    
    return doublyLL;
};

/** Reverse an array using an in-place algorithm **/
const reverseInPlace = (arr) => {
    for (let i=0; i<=Math.floor((arr.length-2)/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

/** Get number range using recursion **/
const getRange = (start, end) => {
    if (start === end) return [start];

    return [start, ...getRange(start + 1, end)];
};

/** Get decimal representation from a binary number **/
const getDecimalFromBinary = (num) => parseInt(num, 2);

/** Get binary representation from a decimal number **/
const getBinaryFromDecimal = (num) => num.toString(2);

/** Create a fibonacci series **/
const fibonacci = (arr, n) => {
    if (n <= 2) {
        arr.splice(n);
        return arr;
    }

    const result = structuredClone(arr);
    for (let i = arr.length; i < n; i++) {
        let item = result[i - 1] + result[i - 2];
        result.push(item);
    }

    return result;
}

/** Create a tribonacci series **/
const tribonacci = (arr, n) => {
    if (n < 3) {
        arr.splice(n);
        return arr;
    };

    const result = structuredClone(arr);
    for (let i = arr.length; i < n; i++) {
        let item = result[i - 1] + result[i - 2] + result[i - 3];
        result.push(item);
    }

    return result;
}
