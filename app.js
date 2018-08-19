var express =  require('express');
var hbs = require('hbs');
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('GetYear30',(year)=>{
    return year+30;
});
app.set('view engine','hbs');
//serve static files
app.use(express.static(__dirname+'/public'));



console.log(__dirname);
app.get('/',(req,res)=>{

    res.render('home.hbs',{year:new Date().getFullYear()});
});
app.get('/about',(req,res)=>{

    res.render('about.hbs',{year:new Date().getFullYear()});
});
app.listen(3000,()=>{
    console.log('app is running on port 3000');
});