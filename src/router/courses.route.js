import express from "express";
import coursesController from "../app/controllers/CoursesCotroller.js";
export const courseRouter = express.Router();

courseRouter.get("/tao-moi", coursesController.create);
courseRouter.post("/luu-tru", coursesController.store);
courseRouter.get("/:id/chinh-sua", coursesController.edit);
courseRouter.get("/:slug", coursesController.show);
