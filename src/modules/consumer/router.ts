import MockLayout from "~/layouts/mock-layout";
import PageHome from "./home";
import { TRoute } from "~/router/type";

export const CONSUMER_ROUTES: TRoute[] = [
  {
    name: "home",
    path: "/",
    element: PageHome,
    type: "public",
    layout: MockLayout,
  },
];
