import {Schema, model} from "mongoose";

const taskSchema = new Schema({
    name: String,
    category: String,
    description: String,
    
    },{
        timestamps:true,
        versionKey:false
    })

    export default model ('Task', taskSchema)
