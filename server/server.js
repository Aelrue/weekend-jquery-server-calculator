// set up Express with JS

let express = require("express");
let app = express();
const port = 5001;

// setup express.static files
app.use(express.static("server/public"));
app.use(express.urlencoded());

// empty array for results
const equations = [];

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/equations", function (req, res) {
  console.log("request for /equations made");
  res.send(equations);
});

app.post("/equations", function (req, res) {
  console.log("in post request");
  equations.push(req.body);
  res.sendStatus(201);
});
