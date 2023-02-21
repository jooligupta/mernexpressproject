const CategoryModel = require("../../models/Category")

class CategoryController{
    static createcategory=async(req,res)=>{
try{
res.render("admin/category/createcategory")
}catch(err){
    console.log(err)
}
    }
    static categoryInsert=async(req,res)=>{
        try{
            const result= new CategoryModel({
                cname:req.body.cname,
              

            })
            await result.save()
            res.redirect('/admin/createcategory')//routeurl
             console.log(req.body)
        }catch(err){
            console.log(err)
        } 
    }
    static viewcategory = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const data = await CategoryModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/category/viewcategory',{d:data})
        }catch(err){
            console.log(err)
        }
    }
    static editcategory = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const data = await CategoryModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/category/editcategory',{d:data})
        }catch(err){
            console.log(err)
        }
        
    }
    static categoryupdate=async(req,res)=>{
        try{
            //console.log(req.body)
            //console.log(req.params.id)
            const updateData=await CategoryModel.findByIdAndUpdate(req.params.id,{
                cname:req.body.cname,
                //description:req.body.description
            })
            await updateData.save();
            res.redirect('/admin/categorydisplay')
        }
        catch(err){
            console.log(err);
        }
    }
    static categoryDisplay=async(req,res)=>{
        try{
            const data=await CategoryModel.find()
            console.log(data)
             res.render('admin/category/categorydisplay',{result:data})
        }catch(err){
            console.log(err)
        }
    }
    static deletecategory=async(req,res)=>{
        try{
console.log(req.params.id)
const deletecategory=await CategoryModel.findByIdAndDelete(req.params.id)
res.redirect('/admin/Categorydisplay')
        }catch(err){
            console.log(err)
        }
    }
}
module.exports=CategoryController;
