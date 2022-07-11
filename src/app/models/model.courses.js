import mongoose from "mongoose";
import mongooseSlugGenerator from "mongoose-slug-generator";
import MongooseDelete from "mongoose-delete";
const Schema = mongoose.Schema;
const slug = mongooseSlugGenerator;

const Course = new Schema(
  {
    name: { type: String, minLength: 4 },
    description: { type: String, default: "" },
    imagePath: { type: String },
    slug: { type: String, slug: "name", unique: true },
    video: { type: String, default: "" },
    level: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
//add plugin
mongoose.plugin(slug);
Course.plugin(MongooseDelete, { deletedAt: true, overrideMethods: "all" });
export const CoursesModel = mongoose.model("Courses", Course);
