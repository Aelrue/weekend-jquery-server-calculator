$(document).ready(onReady);
// event handlers for each button click
function onReady() {
  console.log("DOM loaded");
  $("#plus").on("click", appendToDom);
  $("#minus").on("click", appendToDom);
  $("#multiply").on("click", appendToDom);
  $("#divide").on("click", appendToDom);
  $("#submit").on("click", appendToDom);
  $("#reset").on("click", appendToDom);
  getEquation();
}

// let equations = {
//   firstValue: $("#firstValueIn").val(),
//   secondValue: $("#secondValueIn").val(),
// };

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

// telling ajax to bring these values to the server
function postEquation() {
  $.ajax({
    method: "POST",
    url: "/equations",
    data: {
      firstValue: $("#firstValueIn").val(),
      secondValue: $("#secondValueIn").val(),
    },
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
