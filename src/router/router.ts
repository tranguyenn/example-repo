import { ADMIN_ROUTES } from "~/modules/admin/router";
import { AUTH_ROUTES } from "~/modules/auth/router";
import { CONSUMER_ROUTES } from "~/modules/consumer/router";

export const ROUTERS = [...CONSUMER_ROUTES, ...ADMIN_ROUTES, ...AUTH_ROUTES];
