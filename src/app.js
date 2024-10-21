import express from "express";
import session from "express-session";
import passport from "passport";
const app = express();

const PORT = process.env.PORT || 3000;

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`Server  is running on http://localhost:${PORT} `);
});
