const mongoose = require('mongoose');
const post = new mongoose.Schema(

    {
        name:{
            type: String,
            require: true
        },
        edad:{
            type:Number,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    })

const Modelusu = mongoose.model("Prueba_API", post);
module.exports = Modelusu;
