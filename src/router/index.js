import { newRouter } from "./news.route.js";
import { siteRouter } from "./site.js";
export const route = (app) => {
  app.use("/tin-tuc", newRouter);

  app.use("/",siteRouter);
  // app.get("/tin-tuc", (req, res) => res.render("news"));
  //app.get("/search", (req, res) => res.render("search"));
  //app.post("/search", (req, res) => res.send(""));
};
