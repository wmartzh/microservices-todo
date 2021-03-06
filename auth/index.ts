import Server from "./server";
import routes from "./routes";
import { config } from "dotenv";
config({
  path: ".env",
});
const PORT = parseInt(process.env.PORT) || 8001;

export default new Server().router(routes).listen(PORT);
