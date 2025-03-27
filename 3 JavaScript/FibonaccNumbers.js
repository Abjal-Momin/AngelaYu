function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

// output = fibonacciGenerator(prompt("enter your fibonaccr number"));
// alert(output);
// Work's only on browser above 2 lines

output = fibonacciGenerator (); // <== Add n value here
console.log(output);
