const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

app.use(express.static('./build/'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());

app.listen(3001,() => {
    console.log('App running now: http://localhost:3001');
});
