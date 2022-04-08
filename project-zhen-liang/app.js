const express = require("express");
const app = express();

const connection = require('./db/connection.js');

connection
.then(()=>{
    console.log("connected!");
    const server = app.listen(8080, ()=>console.log("Listening"));
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = require("./routes/index.js");

// const router = require("./routes/index.js");
app.use('/api/v1',router);



