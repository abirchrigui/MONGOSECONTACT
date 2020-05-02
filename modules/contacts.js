const mongoose=require('mongoose');
const Schema = mongoose.Schema ;

const ContactSchema = new Schema (
    {
        name:{
            type:String,
            required : true
        },
        phone:{
            type:Number,
            required : true
        },
        mail:{
            type:String,
            required : true
        }
    }
)

module.exports=Contact=mongoose.model("contact", ContactSchema)

