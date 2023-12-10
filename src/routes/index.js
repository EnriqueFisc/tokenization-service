const app = require('express')();


app.use( '/token', require('./create') );
app.use( '/token', require('./validate') );

module.exports = app;