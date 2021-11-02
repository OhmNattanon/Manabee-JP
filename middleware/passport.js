// const bcrypt = require("bcrypt");

// const LocalStrategy = require("passport-local").Strategy;

// function initialize(passport, getUserByUsername, getUserbyId) {
//   const authenUser = async (username, password, done) => {
//     const user = getUserByUsername(username);
//     if (!user) {
//       return done(null, false, { message: "Username is not found" });
//     }
//     try {
//       if (await bcrypt.compare(password, thisUser.password)) {
//         return done(null, thisUser);
//       } else {
//         return done(null, false, { message: "incorrect password" });
//       }
//     } catch (error) {
//       return done(error);
//     }
//   };
//   passport.use(
//     new LocalStrategy(
//       {
//         usernameField: "username",
//         passwordField: "password",
//       },
//       authenUser
//     )
//   );
//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserbyId(id));
//   });
// }

// module.exports = initialize;
