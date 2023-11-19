const Express = require('express')
const path = require('path')
require('./connection')
const dirname = path.join(__dirname,'public')
const bodyParser = require("body-parser")
const UserData = require('./api')
const app = Express();

app.use(Express.static(dirname));
app.use(Express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(Express.static('img'));
app.set('view engine','ejs')
// app.get('/',function(req,res){
//     res.sendFile(`${dirname}/index.html`) ///for diaplaying html filesfrom nodeJs
// })
// app.get('/contact',function(req,res){
//     res.sendFile(`${dirname}/contact.html`) ///for diaplaying html filesfrom nodeJs
// })
// app.get('/skill',function(req,res){
//     res.sendFile(`${dirname}/Skills.html`) ///for diaplaying html filesfrom nodeJs
// })
// app.get('/home',function(req,res){
//     res.sendFile(`${dirname}/home.html`) ///for diaplaying html filesfrom nodeJs
// })
// app.get('/about',function(req,res){
//     res.sendFile(`${dirname}/about.html`) ///for diaplaying html filesfrom nodeJs
// })

app.get('/',function(req,res){
    res.render('index'); ///for diaplaying html filesfrom nodeJs
})
app.get('/contact',function(req,res){
    res.render('contact'); ///for diaplaying html filesfrom nodeJs
})

app.get('/about',function(req,res){
    res.render('about'); ///for diaplaying html filesfrom nodeJs
})
app.get('/home',function(req,res){
    res.render('home'); ///for diaplaying html filesfrom nodeJs
})
app.post('/form',async function(req,res){
    try{
     let data = new UserData(req.body);
    const result = await data.save(); ///save data in Employee Document
    res.send(result); 
    res.status(201).render('home')///for diaplaying html filesfrom nodeJs
    }catch(error){
        res.status(500).send(error)
    }
})

app.listen(8000);