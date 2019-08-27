// Coding challenge #22: Reverse an array
// https://codeguppy.com/code.html?GZddBqBVFlqYrsxi3Vbu

var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
println(ar2);

function reverseArray(ar)
{
    var ar2 = [];
    
    for(var i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}
