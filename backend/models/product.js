const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    name:{
        type:String,
        required: true
    },
    description: String,
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
       
    },
    category:{
        type:schema.Types.ObjectId,
        ref:"category"
    },
    available:{
        type:Boolean,
        default:true
    }

},{timestamps: true});

module.exports = mongoose.model('product', productSchema)