function addition() {
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");

  var num1 = number1.value;
  var num2 = number2.value;

  var no1 = Number(num1);
  var no2 = Number(num2);

  result = no1 + no2;
  console.log(result);
  document.getElementById("output").innerHTML = result;
  return result;
}

function substraction() {
  var number1 = document.getElementById("subnumber1");
  var number2 = document.getElementById("subnumber2");

  var num1 = number1.value;
  var num2 = number2.value;

  var no1 = Number(num1);
  var no2 = Number(num2);

  result = no1 - no2;
  console.log(result);
  document.getElementById("suboutput").innerHTML = result;
  return result;
}

function multiply() {
  var number1 = document.getElementById("multnumber1");
  var number2 = document.getElementById("multnumber2");

  var num1 = number1.value;
  var num2 = number2.value;

  var no1 = Number(num1);
  var no2 = Number(num2);

  result = no1 * no2;
  console.log(result);
  document.getElementById("multoutput").innerHTML = result;
  return result;
}

function division() {
  var number1 = document.getElementById("divnumber1");
  var number2 = document.getElementById("divnumber2");

  var num1 = number1.value;
  var num2 = number2.value;

  var no1 = Number(num1);
  var no2 = Number(num2);

  result = no1 / no2;
  console.log(result);
  document.getElementById("divoutput").innerHTML = result;
  return result;
}
