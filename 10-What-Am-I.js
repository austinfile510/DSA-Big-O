function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isWhat(7919))

// This algorithm determines whether or not the input is a prime number (that is, a number that is not a product of two smaller natural numbers). This algorithm uses constant time because it takes the same amount of time to go through the algorithm no matter how large the input gets.