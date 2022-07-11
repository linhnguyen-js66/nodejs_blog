import express from "express";
import coursesController from "../app/controllers/CoursesCotroller.js";
export const courseRouter = express.Router();

courseRouter.get("/tao-moi", coursesController.create);
courseRouter.post("/luu-tru", coursesController.store);
courseRouter.get("/:id/chinh-sua", coursesController.edit);
courseRouter.put("/:id", coursesController.update);
courseRouter.patch("/:id/khoi-phuc", coursesController.restore);
courseRouter.delete("/:id", coursesController.delete);
courseRouter.delete("/:id/force", coursesController.forceDelete);
courseRouter.get("/:slug", coursesController.show);
