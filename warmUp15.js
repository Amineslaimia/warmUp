// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverse (string){
    var array=[];
    var arrayindex=0;
    var index=0;
    for (var i = 0;i<string.length;i++){
     if (string[i]===' '){
         for (var j=index;j<i;j++){
             array[arrayindex]+=string[j];
                index=i;
             arrayindex++
         }
     }
    }
    return array;
}