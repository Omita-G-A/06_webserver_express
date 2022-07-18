require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Omi González',
        titulo: 'curso NODE.js'
    });
});


app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Omi González',
        titulo: 'curso NODE.js'
    })
});

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Omi González',
        titulo: 'curso NODE.js'
    })

});

app.listen(port, ()=>{
    console.log(`App escuchando en puerto ${port}`);
});