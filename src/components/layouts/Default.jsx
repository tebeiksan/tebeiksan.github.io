import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

export default function Default({ children }) {
  return (
    <div className="container relative mx-auto">
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
}
