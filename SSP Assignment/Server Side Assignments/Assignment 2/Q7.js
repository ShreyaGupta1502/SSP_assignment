function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i+1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
}

// Example usage:
const unsortedArray = [5, 3, 7, 2, 8, 4, 1];
bubbleSort(unsortedArray);
console.log(unsortedArray); // Output: [1, 2, 3, 4, 5, 7, 8]
