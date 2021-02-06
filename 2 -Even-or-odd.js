function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// This is a constant time because the result of the function doesn't vary on input size. It merely checks if a number is divisible by 2 and returns a true or false value. No matter what number is put in there, this function will only determine whether or not it is even.