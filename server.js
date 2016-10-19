/**
 * Created by rishabh on 18/10/16.
 */


const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/public'))


app.listen(4200, (req, res) => {
    console.log('Server started at http://localhost:4200/');
})