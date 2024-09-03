function convert() {
  const binaryInput = document.getElementById("binaryInput").value;
  // Convert binary input to decimal using parseInt(0 with base 2
  const decimaResult = parseInt(binaryInput, 2);
  // Display the decimal results
  document.getElementById("results").innerHTML = `Decimal: ${decimaResult}`;
}
