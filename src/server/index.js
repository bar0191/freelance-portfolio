const
    express     = require('express'),
    logger      = require('morgan'),
    nodemailer  = require('nodemailer'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    serveStatic = express.static,
    http        = require('http'),
    dotenv      = require('dotenv'),
    router      = express.Router();

dotenv.load();

let smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

let app = express(),
    server = http.createServer(app);

app.set('port', process.env.PORT || 3001);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(serveStatic( path.resolve('build') ));

app.use(router.get('/robots.txt', (req, res) => {
    res.sendFile('robots.txt', {
        root: path.resolve('build')
    })
}));

app.use(router.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.resolve('build')
    });
}));

app.use(router.post('/send', (req, res) => {
  let mailOptions = {
    from: '"'+req.body.author+'" <'+req.body.email+'>',
    to: process.env.RECIPIENT,
    subject: 'Portfolio Message',
    text: req.body.text,
    html: '<b>'+req.body.text+'</b>'
  };

  smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}));

server.listen(app.get('port'), () => {
    console.log('Listening on: localhost:' + app.get('port'));
});
