// const { error } = require('jquery');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Databse',{

}).then(()=>{
    console.log("connection sucessfull")
}).catch((error)=>{
    console.log(error)
})