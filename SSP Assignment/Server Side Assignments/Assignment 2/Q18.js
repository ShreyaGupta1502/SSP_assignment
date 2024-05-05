function swapCase(str) {
  var swapped = '';
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  return swapped;
}

// Example usage:
var inputString = "Hello World";
var swappedString = swapCase(inputString);
console.log(swappedString); // Output: "hELLO wORLD"