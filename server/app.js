let express=require('express');
let app=express();


let bodyParser=require('body-parser');
let morgan=require('morgan');

let fs=require('fs');
let logger=require('morgan');
let path=require('path');

let api=require('./routes/api');
let http=require('http');
let cors=require('cors');



let port=3003;
app.use(cors());
let accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})
app.use(logger('combined',{stream: accessLogStream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', api);



app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
})
module.exports=app;
