import express from 'express';
import newController from '../app/controllers/NewController.js';
export const newRouter = express.Router();

newRouter.get('/:slug', newController.show);
newRouter.get('/', newController.index);
