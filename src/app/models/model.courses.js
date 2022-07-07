import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, minLength: 4 },
  description: { type: String, default: "" },
  imagePath: { type: String },
  slug: { type: String, default: "" },
  videoId: { type: String, default: "" },
  level: { type: String, default: "" },
},{
    timestamps: true,
});
export const CoursesModel = mongoose.model("Courses", Course);
