// Coding challenge #21: Rotate an array to the right 1 position
// https://codeguppy.com/code.html?fHfZqUmkAVUXKtRupmzZ

var ar = [1, 2, 3];
rotateRight(ar);
println(ar);

function rotateRight(ar)
{
    var last = ar.pop();
    ar.unshift(last);
}
