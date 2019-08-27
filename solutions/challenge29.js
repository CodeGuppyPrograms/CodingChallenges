// Coding challenge #29: Print the distance between the first 100 prime numbers
// https://codeguppy.com/code.html?xKQEeKYF1LxZhDhwOH7V

printDistances(100);

// Print distances between the first n prime numbers
function printDistances(n)
{
    var lastPrime = 2;
    var i = lastPrime + 1;
    var foundPrimes = 1;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            println(i - lastPrime, "\t", i, " - ", lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        
        i++;
    }
}

// Returns true if number n is prime
function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    var maxDiv = Math.sqrt(n);
    
    for(var i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}
