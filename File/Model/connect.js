const mongoose=require("mongoose")
// const  Uri="mongodb+srv://admin:1234@cluster0.l1ira.mongodb.net/cvraman?retryWrites=true&w=majority"
const Uri='mongodb://localhost:27017/cv_raman'
const connect=async()=>{
    try{
        await mongoose.connect(Uri,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: false })
        console.log('connect')
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports=connect