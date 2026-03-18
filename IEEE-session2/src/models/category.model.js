
// require mongoose
const mongoose = require('mongoose');


// create my schema


const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "name is required"],
        minLength : [3 , "too short category name"],
        maxLength : [32 , "too long category name"]
    },
    // A B → a-b
    slug : {
        type : String,
        lowercase : true,
        required : true
    },
    image : {
        type : String
    }
} ,{timestamps : true} )



// modeling your schema

const categoryModel = mongoose.model('Category' , categorySchema);


// export
module.exports = categoryModel;