// Coding challenge #43. Create a function that will receive a bi-dimensional array as argument and a number 
// and will extract as a unidimensional array the column specified by the number
// https://codeguppy.com/code.html?b22i9I5CUkFTdHF4Bod8

var ar = [ ["John", 120],
            ["Jane", 115],
            ["Thomas", 123],
            ["Mel", 112],
            ["Charley", 122]
         ];

var numbers = extractCol(ar, 1);
println(numbers);

function extractCol(ar, colNo)
{
    var arCol = [];
    
    for(var i = 0; i < ar.length; i++)
    {
        arCol.push(ar[i][colNo]);
    }
    
    return arCol;
}
