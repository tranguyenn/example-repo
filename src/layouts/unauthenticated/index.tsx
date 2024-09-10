import React, { Fragment } from "react";

const Unauthenticated: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      Unauthenticated component:
      {children}
    </Fragment>
  );
};

export default Unauthenticated;
