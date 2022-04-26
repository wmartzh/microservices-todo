import { Application } from "express";

export default function routes(app: Application): void {
  app.use("/", (req, res, next) => {
    res.send("Hello from todos server");
  });
}
