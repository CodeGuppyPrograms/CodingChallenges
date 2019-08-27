// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
// https://codeguppy.com/code.html?rKOfPxHbVwxNWI2d8orH

var f0 = 0;
println(f0);

var f1 = 1;
println(f1);

for(var i = 2; i < 10; i++)
{
    var fi = f1 + f0;
    println(fi);
    
    f0 = f1;
    f1 = fi;
}
