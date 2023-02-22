 const mongoose=require('mongoose')
 const url = "mongodb+srv://jooligupta2000:12345jooli@cluster0.rxpznai.mongodb.net/blogWebsite?retryWrites=true&w=majority"
const connectDB = ()=>{
    // return mongoose.connect('mongodb://127.0.0.1:27017/blogWebsite')
    return mongoose.connect(url)
    .then(()=>{
        console.log('connected successfully!...')
    })
    .catch((err)=>{
        console.log(err)
    })
}
mongoose.set('strictQuery',false);
module.exports=connectDB;