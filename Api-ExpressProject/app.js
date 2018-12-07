const express = require('express');
const app = express();
require('dotenv').config()
let path = require('path');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/home', (req, res) => {
    res.send('home')

});

app.get('/maps', (req, res) => {
    res.render('maps', {
        key: process.env.KEY
    })
});


app.get('/youtube', (req, res) => {
    res.render('youtube', {
        key: process.env.KEY
    })
});


app.listen(3000);