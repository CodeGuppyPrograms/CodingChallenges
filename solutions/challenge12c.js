// Coding challenge #12: Create a function that receives an array of numbers
// and returns an array containing only the positive numbers
// https://codeguppy.com/code.html?qJBQubNA7z10n6pjYmB8

// solution 3

function getPositives(ar)
{
    return ar.filter(el => el >= 0);
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
println(ar2);
