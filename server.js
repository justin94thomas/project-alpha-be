const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const corsOptions = require('./config/cors');

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }))


// File Routes
app.use('/', require("./router/index"))

app.listen(PORT, () => { console.log(`Server Port: ${PORT}`) })