import { CoursesModel } from "../models/model.courses.js";
import { formatObject } from "../../utils/mongoose.config.js";
const CoursesController = {
  show: (req, res, next) => {
    CoursesModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {course: formatObject(course)});
      })
      .catch(next);
  },
  // [POST] /courses/store
  create: (req,res,next) => {
    res.render("courses/create")
  },
  store: (req,res,next) => {
    //  const formData = req.body;
    //  formData.imagePath= `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`
    //  const course = new Course(req.body);
    //  course.save(); 
     res.send('COURSE SAVED')
  }
};

export default CoursesController;
