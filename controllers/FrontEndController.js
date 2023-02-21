const BlogModel =require('../models/Blog')
class FrontEndController{
 static home=async(req,res)=>{
    try{
        const blogs=await BlogModel.find()
        //console.log(blogs)
      
        res.render('Front/home',{b:blogs})
    }catch(err){
        console.log(err)
    }
 }
 static about=async(req,res)=>{
    try{
        res.render('Front/about')
    }catch(err){
        console.log(err)
    }
 }
 static blogDetail=async(req,res)=>{
    try{
        const data=await BlogModel.findById(req.params.id)

        res.render('Front/blogDetail',{result:data})
    }catch(err){
        console.log(err)
    }
 }
 static ourteam=async(req,res)=>{
    try{
        res.render('Front/ourteam')
    }catch(err){
        console.log(err)
    }
 }
 static login=async(req,res)=>{
    try{
        res.render('Front/login')
    }catch(err){
        console.log(err)
    }
 }
 static contactus=async(req,res)=>{
    try{
        res.render('Front/contactus')
    }catch(err){
        console.log(err)
    }
 }
 static blogdetail=async(req,res)=>{
    try{
        res.render('Front/blogdetail')
    }catch(err){
        console.log(err)
    }
 }
}
module.exports=FrontEndController;