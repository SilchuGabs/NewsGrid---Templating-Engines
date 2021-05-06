/**========================================================================
 * ?                                ABOUT
 * @author         :  Silvana G F
 * @email          :  reactiveprogrammer@gmail.com
 * @repo           :  
 * @createdOn      :  
 * @description    :  NodeJS using Templating Engines
 *========================================================================**/

/* ----------------------------- Global Imports ----------------------------- */

const path = require('path')
const PORT = 3000;
const express = require('express')
const app = express();

/* --------------------------- 3rd parties imports -------------------------- */
const hbs = require('hbs');

/* --------------------- Define paths for Express config -------------------- */

const publicDirectoryPath = path.join(__dirname, '/public');
const viewsPaths = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials');

/* ----------------  SetupHadlebars engine and views location ---------------- */

//*Set allows us to tell Express witch Templating engine we have installed. This is a method obviously.
//'view engine' needs to be set exactly. Value = name of the module we have installed. 
app.set('view engine', 'hbs');
//*In order for it to work I had to set the correct path
app.set('views', viewsPaths);
//*This configuration takes the path where the partials live and handler module need. 
hbs.registerPartials(partialsPath);

/**
 *  NOTE: Setup static directory to serve
 *  I could set up different routers for each of the handlers. 
 * That was done in another Public Git Repository : see "Website---Pure-CSS"
 *  Here the main interest is the use of Templates. 
 *  
 **/

app.get('/', (req, res) => {
    res.render('index', {
        homeClass: 'current',
        aboutClass: ''
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        homeClass: '',
        aboutClass: 'current'
    })
})

app.get('/article', (req, res) => {
    res.render('article', {
        homeClass: '',
        aboutClass: '',
        articles: []
    })
})

app.use(express.static(publicDirectoryPath));

app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })