import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/rajtaskdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db is connect'))
    .catch(error => console.log(error))