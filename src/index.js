import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { __dirname } from "./dirname_format.js";
import { route } from "./router/index.js";
import connect from "./config/db/index.js";
import methodOverride from "method-override";
import { sortMiddleware } from "./app/middlewares/SortMiddleware.js";
import { handleBarsHelper } from "./helper/handlebars.js";
const app = express();
const port = 3000;
connect();
//Dinh nghia route
/**
 * Neu thay doi "/" thanh "trang chu" thi khi chay localhost phai them
 * nhu sau  http://localhost:${port}/trangchu
 */
//xu ly static file
app.use(express.static(path.join(__dirname, "resources/public")));
//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: handleBarsHelper,
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
//http logger/ log nhung request tu client
app.use(morgan("combined"));
//Routes

//app.get("/", (req, res) => res.render('home'));
// app.get("/tin-tuc", (req, res) => res.render('news'));
// app.get("/search", (req, res) => res.render('search'));
// app.post("/search", (req, res) => res.send(''));
//app.METHOD(PATH,HANDLER)
/**
 * PATH is s path on the server
 * HANDLER is the function excuted when the route is matched
 * METHOD is an HTTP request method, is lowercase
 * vi du khi truy cap vao cong 3000/new khop voi path
 * server thi khi do handler se xac nhan va tra ve response
 * bien req se cho thay nhung value lien quan den request
 * gui di cua client
 * Action ----> Dispatcher -----> Function handler
 */
/**CHO NAY NOTE LAI */
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //form data
app.use(methodOverride("_method"));
//custom middleware
app.use(sortMiddleware);
//code javascript
/*** */
//XMLHttpRequest, fetch, axios
//middleware xu ly form data (config de body ko undefined)
//listen local host tren browser
app.listen(port, () => {
  console.log(`App listening on port at http://localhost:${port}`);
});
route(app);
/**Nodemon se tu cap nhat ung dung ma khong can build lai server */
/**Template engines */
/**
 * <h1>hello</h1> vao res.send trinh duyet se tu hieu doan ma nay
 * va tra ve dung format
 * => TPEG giai quyet van de viet cac file html o mot noi khac
 */
/**
 * GET METHOD
 * Khi truy cap vao 1 website hoac click vao the <a> thi
 * browser se mac dinh su dung method get
 * req.query
 */
/**
 * Query parameters
 * vd: localhost:3000/search?q=youtube nhac&ref=nhac&author=nhlinh
 * thi khi do req se co 1 property la query va nhan vao cac gia
 * tri tren duoi dang object
 * {
 * q:"youtube nhac"
 * ref:"nhac"
 * author:"nhlinh"
 * }
 * - no ton tai trong moi method voi QP vi dac diem cua no la
 * truyen tren url
 * - thuong duoc su dung voi get method
 */
/**
 * Form default behavior
 */
/**
 * POST METHOD
 * khi su dung trong form dang nhap, client gui request
 * thi phan url se khong bi dinh kem cac tu khoa nhay cam
 * nhu mat khau, (nguoc lai GET thi su dung query parameter
 * nen se bi gui value len url).Se gui data duoi dang form data
 * - the nao co name se dinh kem url submit
 * req.body
 * no se tra ve undefined khi log body vi express chua tich hop
 * san middleware cho body ma chi cho query
 */
