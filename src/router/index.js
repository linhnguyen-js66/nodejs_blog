import { newRouter } from "./news.route.js";
import { siteRouter } from "./site.js";
import { courseRouter } from "./courses.route.js";
export const route = (app) => {
  app.use("/tin-tuc", newRouter);
  app.use("/khoa-hoc", courseRouter);
  app.use("/", siteRouter);
};
