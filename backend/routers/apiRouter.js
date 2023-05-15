import express from "express";
import { launchController } from "../controllers/apiController.js";

const router = express.Router();

router.route("/launch").get(launchController);

export default router;