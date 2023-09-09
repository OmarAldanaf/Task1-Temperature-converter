function convertTemp() {
  var tempinput = document.getElementById("inptext").value.trim(); 
  var fromUnit = document.getElementById("From").value;

  var result = document.getElementById("result");
  var resultcon;

  
  if (tempinput === "") {
      result.innerHTML = "Please enter a value";
      return; 
  }

  if (fromUnit === 'celsius to fahrenheit' ) {
      resultcon = (tempinput * 9/5) + 32;
      result.innerHTML = tempinput + "(°C)" + " in fahrenheit is : " + resultcon + "(°F)";
  } else if (fromUnit === 'celsius to Kelvin') {
      resultcon = parseFloat(tempinput) + 273.15;
      result.innerHTML = tempinput + "(°C)" + " in kelvin is : " + resultcon + "(K)";
  } else if (fromUnit === 'fahrenheit to celsius') {
      resultcon = (parseFloat(tempinput) - 32) * 5/9;
      result.innerHTML = tempinput + "(°F)" + " in celsius is " +  resultcon + "(°C)";
  } else if (fromUnit === 'fahrenheit to Kelvin') {
      resultcon = (parseFloat(tempinput) - 32) * 5/9 + 273.15;
      result.innerHTML = tempinput + "(°F)" + " in kelvin is " +  resultcon + "(K)";
  } else if (fromUnit === 'Kelvin to celsius') {
      resultcon = parseFloat(tempinput) - 273.15;
      result.innerHTML = tempinput + '(K)' + " in celsius is:  " + resultcon + "(°C)";
  } else if (fromUnit === 'Kelvin to fahrenheit') {
      resultcon = (parseFloat(tempinput) - 273.15) * 9/5 + 32;
      result.innerHTML = tempinput + '(K)' + " in fahrenheit is : " + resultcon + "(°F)";
  } else {
      result.innerHTML = "Invalid input";
  }
}

var conv = document.getElementById("conv");
conv.addEventListener('click', convertTemp);
