// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string
// https://codeguppy.com/code.html?QGWEPdBEVk4RFGn6UVhP

println(codesToString([73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]));

function codesToString(ar)
{
    return String.fromCharCode(...ar);
}
