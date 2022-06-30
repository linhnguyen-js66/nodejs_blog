import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import {__dirname} from './dirname_format.js'
const app = express();
const port = 3000;
//Dinh nghia route
/**
 * Neu thay doi "/" thanh "trang chu" thi khi chay localhost phai them 
 * nhu sau  http://localhost:${port}/trangchu
 */
//xu ly static file
app.use(express.static(path.join(__dirname,'resources/public')))
//template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))
//http logger/ log nhung request tu client
app.use(morgan('combined'))
app.get("/trang-chu", (req, res) => res.render('home'));
app.get("/tin-tuc", (req, res) => res.render('news'));
//listen local host tren browser
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
/**Nodemon se tu cap nhat ung dung ma khong can build lai server */
/**Template engines */
/**
 * <h1>hello</h1> vao res.send trinh duyet se tu hieu doan ma nay
 * va tra ve dung format
 * => TPEG giai quyet van de viet cac file html o mot noi khac
 */