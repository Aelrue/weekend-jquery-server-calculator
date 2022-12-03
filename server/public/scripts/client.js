let equations = [];

$(document).ready(onReady);

function onReady() {
  console.log("DOM loaded");
  $("submit").on("click");
}

function addEquation() {
  console.log("in addEquation");
  let equation = {
    firstValue: $("#firstValueIn").val(),
    secondValue: $("#secondValueIn").val(),
  };
  equations.push(equation);
  $("#firstValueIn").val("");
  $("#secondValueIn").val("");
  appendToDom();
}

function appendToDom(array) {
  console.log("in appendToDom", array);
  $("#output").empty();
  for (let object of array) {
    $("#output").append(`
    <li>"
    `);
  }
}
