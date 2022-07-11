import express from "express";
import LearningController from "../app/controllers/MyLearningController.js";
export const learningRouter = express.Router();

learningRouter.get("/luu-tru", LearningController.storedCourses);
learningRouter.get("/thung-rac/khoa-hoc", LearningController.trashCourses);

