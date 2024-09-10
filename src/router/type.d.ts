import { ComponentType, LazyExoticComponent } from "react";

type TRoutePermission =
  | {
      type: "public" | "unauthenticated";
    }
  | {
      type: "authenticated";
      permission?: string[];
    };

type TRoute = {
  name: string;
  path: string;
  element: LazyExoticComponent<() => JSX.Element> | ComponentType;
  exact?: boolean;
  layout?: LazyExoticComponent<() => JSX.Element> | ComponentType;
} & TRoutePermission;
