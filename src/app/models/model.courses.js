import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
    name:{type:String, minLength: 4},
    description: {type: String, default: ""},
    imagePath: {type: String},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
})
export const CoursesModel = mongoose.model('Courses',Course)
