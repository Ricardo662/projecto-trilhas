const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const trilhasRoutes = require("./routes/trilhas")

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", trilhasRoutes);


//routes

app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongoose connection

mongoose.connect(process.env.KEY_URI)
.then(()=> console.log("Connected to MongoBD Atlas"))
.catch((error) => console.error(error))


app.listen(port, () => console.log ("server listening on port", port));