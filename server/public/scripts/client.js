$(document).ready(onReady);

// event handlers for each button click
function onReady() {
  console.log("DOM loaded");
  $(".symbol").on("click", symbolClick);
  $("#submit").on("click", postEquation);
  $("#reset").on("click", appendToDom);
  getEquations();
}

// symbol will be whatever symbol button is clicked
let symbol = "";
function symbolClick() {
  console.log("clicked");
  symbol = this.value;
  console.log(symbol);
}

function postEquation() {
  console.log("in postEquation");
  // form information and symbol button clicked make up equation data
  let equation = {
    firstValue: $("#firstValueIn").val(),
    secondValue: $("#secondValueIn").val(),
    symbol: symbol,
  };
  console.log("equations!", equation);
  // telling ajax to send these values (objects) to the server
  $.ajax({
    method: "POST",
    url: "/equations",
    data: equation,
  })

    .then(function (response) {
      console.log("post response", response);
      getEquations();
    })
    .catch(function (error) {
      console.log(error);
      alert(error.responseText);
    });
}
// then get the updated array
function getEquations() {
  $.ajax({
    method: "GET",
    url: "/equations",
  }).then(function (response) {
    console.log("response from server", response);
    appendToDom(response);
  });
}
// and append that to the DOM
function appendToDom(array) {
  console.log("in appendToDom", array);
  $("#output").empty();

  // for (let object of array) {
  //   $("#output").append(`
  //   <li>${object.firstValue}${object.secondValue}</li>
  //   `);
  // }
}
