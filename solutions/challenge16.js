// Coding challenge #16: Create a function that will return a Boolean 
// specifying if a number is prime
// https://codeguppy.com/code.html?fRYsPEc2vcZTbIU8MKku

function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    
    return true;
}

println(2, " is prime? ", isPrime(2));
println(3, " is prime? ", isPrime(3));
println(4, " is prime? ", isPrime(4));
println(5, " is prime? ", isPrime(5));
println(9, " is prime? ", isPrime(9));
