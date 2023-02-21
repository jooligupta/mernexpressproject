const mongoose=require('mongoose')
//define Schema
const ContactSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},password:{
    type:String,
    required:true,
},
message:{
    type:String,
    required:true,
}

})
const ContactModel=mongoose.model('contact',ContactSchema)
module.exports=ContactModel;