const express = require("express");
const bodyParser = require("body-parser");

const route = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;


app.use(route);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
