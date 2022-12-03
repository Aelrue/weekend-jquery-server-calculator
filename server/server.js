let express = require("express");
let app = express();
const port = 5001;

app.use(express.static("server/public"));
app.listen(port, () => {
  console.log("listening on port", port);
});
