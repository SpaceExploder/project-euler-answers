var highest = 0;

for (var x = 0; x < 1000; x++) {
	for (var y = 0; y < 1000; y++) {
		var p = x * y;
		if (p.toString() === p.toString().split("").reverse().join("") && p > highest) highest = p;
	}
}
console.log(highest);