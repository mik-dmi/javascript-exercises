const getTheTitles = function(arr){
    let books = [];
    for(let i = 0; i < arr.length; i++){
        books[i] = arr[i].title 
    }
    console.log(books);
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
