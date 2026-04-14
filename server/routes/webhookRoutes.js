
import express from "express";
import { handleClerkWebhook } from "../controllers/webhookController.js";

const webhookRoute = express.Router();
webhookRoute.post("/clerk", handleClerkWebhook);

export default webhookRoute; 