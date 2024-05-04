function generateFibonacci() {
  var termsInput = document.getElementById("terms");
  var outputDiv = document.getElementById("output");
  var terms = parseInt(termsInput.value);

  outputDiv.innerHTML = "";

  if (isNaN(terms) || terms <= 0 || terms >= 100) {
    outputDiv.innerHTML = "Please enter a valid number between 1 and 99.";
    return;
  }

  var fibSeries = [0, 1];
  for (var i = 2; i < terms; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  outputDiv.innerHTML = "Fibonacci Series: " + fibSeries.join(", ");
}
