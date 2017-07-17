const
    express     = require('express'),
    logger      = require('morgan'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    serveStatic = express.static,
    http        = require('http'),
    router      = express.Router();


let app = express(),
    server = http.createServer(app);


app.set('port', process.env.PORT || 3001);

// setup some middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(serveStatic( path.resolve('build') ));


// use of express router example.
app.use(router.get('/robots.txt', (req, res) => {
    res.sendFile('robots.txt', {
        root: path.resolve('build')
    })
}));

app.use(router.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.resolve('build')
    });
}))

server.listen(app.get('port'), () => {
    console.log('Listening on: localhost:' + app.get('port'));
});
