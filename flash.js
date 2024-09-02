const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    flash = require('connect-flash');

const host = '127.0.0.1';
const port = 7000;

app.use(cookieParser('secret key'));
app.use(session({ cookie: { maxAge: 3600 * 24 } }));
app.use(flash());

app.get('/get-flash', (req, res) => {
    console.log('Flash: ', req.flash('message'));
    res.send('Get Flash');
});

app.get('/set-flash', (req, res) => {
    req.flash('message', { from: 'Me', to: 'You' });
    req.flash('warning', 'Important!');
    res.send('Set Flash');
});

app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);