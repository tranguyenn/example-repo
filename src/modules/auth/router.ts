import { TRoute } from "~/router/type";
import PageLogin from "./login";

export const AUTH_ROUTES: TRoute[] = [
  {
    name: "login",
    path: "/login",
    element: PageLogin,
    type: "unauthenticated",
  },
];
