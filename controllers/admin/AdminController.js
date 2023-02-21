class AdminController{
static dashboard=async(req,res)=>{
    try{
      res.render('admin/dashboard')
    }
    catch(err){
        console.log(err)
    }
}
}
module.exports=AdminController;