import mongoose from "mongoose";
const URL= 'mongodb+srv://admin:admin123@cluster0.yy2ux3c.mongodb.net/?retryWrites=true&w=majority';



const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB connected');
}).catch(err=>{
    console.log('error in db connection' ,err);
})

export default mongoose;