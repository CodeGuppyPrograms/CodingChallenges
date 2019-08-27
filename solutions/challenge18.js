// Coding challenge #18: Print the first 100 prime numbers
// https://codeguppy.com/code.html?gnMVeOZXN6VhLekyvui8

printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
    var n = 0;
    var i = 2;
    
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            println(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}


// Returns true if a number is prime
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
