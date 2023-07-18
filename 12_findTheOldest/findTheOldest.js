const findTheOldest = function(arr) {
    let oldest = arr[0];
    let ageCurr = null;
    let ageAccum = null;
    return arr.reduce((accumulator, currentValue) =>{ 
        const currentYear = new Date().getFullYear();
        if(!currentValue.yearOfDeath) ageCurr =  currentYear   - currentValue.yearOfBirth;
        else{ 
            ageCurr =  currentValue.yearOfDeath - currentValue.yearOfBirth }
        
            if( !accumulator.yearOfDeath)  ageAccum =  currentYear   - accumulator.yearOfBirth;
        else{ 
            ageAccum = accumulator.yearOfDeath -accumulator.yearOfBirth   }
        return ageAccum > ageCurr ? accumulator : currentValue}
    
    ,0)
    



};

// Do not edit below this line
module.exports = findTheOldest;
