import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTERS } from "./router";
import { TRoute } from "./router/type";
import Authenticated from "./layouts/authenticated";

import "./App.css";
import Unauthenticated from "./layouts/unauthenticated";

const AppAuthenticator: React.FC<
  React.PropsWithChildren<{ type: TRoute["type"] }>
> = ({ children, type = "public" }) => {
  const map = new Map<TRoute["type"], React.ReactNode>([
    ["public", children],
    ["authenticated", <Authenticated>{children}</Authenticated>],
    ["unauthenticated", <Unauthenticated>{children}</Unauthenticated>],
  ]);

  return <Fragment>{map.get(type)}</Fragment>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTERS.map((route) => {
          const Component = route.element;

          return (
            <Route
              path={route.path}
              element={
                <AppAuthenticator type={route.type}>
                  <Component />
                </AppAuthenticator>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
