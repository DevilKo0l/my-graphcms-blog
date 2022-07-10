import React from "react";
import { Header } from "./";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
