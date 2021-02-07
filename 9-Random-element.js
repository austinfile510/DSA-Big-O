function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// This is constant time, as the algorithm will take the same amount of time to complete no matter how big the input is. It will always select a random number no matter how big the array is.