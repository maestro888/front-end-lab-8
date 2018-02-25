function debounce(fn, ms) {
    let timeOutId = null;

    return function () {

        if (timeOutId) {
            clearTimeout(timeOutId)
        }

        timeOutId = setTimeout(fn, ms);
    }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'