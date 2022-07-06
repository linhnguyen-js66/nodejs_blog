import { newRouter } from './news.route.js';
import { siteRouter } from './site.js';
export const route = (app) => {
  app.use('/tin-tuc', newRouter);
  app.use('/', siteRouter);
};
