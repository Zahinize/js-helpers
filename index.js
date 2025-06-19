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
}
