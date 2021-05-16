const express = require('express');
const chalk = require('chalk'); //Enables us to set colors on error/console messages
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8000;
const app = express();

// Loading Static Assets
app.use(morgan('tiny')); // HTTP request logging middleware for Node 
app.use(express.static(path.join(__dirname, "/public/"))); // Tells express this is where we are keeping out static files

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
// Finish Loading Static Assets

app.set('views', './src/views');
app.set('view engine', 'pug'); // When express looks for a package to use, it will look for PugJS

app.get('/', (req, res) => {
    res.render('index', { title: 'Express Application' }); //I am going to render a view called "index", pass that 'index' file an object
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "/views", "/index.html")); //__dirname = location of current excecutable
// });

app.listen(PORT, () => {
    console.log(`Running on port:  ${chalk.green(PORT)}`);
});