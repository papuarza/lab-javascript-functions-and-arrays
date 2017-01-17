function maxOfTwoNumbers(first, second){
  if(first.length>second.length){
    return first
  }else{
    return second
  }
}

var largest =maxOfTwoNumbers(2,6);
console.log(largest);

var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

var theLargestWord = 0;
var challengerWord = 0;

function findLongestWord (words){
  theLargestWord = words[0];
  words.forEach(function(word){
    challengerWord = word;
    theLargestWord = maxOfTwoNumbers(theLargestWord, challengerWord);
  });
  return theLargestWord;
}

var longest = findLongestWord(words);
console.log(longest);


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(array){
  var sum = 0;
  for(var i=0; i<array.length;i++){
    sum = sum + array[i];
  }
  return sum;
}

var total = sumArray(numbers);
console.log(total);


numbers = [2, 6, 9, 10, 7, 4, 1, 9];
var average=0;

function averageNumbers(array){
  average = sumArray(array);
  average = average/array.length;
  return average;
}

average = averageNumbers(numbers);
console.log(average);

words = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace"
];

function averageWordLength(array){
  var sum = 0;
  for(var i=0; i<array.length;i++){
    sum = sum + array[i].length;
  }
  return sum/array.length;
}

var averageLength = averageWordLength(words);
console.log(averageLength);
