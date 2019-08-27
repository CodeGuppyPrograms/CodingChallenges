// Coding challenge #4:	Print all the multiplication tables with numbers from 1 to 10
// https://codeguppy.com/code.html?78aD4mWSCzoNEVxOQ8tI

for(var i = 1; i <= 10; i++)
{
    printTable(i);
    println("");
}

function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        println(row);
    }
}
