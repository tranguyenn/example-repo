import React, { Fragment } from "react";

const Authenticated: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      Authenticated component:
      {children}
    </Fragment>
  );
};

export default Authenticated;
