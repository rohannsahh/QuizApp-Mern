import mongoose from "mongoose";
const {Schema}= mongoose;


const resultModel = new Schema({
    username :{ type: string},
    result: { type: Array, default :[]},
    attempts : {type: Number ,default :0},
    points : {type: Number ,default :0},
    achieved: {type: string ,default:''},
    createAt : {type: Date, default :Date.now}
})

export default mongoose.model('result',resultModel);