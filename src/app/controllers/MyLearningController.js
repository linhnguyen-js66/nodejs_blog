import { CoursesModel } from "../models/model.courses.js";
import { formatArraytoObject } from "../../utils/mongoose.config.js";
const LearningController = {
  //ơGET]
  storedCourses(req, res, next) {
    CoursesModel.find({})
      .then((courses) => res.render("learning/stored-course",{
        courses: formatArraytoObject(courses)
      }))
      .catch(next);
  },
};

export default LearningController;
