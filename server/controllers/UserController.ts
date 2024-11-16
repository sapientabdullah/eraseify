import { Webhook } from "svix";
import { Request, Response } from "express";
import userModel from "../models/user";

const clerkWebhook = async (req: Request, res: Response) => {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET is not defined");
    }

    const webhook = new Webhook(webhookSecret);

    await webhook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email,
          first_name: data.first_name,
          last_name: data.last_name,
          photo: data.image_url,
        };
        await userModel.create(userData);
        res.json({ success: true });
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email,
          first_name: data.first_name,
          last_name: data.last_name,
          photo: data.image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({ success: true });
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({ success: true });
        break;
      }
      default: {
        console.log(`Unhandled webhook type: ${type}`);
        res
          .status(400)
          .json({ success: false, message: `Unhandled event type: ${type}` });
        break;
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      res.status(400).json({ success: false, error: err.message });
    } else {
      console.log(String(err));
      res.status(400).json({ success: false, error: "Unknown error" });
    }
  }
};

export { clerkWebhook };
