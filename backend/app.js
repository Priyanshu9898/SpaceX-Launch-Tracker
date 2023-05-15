import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import launchRouter from "./routers/apiRouter.js";

//config configuration
dotenv.config({ path: "./config/config.env" });

const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(morgan("dev"));

// Routers
app.use("/api/v1", launchRouter);

app.get("/" , (req, res) => {
    res.send("<h1>Hello World</h1>")
})  

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});