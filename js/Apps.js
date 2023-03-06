//first card
let serial = 0;
document.getElementById("first-card").addEventListener("click", function () {
  const productName = document.getElementById("first-name").innerText;

  const firstField = getElementFirstFieldNumber("card-1-first-field");
  const secondField = getElementSecondFieldNumber("card-1-second-field");
  console.log(firstField, secondField);
  const productTotal = (0.5 * firstField * secondField).toFixed(2);
  if (productTotal >= 0) {
    serial += 1;
    displayProduct(productName, productTotal);
  }
});

//function-1
function getElementFirstFieldNumber(inputFirstField) {
  const firstFieldNumber = document.getElementById(inputFirstField);
  const firstFieldNumberString = firstFieldNumber.value;
  const firstField = parseFloat(firstFieldNumberString);
  document.getElementById(inputFirstField).value = "";
  if (firstField >= 0) {
    // console.log("firstField", firstField);
    return firstField;
  } else {
    alert("Please Enter a positive Value in the First Field");
    return;
  }
}
//function-2
function getElementSecondFieldNumber(inputSecondField) {
  const secondFieldNumber = document.getElementById(inputSecondField);
  const secondFieldNumberString = secondFieldNumber.value;
  const secondField = parseFloat(secondFieldNumberString);
  document.getElementById(inputSecondField).value = "";
  if (secondField >= 0) {
    // console.log("secondField", secondField);
    return secondField;
  } else {
    alert("Please Enter a positive Value in the Second Field");
    return;
  }
}

function displayProduct(productName, productTotal) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${productName}</td>
  <td>${productTotal}cm<sup>2</sup></td>
  <td><button class="text-white bg-blue-400 px-2 py-1 rounded">Convert to m<sup>2</sup></button></td>
  
 
  `;
  container.appendChild(tr);
}

// card-2
document.getElementById("second-card").addEventListener("click", function () {
  const productName = document.getElementById("second-name").innerText;

  const firstField = getElementFirstFieldNumber("card-2-first-field");
  const secondField = getElementSecondFieldNumber("card-2-second-field");
  const productTotal = (firstField * secondField).toFixed(2);

  if (productTotal >= 0) {
    serial += 1;

    displayProduct(productName, productTotal);
  }
});

// card-3
document.getElementById("third-card").addEventListener("click", function () {
  const productName = document.getElementById("third-name").innerText;

  const firstField = getElementFirstFieldNumber("card-3-first-field");
  const secondField = getElementSecondFieldNumber("card-3-second-field");
  const productTotal = (firstField * secondField).toFixed(2);

  if (productTotal >= 0) {
    serial += 1;

    displayProduct(productName, productTotal);
  }
});

//card-4
document.getElementById("four-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("four-name").innerText;

  const firstField = getElementFirstFieldNumber("card-4-first-field");
  const secondField = getElementSecondFieldNumber("card-4-second-field");

  const productTotal = (0.5 * firstField * secondField).toFixed(2);

  if (productTotal >= 0) {
    displayProduct(productName, productTotal);
  }
});

//card-5
document.getElementById("five-card").addEventListener("click", function () {
  const productName = document.getElementById("five-name").innerText;

  const firstField = getElementFirstFieldNumber("card-5-first-field");
  const secondField = getElementSecondFieldNumber("card-5-second-field");
  const productTotal = (0.5 * firstField * secondField).toFixed(2);

  if (productTotal >= 0) {
    serial += 1;

    displayProduct(productName, productTotal);
  }
});

// card-6
document.getElementById("six-card").addEventListener("click", function () {
  const productName = document.getElementById("six-name").innerText;

  const firstField = getElementFirstFieldNumber("card-6-first-field");
  const secondField = getElementSecondFieldNumber("card-6-second-field");
  const productTotal = (3.1416 * firstField * secondField).toFixed(2);

  if (productTotal >= 0) {
    serial += 1;
    displayProduct(productName, productTotal);
  }
});
