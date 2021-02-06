function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// This is linear time time because it a larger array will take longer to loop through each item in the array to compare to the item in the input.