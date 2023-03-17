const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


const oneDay = 1000 * 60 * 60 * 24;
app.use(express.urlencoded({ extended: false }));
app.use(sessions({

    secret:'mysecretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:oneDay},
})); 


const questions = [
    "1) 1,1,2,3,5",
    "2) 1,4,9,16,25",
    "3) 2,3,5,7,11",
    "4) 1,2,3,8,16"
]
const ans = [9,36,13,32];
let num ;
let numbers ;
let score;
let count;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    if (!req.session.userScore && !req.session.questionNum) {
        req.session.userScore = 0;
        req.session.questionNum = 0;
        num = req.session.questionNum;
        count = req.session.userScore;
        numbers = questions[num];
        num = num +1;
        req.session.questionNum = num;
        console.log("I am a new client"+req.session.userScore);
        res.render('quiz', {
            question: numbers,
            score: count
        })
    }
    else if(req.session.questionNum >= 4){
        console.log("Try again")
        req.session.userScore = 0;
        req.session.questionNum = 0;
        num = req.session.questionNum;
        count = req.session.userScore;
        numbers = questions[req.session.questionNum];
        num = num +1;
        req.session.questionNum = num;
        res.render('quiz', {
            question: numbers,
            score: count
        })
    }
    else{
    num = req.session.questionNum;
    count = req.session.userScore;
    numbers = questions[req.session.questionNum];
    num = num +1;
    req.session.questionNum = num;
    res.render('quiz', {
        question: numbers,
        score: count
    })}
});

app.post('/next', (req, res) => {
    let userans = req.body.answer;
    console.log("I am a ee client"+req.session.userScore);

    if(parseInt(userans) == ans[req.session.questionNum-1] ){
        count = count + 1;
        req.session.userScore  = count;
    }
    
    if(req.session.questionNum < questions.length){
        numbers = questions[req.session.questionNum];
        num = num + 1;
        req.session.questionNum = num;

        res.render('quiz', {
            question: numbers,
            score: req.session.userScore
        })
       
    } else {
        console.log("You have finished the quiz" + req.session.questionNum);
        //req.session.questionNum = num;
        res.render('final', {
            score: req.session.userScore
        })
    }
});


app.listen(3000);
