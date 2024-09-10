import React, { Fragment } from "react";

const MockLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default MockLayout;
