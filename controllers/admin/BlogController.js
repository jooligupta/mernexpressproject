const BlogModel =require('../../models/Blog')
const CategoryModel =require('../../models/Category')
const ContactModel =require('../../models/Contact')
var cloudinary=require("cloudinary").v2;
cloudinary.config({
cloud_name:'dvodnqfjc',
api_key:'176388497429298',
api_secret:'WYd-P4QbMvMUScyxL0lM4iLg6GE',
//secure:true
})
class BlogController{
    static blogDisplay=async(req,res)=>{
        try{
            const data=await BlogModel.find()
            //console.log(data)
             res.render('admin/blog/display',{result:data})
        }catch(err){
            console.log(err)
        }
    }
    static createBlog=async(req,res)=>{
        try{
             res.render('admin/blog/createblog')
        }catch(err){
            console.log(err)
        }
    }
   static bloginsert=async(req,res)=>{
        try{
            //console.log(req.files.image)
            const file = req.files.image
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'blogImage'
            })
            console.log(myCloud)
        const data=new BlogModel({
                name:req.body.Name1,
                description:req.body.description,
                image:{
                   public_id:myCloud.public_id,
                      url:myCloud.secure_url,
                   },
            })
           await data.save()
           res.redirect('/admin/createBlog')//routeurl
            console.log(req.body)
            //const data=new CategoryModel({
               // cname:req.body.cname,
               //
          //  })
            console.log(data)
        }catch(err){
            console.log(err)
        } 
    }
    static viewBlog = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/blog/view',{d:data})
        }catch(err){
            console.log(err)
        }
    }
    static editBlog = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const data = await BlogModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/blog/edit',{d:data})
        }catch(err){
            console.log(err)
        }
        
    }
    static blogupdate=async(req,res)=>{
        try{
            const user=await BlogModel.findById(req.params.id)
            const imageId=user.image.public_id
           // console.log(imageId)
             await cloudinary.uploader.destroy(imageId)
           const file = req.files.image
           console.log(file)
          
         const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'blogImage'
            })
           // const file = req.files.image
           // const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
            //    folder : 'blogImage'
            //})

            
            //console.log(req.body)
            //console.log(req.params.id)
            const data=await BlogModel.findByIdAndUpdate(req.params.id,{
                name:req.body.Name1,
               description:req.body.description,
               image:{
                public_id:myCloud.public_id,
                   url:myCloud.secure_url,
                },
            })
            await data.save();
            res.redirect('/admin/blogDisplay')
        }
        catch(err){
            console.log(err);
        }
    }
    static deleteblog=async(req,res)=>{
        try{
//console.log(req.params.id)
const user=await BlogModel.findById(req.params.id)
const imageId=user.image.public_id
await cloudinary.uploader.destroy(imageId)
const data=await BlogModel.findByIdAndDelete(req.params.id)
res.redirect('/admin/blogDisplay')
        }catch(err){
            console.log(err)
        }
    }
    
}
module.exports=BlogController;