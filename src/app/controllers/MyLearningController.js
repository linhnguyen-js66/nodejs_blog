import { CoursesModel } from "../models/model.courses.js";
import { formatArraytoObject } from "../../utils/mongoose.config.js";
const LearningController = {
  //[GET]
  storedCourses(req, res, next) {
    //destructering js
    Promise.all([
      CoursesModel.find({}).sortable(req),
      CoursesModel.countDocumentsDeleted(),
    ])
      .then(([courses, deletedCount]) => {
        res.render("learning/stored-course", {
          courses: formatArraytoObject(courses),
          deletedCount,
        });
      })
      .catch(next);
  },
  trashCourses: (req, res, next) => {
    CoursesModel.findDeleted({})
      .then((courses) =>
        res.render("learning/trash-course", {
          courses: formatArraytoObject(courses),
        })
      )
      .catch(next);
  },
};

export default LearningController;
