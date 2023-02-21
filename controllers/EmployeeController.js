class EmployeeController{
    static home=async(req,res)=>{
        res.send('home')
    }
    static about=async(req,res)=>{
        res.render('about')
    }
    static ourteam=async(req,res)=>{
        res.send('ourteam')
    }
    static contactus=async(req,res)=>{
        res.send('contactus')
    }
    static login=async(req,res)=>{
        res.send('login')
    }
}
module.exports=EmployeeController;