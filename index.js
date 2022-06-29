const express = require("express");
const app = express();
const port = 3000;
//Dinh nghia route
/**
 * Neu thay doi "/" thanh "trang chu" thi khi chay localhost phai them 
 * nhu sau  http://localhost:${port}/trangchu
 */
app.get("/tin-tuc", (req, res) => res.send("Hello World!"));
//listen local host tren browser
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
/**Nodemon se tu cap nhat ung dung ma khong can build lai server */