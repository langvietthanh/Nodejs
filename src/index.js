const path = require('path');
const express = require('express')
const { engine: handlebars } = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./routes');
const db = require('./config/db/index')

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources', 'views'));

// Connect DB 
db.connect();
 
// Routes init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})