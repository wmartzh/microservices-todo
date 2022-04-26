import express, { Application } from "express";

import * as http from "http";

const app = express();

export default class Server {
  router(routes: (app: Application) => void) {
    routes(app);
    return this;
  }
  listen(port: number): Application {
    http.createServer(app).listen(port, () => {
      console.log(`Server running at port:${port}`);
    });
    return app;
  }
}
