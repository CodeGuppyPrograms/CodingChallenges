// Coding challenge #12: Create a function that receives an array of numbers
// and returns an array containing only the positive numbers
// https://codeguppy.com/code.html?0eztj1v6g7iQLzst3Id3

// solution 1

function getPositives(ar)
{
    var ar2 = [];
    
    for(var i = 0; i < ar.length; i++)
    {
        var el = ar[i];
        
        if (el >= 0)
        {
            ar2.push(el);
        }
    }
    
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

println(ar2);
