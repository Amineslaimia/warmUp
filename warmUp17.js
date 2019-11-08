// There is a special keyboard with all keys in a single row.
// ​
// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.
// ​
// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.
// ​

// ​
// Example 1:
// ​
// Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4.
// Example 2:
// ​
// Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
// Output: 73

// ​
// Constraints:
// ​
// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 10^4
// word[i] is an English lowercase letter.

// ​
// ​
// var calculateTime = function(keyboard, word) {

// };
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }

function calculatetime (keyboard, word){
  var array=keyboard.split('');
  var objkeyboard={};

     each (array,function(element,i){
    objkeyboard[element]=i;
  })
  var index=objkeyboard[word[0]];
  var result=0;
    for (var j =0;j<word.length;j++){
       result=result+( objkeyboard[word[j]]-index)
        console.log(result,index,objkeyboard[word[j]])
       index=objkeyboard[word[j]];

    }
    return result;
  }
