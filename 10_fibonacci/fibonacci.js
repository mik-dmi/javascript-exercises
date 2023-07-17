const fibonacci = function(num) {
    if (+num < 0) return "OOPS";
    if (+num === 0) return 0;
    let count = null;
    let fFirst = 0;
    let fSecond = 1;
    for(let i = 2; i <= +num; i++){
        count = fFirst + fSecond;
        fFirst = fSecond;
        fSecond = count;
    }
    return fSecond;


};

// Do not edit below this line
module.exports = fibonacci;
