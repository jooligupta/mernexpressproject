const mongoose=require('mongoose')
//define Schema
const CategorySchema = new mongoose.Schema({
cname:{
    type:String,
    required:true,
}

},{timestamps:true})
const CategoryModel=mongoose.model('categories',CategorySchema)
module.exports=CategoryModel;