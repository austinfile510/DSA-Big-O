
/*
* s, d, e represents three pegs (source, destination and extra).
* n is number of discs (All initially in s)
*/

resolver_tower_of_hanoi = function (s, d, e, n) {

    // terminating condition
    if (n <= 0) {
        return
    }

    resolver_tower_of_hanoi(s, e, d, n - 1)

    console.log(`Move Disk-${n} FROM ${s} TO ${d}`);

    resolver_tower_of_hanoi(e, d, s, n - 1);
}

console.log(resolver_tower_of_hanoi('s', 'd', 'e', 4))

// Given 5 disks, after 7 recursive calls, the three smallest disks are in the middle rod while the three largest disks are still stacked in the first rod.

// A 3-disk puzzle requires 7 moves to complete. A 4 disk puzzle requires 16 moves to complete. A 5 disk puzzle requires 32 moves to complete.

//The runtime for this algorithm is exponential time complexity. Each disk increases the number of moves required to solve the puzzle exponentially.