import { TRoute } from "~/router/type";
import PageDashboard from "./dashboard";

export const ADMIN_ROUTES: TRoute[] = [
  {
    name: "dashboard",
    path: "/dashboard",
    element: PageDashboard,
    type: "authenticated",
  },
];
