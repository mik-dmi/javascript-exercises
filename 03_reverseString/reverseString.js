const reverseString = function(phrase) {
    let aux = [];
    for ( let i = 0; i < phrase.length; i++){
        aux[i] =  phrase[(phrase.length - i -1)] ;   
    }
    let arr = aux.join('');
    return arr;

};

// Do not edit below this line
module.exports = reverseString;
