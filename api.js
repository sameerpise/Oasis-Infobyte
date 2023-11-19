const EMp = require('mongoose')
var validator = require('validator');

const EmployeeScheema = EMp.Schema({

    uname:{type:String,default:'hahaha',match:/[a-z]/},

    umail:{type:String,required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("invalid email")
            }
        },
        default:'hahaha',match:/[a-z]/},

    mob:{type:Number,required:true,min:10},
    select:{type:String,default:10},
    message:{type:String,default:'hahaha',match:/[a-z]/},
  /// format for inputs like name,string,age and deptno //

})
module.exports = EMp.model('Users',EmployeeScheema);