import { Schema, Model } from "mongoose";
const user = new Schema({
    username:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    roles:[]
})