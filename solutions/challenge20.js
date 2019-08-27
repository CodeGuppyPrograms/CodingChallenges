// Coding challenge #20: Rotate an array to the left 1 position
// https://codeguppy.com/code.html?MRmfvuQdZpHn0k03hITn

var ar = [1, 2, 3];
rotateLeft(ar);
println(ar);

function rotateLeft(ar)
{
    var first = ar.shift();
    ar.push(first);
}
