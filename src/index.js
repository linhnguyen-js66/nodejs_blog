const express = require("express");
const morgan = require("morgan")
const app = express();
const port = 3000;
const handlebars = require("express-handlebars")
//Dinh nghia route
/**
 * Neu thay doi "/" thanh "trang chu" thi khi chay localhost phai them 
 * nhu sau  http://localhost:${port}/trangchu
 */

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


//http logger/ log nhung request tu client
app.use(morgan('combined'))
app.get("/trang-chu", (req, res) => res.render('home'));
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