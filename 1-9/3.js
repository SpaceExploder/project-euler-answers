var num = 600851475143;
var current = 3;
while(Math.sqrt(current) < num) {
	if (num % current === 0) num = num / current;
	current += 2;
}
current -= 2;
console.log(current);