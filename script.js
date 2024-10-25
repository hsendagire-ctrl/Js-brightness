// Brightness IPO calc

// Button Click Listener
document.getElementById("btn1").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let r = +document.getElementById("rvalue").value;
  let g = +document.getElementById("gvalue").value;
  let b = +document.getElementById("bvalue").value;

  //   Process
  var brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

  //   Output
  document.getElementById("output").innerHTML = brightness;
}
