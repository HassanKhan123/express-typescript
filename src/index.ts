import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controllers/loginController";

import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["auth"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("SERVER STARTED");
});
