import mongoose from "mongoose";
import mongooseSlugGenerator  from "mongoose-slug-generator";
const Schema = mongoose.Schema;
const slug = mongooseSlugGenerator;
mongoose.plugin(slug)
const Course = new Schema({
  name: { type: String, minLength: 4 },
  description: { type: String, default: "" },
  imagePath: { type: String },
  slug: { type: String, slug:"name", unique: true },
  video: { type: String, default: "" },
  level: { type: String, default: "" },
},{
    timestamps: true,
});
export const CoursesModel = mongoose.model("Courses", Course);
