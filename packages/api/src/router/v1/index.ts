import { Router } from "express";
import { MiddlwareV1 } from "./middleware";

const router = Router();

router.use(MiddlwareV1);

router.get(
  "/",
  (req, _, next) => {
    console.log(req.query);
    next();
  },
  (req, res) => {
    res.send("hello world");
  }
);

export { router as APIRouterV1 };
