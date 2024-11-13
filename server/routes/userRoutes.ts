import express from "express";
import { clerkWebhook } from "../controllers/userController";

const router = express.Router();

router.post("/webhooks", clerkWebhook);

export default router;
