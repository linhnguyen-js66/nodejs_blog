import { CoursesModel } from "../models/model.courses.js";
import { formatObject } from "../../utils/mongoose.config.js";
const CoursesController = {
  show: (req, res, next) => {
    CoursesModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: formatObject(course) });
      })
      .catch(next);
  },
  // [POST] /courses/store
  create: (req, res, next) => {
    res.render("courses/create");
  },
  store: (req, res, next) => {
    const formData = req.body;
    formData.imagePath = `https://img.youtube.com/vi/${req.body.video}/sddefault.jpg`;
    const course = new CoursesModel(formData);
    course
      .save()
      .then(() => res.redirect("/my-learning/luu-tru"))
      .catch((err) => {});
  },
  edit: (req, res) => {
    CoursesModel.findById(req.params.id).then((course) =>
      res.render("courses/edit", {
        course: formatObject(course),
      })
    );
  },
  update: (req, res, next) => {
    CoursesModel.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/my-learning/luu-tru"))
      .catch(next);
  },
  delete: (req, res, next) => {
    CoursesModel.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  },
  forceDelete: (req, res, next) => {
    CoursesModel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  },
  restore: (req, res, next) => {
    CoursesModel.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  },
};

export default CoursesController;
