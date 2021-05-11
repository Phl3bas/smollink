import express from "express";
import cors from "cors";

export const GlobalMiddlewares = [
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
];
