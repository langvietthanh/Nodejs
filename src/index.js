const path = require('path');
const express = require('express')
const { engine: handlebars } = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'\\resources\\views'));

// console.log(path.join(__dirname,'/resources/views')) 

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})