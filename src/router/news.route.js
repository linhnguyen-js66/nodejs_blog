import express from 'express';
import newController from '../app/controllers/NewController.js'
export const newRouter = express.Router();

newRouter.use("/:slug", newController.show)
newRouter.use("/", newController.index)