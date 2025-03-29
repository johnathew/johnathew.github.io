import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./App.tsx"),
  route("/projects", "./routes/projects.tsx"),
  route("/about", "./routes/about.tsx"),
  route("/severed", "./routes/severed.tsx"),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
