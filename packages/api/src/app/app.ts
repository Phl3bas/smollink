import express from "express";
import { GlobalMiddlewares } from "../middleware/GlobalMiddleware";
import { APIRouterV1 } from "../router/v1";

const app = express();

app.use(GlobalMiddlewares);
app.use("/v1", APIRouterV1);

export { app };
