// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.
function balloonInstance(text){
    var ballonCount=0;
    var aCount=null;
    var bCount=null;
    var lCount=null;
    var oCount=null;
    var nCount=null;
    var array=[];
    for (var i=0;i<text.length;i++){
        if(text[i]==='b'||text[i]==='a'||text[i]==='l'||text[i]==='o'||text[i]==='n'){
        array.push(text[i])
    }
}
    for (var j=0;j<array.length;j++){
        switch (array[j]){
            case 'a':
                aCount++;
                break;
                case 'b':
                bCount++;
                break;
                case 'l':
                lCount++;
                break;
                case 'o':
                oCount++;
                break;
                case 'n':
                nCount++;
                break;
        }
    }
    console.log(lCount,oCount,array,(lCount%2===0)&&(oCount%2===0))
        if((lCount%2===0)&&(oCount%2===0)){
            return aCount
    }else{return 0}

    

}