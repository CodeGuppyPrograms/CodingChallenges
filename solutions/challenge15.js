// Coding challenge #15: Create a function that will find the nth Fibonacci 
// number using recursion
// https://codeguppy.com/code.html?IneuIg9O0rRV8V76omBk

function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
println(n);
