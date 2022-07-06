import { CoursesModel } from "../models/model.courses.js";
import { formatArraytoObject } from "../../utils/mongoose.config.js";
const SiteController = {
  // GET / news
  index: (req, res, next) => {
    CoursesModel.find({})
      .then((courses) =>
        res.render("home", { courses: formatArraytoObject(courses) })
      )
      .catch(next);
  },
  search: (req, res) => {
    res.render("search");
  },
};

export default SiteController;
