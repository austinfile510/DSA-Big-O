// 1. Counting Sheep

function countSheep(sheep) {
	for (let i = sheep; i >= 0; i--) {
		if (i === 0) {
			console.log('All sheep have jumped over the fence.');
		} else {
			console.log(sheep + ': Another sheep jumps over the fence.');
			sheep--;
		}
	}
}

countSheep(5);

// This function has a linear time complexity. The amount of times the for loop has to iterate the countdown message increases directly proportional to the number of sheep we count.

// 2. Power Calculator

function powerCalculator(val, pow) {
	let sum = val;
	for (let i = 2; i <= pow; i++) {
		sum *= val;
	}
	return sum;
}

console.log(powerCalculator(10, 2));

// This function uses linear time complexity because you are running through the for loops an increased number of times based on the value of the exponent (pow).

// 3. Reverse String

function reverseString(string) {
	let newString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
}

console.log(reverseString('Hello World'));

// This function uses linear time complexity because the number of times you go through the algorithm is dependent on the length of the string.

// 4. nth Triangular Number

function tri(n) {
	if (n <= 1) {
		return n;
	} else {
		return n * (n + 1) / 2;
	}
}

console.log(tri(3));

// This function uses constant time complexity because no matter what the input is, it only iterates through the function once to get the nth triangular number in the sequence, using the triangular number formula. 

// 5. String Splitter

function stringSplitter(str, separator) {
	let newStringArray = []
	if (!separator.length) {
		newStringArray = str;
		return console.log(newStringArray)
	} else {
		newStringArray = str.split(separator)
		return console.log(newStringArray)
	}

}

stringSplitter('02/20/2020', '/')

// This function uses constant time complexity because no matter what the input is, it only iterates through the array once and separates it based on the separator input.

// 6. Fibonacci

function fib(n){
	let arr = [0, 1];
	for (let i = 2; i < n + 1; i++){
	  arr.push(arr[i - 2] + arr[i -1])
	}
   return arr[n]
  }

  console.log(fib(4));

  // This function uses linear time complexity because we are iterating through the for loop a number of times relative to n.

  // 7. Factorial 

  function factorialize(num) {
	if (num === 0 || num === 1)
	  return 1;
	for (var i = num - 1; i >= 1; i--) {
	  num *= i;
	}
	return num;
  }
  console.log(factorialize(5));

  // This function uses linear time because the number of times we run through the for loop increases directly proportional to the input. If we want to find the answer to 5!, we must iterate 5 times. 