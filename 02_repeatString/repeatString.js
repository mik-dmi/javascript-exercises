const repeatString = function(string , num) {
    let i = 1;
    let newString = "";
    if( num < 0) return "ERROR";
      
    while( i <= num ){
        newString = newString + string;
        i++;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
