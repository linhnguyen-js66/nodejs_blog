import express from 'express';
import siteController from '../app/controllers/SiteController.js';
export const siteRouter = express.Router();

siteRouter.get('/search', siteController.search);
siteRouter.get('/', siteController.index);
