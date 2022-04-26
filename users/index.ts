import Server from "./server";
import routes from "./routes";

const PORT = parseInt(process.env.PORT) || 8002;

export default new Server().router(routes).listen(PORT);
