const express = require('express');
let api = express.Router();

api.get('/', function(req, res, next) {
    res.render('index', { title: 'PicUp' });
});

module.exports = api;