import React from "react";

import { Header, Footer } from "components/organism";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
