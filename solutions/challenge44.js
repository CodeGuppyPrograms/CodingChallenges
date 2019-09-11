// Coding challenge #44. Create a function that will convert a string containing a binary number into a number
// https://codeguppy.com/code.html?iDykr8pqeuTPgZjVAvWv

println(binaryToNumber("11111111"));

function binaryToNumber(sBinary)
{
    return parseInt(sBinary, 2);
}
