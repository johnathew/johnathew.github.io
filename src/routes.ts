import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/projects", "./routes/projects.tsx"),
  route("/about", "./routes/about.tsx"),
  route("/severed", "./routes/severed.tsx"),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
