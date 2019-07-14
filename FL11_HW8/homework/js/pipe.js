function addOne(x) {
    return x + 1;
}

function pipe() {
    let result = arguments[0];

    for (let item of arguments) {
        if (typeof(item) === 'function') {
            result = item(result);
        }
    }

    return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));