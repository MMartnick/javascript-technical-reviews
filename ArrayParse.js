// 1. Write a function that takes an array of strings and determines how many times each string appears in the array. Should return an object. 


const strings = ["Barett", "Tifa", "yuffie", "Vincent", "Cloud", "cloud", "Aerith", "Cid", "zack", "Yuffie", "Red", "Zack", "Yuna", "Kain", "tifa"]

  function countName(array){
    var nameCount = {};
    
    // for loop to check each item in the array and add it to the nameCount object as a property 
    for (var k = 0 ; k <array.length ; k++){
      var nameString = array[k].toLowerCase();

      if (!nameCount[nameString]){
        //checks if the current string is a property in the nameCount object,
        //if not then we create an object property with an initial count value of 1
        nameCount[nameString]= 1;
       }
      else{
        //if the name already exists in the nameCount object we increament its count value 
        nameCount[nameString]++;
      }
    }
    return nameCount;
  }
var results = countName(strings);
console.log(results);
