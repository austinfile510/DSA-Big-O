function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// This is polynomial time (O(n^2)). The algorithm loops through the array to find 'i', then has to loop again to create 'j'. After that, it logs the pair to the console. The nested looping increases the time complexity more quickly than the size of our input.