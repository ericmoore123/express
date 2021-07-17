const express = require('express');
const chalk = require('chalk'); //Enables us to set colors on error/console messages
const morgan = require('morgan');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config(); //Inititalize dotenv and enable environment variable usage
const PORT = process.env.PORT || 8000;

// Load in static data
const pageData = require('./public/data/staticData');

// Define site wide "Nav" component objects
const nav = [
    {link: '/home', title: 'Home'},
    {link: '/books', title: "Books"},
    {link: '/authors', title: "Authors"}
];

// SQL Database dependencies
const mssql = require('mssql');
const config = {
    user: 'ericmoore123', 
    password: process.env.PASSWORD,
    server: 'ps-library.database.windows.net',
    database: 'PSLibrary',

    options: {
        encrypt: true 
    }
};
mssql.connect(config).catch(err => console.error(err));

const bookRouter = require('./routes/booksRouter'); //Include Booksrouter.js file
const authorRouter = require('./routes/authorsRouter'); //Include Authorsrouter.js file
const homeRouter = require('./routes/homeRouter'); //Include HomeRouter.js file

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
app.use('/home', homeRouter(nav, pageData));
app.use('/books', bookRouter(nav, pageData)); //pass navbar to router
app.use('/authors', authorRouter(nav, pageData)); //pass navbar to router

app.listen(PORT, () => {
    console.log(`Running on port:  ${chalk.red(PORT)}`);
});