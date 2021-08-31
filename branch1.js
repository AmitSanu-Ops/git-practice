const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("An alligator approaches!");
});

app.listen(3000, () => console.log("app.js listening on port 3000!"));