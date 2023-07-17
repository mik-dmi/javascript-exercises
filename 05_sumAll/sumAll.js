const sumAll = function(firstNumb, secondNumb) {
    let counterSum = 0;
   if ( +firstNumb > +secondNumb) {
    const aux = +secondNumb;
    secondNumb = +firstNumb ;
    firstNumb = aux;
   } 
    if ( typeof(firstNumb) == "number" &&  typeof(secondNumb) == "number" && firstNumb > -1 && secondNumb > -1  )
        for(let i = +firstNumb; i <= +secondNumb; i++){
            counterSum += i;
        }
    else{
        return "ERROR";
    }
    return counterSum;
};

// Do not edit below this line
module.exports = sumAll;
