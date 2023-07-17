const removeFromArray = function(arr, ...removeArg ) {
    
    return arr.filter(x => !removeArg.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
