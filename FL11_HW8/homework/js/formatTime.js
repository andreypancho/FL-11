function formatTime(min) {
    let days = Math.floor(min / 1440);
    let hours = Math.floor((min / 60 - (days * 24)));
    let minutes = Math.floor(min % 60);
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s) ';
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));