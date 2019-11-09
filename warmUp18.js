// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function coutoccurences(string){
  var array=[];
  var result =[];
  var count =0;
  for(var i =0;i<string.length;i++){
    array.push(string[i])
    for(var j =0;j<array.length;j++){
      if(array[j]===string[i]){
      count++;
    }
  }
  result.push(count)
  count=0;
}
return result.join('');
}
