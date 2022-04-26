import express, { Application } from "express";
import mongoose from "mongoose"
import * as http from "http";

const {DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD} = process.env;

const DB_URL = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}`

const app = express();


export default class Server {
  router(routes: (app: Application) => void) {
    routes(app);
    return this;
  }
  listen(port: number): Application {
    http.createServer(app).listen(port,  async () => {
      try {
        await mongoose.connect(DB_URL, {
            seNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log("Database connected")
        console.log(`Server running at port:${port}`);
        
      } catch (error) {
        console.error(error)
      }
    });
    return app;
  }
}
