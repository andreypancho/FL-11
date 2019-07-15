function getNumbers(str) {
    let arrayNumbers = [];
    str = str.slice('');
    for (let i of str) {
        i = parseInt(i)
        if (typeof i === 'number' && !isNaN(i)) {
            arrayNumbers.push(i);
        } else {
            continue;
        }
    }
    return arrayNumbers;
}

function findTypes() {
    let result = {};
    for (let i = 0; i < arguments.length; i++) {
        let typeofArgument = typeof arguments[i];
        if (result[typeofArgument]) {
            result[typeofArgument]++;
        } else {
            result[typeofArgument] = 1;
        }
    }
    return result;
}

function executeforEach(arr, fn) {
    for (let i of arr) {
        fn(i)
    }
}

function mapArray(arr, fn) {
    let result = [];
    for (let i of arr) {
        result.push(fn(i))
    }
    executeforEach(result, function(el) {
        console.log(el)
    });
    return result;
}

function filterArray(arr, fn) {
    let result = [];
    for (let i of arr) {
        if (fn(i)) {
            result.push(i)
        }
    }
    executeforEach(result, function(el) {
        console.log(el)
    });
    return result;
}

function showFormattedDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    date = 'Date: ' + months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
    return date;
}

function canConvertToDate(date) {
    let valid = new Date(date);
    if (isNaN(valid.getTime())) {
        return false;
    } else {
        return true;
    }
}

function daysBetween(date1, date2) {
    const msInDays = 86400000;
    date1 = date1.getTime();
    date2 = date2.getTime();
    let result = Math.round((date2 - date1) / msInDays);
    return result;
}

function getAmountOfAdultPeople(data) {
    const minAge = 18;
    const daysInYear = 365;
    let count = 0;
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let difference = daysBetween(new Date(data[i][' birthday ']), new Date());
        result[i] = difference / daysInYear;
    }
    count = filterArray(result, function(el) {
        return el > minAge
    });
    return count.length;
}

function keys(obj) {
    let arrayKeys = [];
    for (let key in obj) {
        if (key) {
            arrayKeys.push(key);
        }
    }
    return arrayKeys;
}

function values(obj) {
    let arrayValues = [];
    for (let key in obj) {
        if (key) {
            arrayValues.push(obj[key]);
        }
    }
    return arrayValues;
}