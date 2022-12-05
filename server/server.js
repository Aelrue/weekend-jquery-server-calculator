// set up Express with JS

let express = require("express");
let app = express();
const port = 5001;

// setup express.static files
app.use(express.static("server/public"));
app.use(express.urlencoded());

// empty array for results
const equationHistory = [];

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/equations", function (req, res) {
  console.log("request for /equations made", req.body);
  res.send(equationHistory);
});

app.post("/equations", function (req, res) {
  console.log("in post request");

  const equation = req.body;
  console.log(equation);
  const num1 = Number(equation.firstValue);
  const num2 = Number(equation.secondValue);

  switch (equation.symbol) {
    case "+":
      equation.result = num1 + num2;
      break;
    case "-":
      equation.result = num1 - num2;
      break;
    case "*":
      equation.result = num1 * num2;
      break;
    case "/":
      equation.result = num1 / num2;
      break;
  }

  equationHistory.push(equation);
  res.sendStatus(201);
});
