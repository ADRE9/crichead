const express = require('express');

const app = express();

//Serve static assets if in Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("APP IS RUNNING ON PORT " + PORT);
});