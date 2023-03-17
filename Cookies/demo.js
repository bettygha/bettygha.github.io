const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
    secret: "thisismysecretkey",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.use(cookieParser());

const myusername = 'user1';
const mypassword = 'password1';

var session;

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("Welcome user <a href=\'/logout'>Click to logout</a>");

    }
    else {
        res.sendFile('views/LoginForm.html', { root: __dirname })
    }
});
app.post('/user', (req, res) => {
    if (req.body.username == myusername &&
        req.body.password == mypassword) {
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.send(
            `Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else {
        res.send('Invalid username or password');
    }
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
// start the server
app.listen(3000,
    () => console.log(`Server Running at port 3000`));