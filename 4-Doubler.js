function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// This is linear time. The algorithm loops through each number in the array, doubles the number, and returns the completed array. The larger the array, the more time it will take to loop through each number.