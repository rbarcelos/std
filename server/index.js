var express = require('express');
var app = express();
var path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/api/rotas', (req, res) => {
    let rotas = [
        // Array of public deals here
    ];
    res.json(rotas);
})

app.get('/api/cte', (req, res) => {
    let cte = [
        // Array of Private Deals here
    ];
    res.json(cte);
})


app.use('/', express.static(__dirname + '/../distribuidora/dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../distribuidora/dist', 'index.html'))
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});

module.exports = app;