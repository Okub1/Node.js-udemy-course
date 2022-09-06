const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// DB
const sequelize = require('./utils/database');

const errorsController = require('./controllers/errors');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

// setting express global configuration value
// simillar to .env in laravel
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const apiRoutes = require('./routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// letting server use cors
app.use(cors());

// app.use('/admin', adminData);
// app.use(shopRoutes);
app.use('/api', apiRoutes);

// app.use(errorsController.get404);

app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

sequelize.sync().then(result => {
    // console.log(result);
})
.catch(err => console.log(err, '[ERROR]: app.js::sequelize.sync()'));

// visit localhost:3001 in browser
// process.env.PORT is required for heroku deployment...
// in case if there is no port assigned via env, then
// default is 3001

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});