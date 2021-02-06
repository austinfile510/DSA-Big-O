function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// This is polynomial time because it uses nested loops(0(^n2)) with two levels of looping. The function checks each number in the array, so the longer the inputs, the more loops will have to be completed to check each number.