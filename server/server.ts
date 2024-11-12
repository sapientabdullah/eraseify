import "dotenv/config";
import express from "express";
import cors from "cors";
import connect from "./configs/mongodb";

const PORT = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
  await connect();

  app.use(express.json());
  app.use(cors());

  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("API functional");
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();