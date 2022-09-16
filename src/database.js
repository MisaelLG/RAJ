import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/rajdb')
    .then(db => console.log('db is connect'))
    .catch(error => console.log(error))