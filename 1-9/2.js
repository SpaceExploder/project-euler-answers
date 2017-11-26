var current = [1, 2];
var sum = 0;
while (current[1] < 4e6) {
	current.push(current.shift() + current[0]);
	if (current[0] % 2 === 0) sum += current[0];
}
console.log(sum);