$(document).ready(onReady);

function onReady() {
  console.log("DOM loaded");
  $("#plus").on("click", appendToDom);
  $("#minus").on("click", appendToDom);
  $("#multiply").on("click", appendToDom);
  $("#divide").on("click", appendToDom);
  $("#submit").on("click", appendToDom);
  $("#reset").on("click", appendToDom);
}

let equations = {
  firstValue: $("#firstValueIn").val(),
  secondValue: $("#secondValueIn").val(),
};

// function addEquation() {
//   console.log("in addEquation");
//   let equation = {
//     firstValue: $("#firstValueIn").val(),
//     secondValue: $("#secondValueIn").val(),
//   };
//   equations.push(equation);
//   $("#firstValueIn").val("");
//   $("#secondValueIn").val("");
// }

function postEquation() {
  $.ajax({
    method: "POST",
    url: "/equations",
    data: equations,
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

function getEquation() {
  $.ajax({
    method: "GET",
    url: "/equations",
  }).then(function (response) {
    console.log("response from server", response);
    appendToDom(response);
  });
}

function appendToDom(array) {
  console.log("in appendToDom", array);
  $("#output").empty();
  for (let object of array) {
    $("#output").append(`
    <li>${object.firstValue}${object.secondValue}</li>
    `);
  }
}
