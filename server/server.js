let express = require("express");
let app = express();
const PORT = 5001;

app.use(express.static("server/public"));
app.listen(port, function () {
  console.log("listening on port", PORT);
});
