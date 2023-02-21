const mongoose=require('mongoose')
//define Schema
const BlogSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
},{timestamps:true})
const BlogModel=mongoose.model('blogs',BlogSchema)
module.exports=BlogModel;