///MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that
/// number and its corresponding month. For example: if the user enters the number 3, then it 
///should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var x = 13;
if (x===1){
    console.log(months[0])
}
if (x===2){
    console.log(months[1])
}
if (x===3){
    console.log(months[2])
}
if (x===4){
    console.log(months[3])
}
if (x===5){
    console.log(months[4])
}
if (x===6){
    console.log(months[5])
}
if (x===7){
    console.log(months[8])
}
if (x===8){
    console.log(months[7])
}
if (x===9){
    console.log(months[8])
}
if (x===10){
    console.log(months[9])
}
if (x===11){
    console.log(months[10])
}
if (x===12){
    console.log(months[11])
}
if (x>12){
	console.log('get out')
}
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function takeInput() {
// 	const inputNumber = 6;

// 	if (inputNumber < 1 || inputNumber > 12) {
// 	} 
// 		console.log(months[inputNumber - 1]);
// 	}
// 	takeInput();

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
console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));


console.log(23, " is prime? ", isPrime(23));

