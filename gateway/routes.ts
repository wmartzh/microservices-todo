import { Application } from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const { SERVICE_AUTH, SERVICE_USERS, SERVICE_TODOS } = process.env;

export default function routes(app: Application): void {
  app.use(morgan("dev"));

  app.use(
    "/auth",
    createProxyMiddleware({
      target: SERVICE_AUTH,
      changeOrigin: true,
      pathRewrite: {
        ["^/auth"]: "",
      },
    })
  );
  app.use(
    "/users",
    createProxyMiddleware({
      target: SERVICE_USERS,
      changeOrigin: true,
      pathRewrite: {
        ["^/users"]: "",
      },
    })
  );
  app.use(
    "/todo",
    createProxyMiddleware({
      target: SERVICE_TODOS,
      changeOrigin: true,
      pathRewrite: {
        ["^/todo"]: "",
      },
    })
  );
}
