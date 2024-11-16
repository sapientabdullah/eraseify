import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Token not found" });
    }

    const decoded = jwt.decode(token);
    req.body.clerkId = decoded.clerkId;
    next();
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      res.json({ success: false, message: err.message });
    } else {
      console.log("Unknown error");
      res.json({ success: false, message: "Unknown error" });
    }
  }
};

export default authUser;
