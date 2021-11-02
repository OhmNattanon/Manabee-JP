require("dotenv").config();
require("./middleware/passport");

const express = require("express");
const app = express();
const cors = require("cors");
const DB = require("./models");
const user_route = require("./route/user_route");
const course_route = require("./route/course_route");
// const flash = require("express-flash");
// const session = require("express-session");

app.use(express());
app.use(express.json());
app.use(cors());
// app.use(flash());
// app.use(
//   session({
//     secret: process.env.ACCESS_SECRET_TOKEN,
//   })
// );

app.use("/user", user_route);
app.use("/course", course_route);

// DB.sequelize.sync();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server running on port 8080");
});
