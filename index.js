const express = require('express');
const cookieParser =  require('cookie-parser');

const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use('/', require("./routes/index"));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err)
        console.log(`Error in running server due to ${port}`);
    console.log(`Server is running on port ${port}`);
})