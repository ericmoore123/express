const express = require('express');
const chalk = require('chalk'); //Enables us to set colors on error/console messages
const morgan = require('morgan');
const path = require('path');

//Import Router
const router = require('./routes/router')

const dotenv = require('dotenv');
dotenv.config(); //Inititalize dotenv
const PORT = process.env.PORT || 8000;

// Initialize Express
const app = express();

app.use(morgan('tiny')); // HTTP request logging middleware for Node 

// Loading Static Assets
app.use(express.static(path.join(__dirname, "/public/"))); // Tells express this is where we are keeping out static files
// __dirname returns the path of the folder in which the current js file is stored i.e: `\express\app.js`

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
// Finish Loading Static Assets

app.set('views', './src/views');
// app.set('view engine', 'pug'); // When express looks for a package to use, it will look for PugJS or EJS
app.set('view engine', 'ejs'); 

// Setup main route as '/', and send it to router.js file
app.use('/app', router);

// app.get('/', (req, res) => {
//     res.render('index', { title: 'Hello, World!', welcome: 'Welcome to my Express and NodeJS project landing page. This page uses PugJS for its HTML templating engine.' }); //I am going to render a view called "index", pass that 'index' file an object
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "/views", "/index.html")); //__dirname = location of current excecutable
// });

app.listen(PORT, () => {
    console.log(`Running on port:  ${chalk.red(PORT)}`);
});