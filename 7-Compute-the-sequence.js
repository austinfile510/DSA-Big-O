function compute(num) {
	let result = [];
	for (let i = 1; i <= num; i++) {
		if (i === 1) {
			result.push(0);
		} else if (i === 2) {
			result.push(1);
		} else {
			result.push(result[i - 2] + result[i - 3]);
		}
	}
	return result;
}

console.log(compute(100000));

// This function creates an array of numbers whose size is determined by the input. Each number in the array adds the previous number in the array to get the next number. The first two numbers it pushes are 0 and 1, and then the array adds them together to input the third number in the array, another 1. It then adds the two 1s in the array to get 2, and places that in the next number in the array. It keeps doing this until it has completed the number of loops from the input.

// This algorithm has linear time complexity because we are summing two elements in an array to add another item into the array. The higher the input, the more times the for loop will run.
