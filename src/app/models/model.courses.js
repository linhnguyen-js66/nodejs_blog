import mongoose from "mongoose";
import mongooseSlugGenerator from "mongoose-slug-generator";
import MongooseDelete from "mongoose-delete";
import Inc from 'mongoose-sequence'
const Schema = mongoose.Schema;
const slug = mongooseSlugGenerator;
const AutoIncrement = Inc(mongoose);
const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, minLength: 4 },
    description: { type: String, default: "" },
    imagePath: { type: String },
    slug: { type: String, slug: "name", unique: true },
    video: { type: String, default: "" },
    level: { type: String, default: "" },
  },
  {
    _id: false,
    timestamps: true,
  }
);
//custom query helpers
Course.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query?.column]: isValidType ? req.query?.type : "desc",
    });
  }
  return this;
};
//add plugin
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(MongooseDelete, { deletedAt: true, overrideMethods: "all" });
export const CoursesModel = mongoose.model("Courses", Course);
