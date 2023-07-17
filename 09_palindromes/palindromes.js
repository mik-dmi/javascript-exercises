const palindromes = function(phrase) {
    phrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
    let initialArr = [...phrase];
    let finalArr = [...phrase];
    for(let i = 0; i < initialArr.length ; i++){
        finalArr[i] = initialArr[initialArr.length - i -1]; 
    };

    if( finalArr.toString() == initialArr.toString()) return true;
    return false;

};

// Do not edit below this line
module.exports = palindromes;


