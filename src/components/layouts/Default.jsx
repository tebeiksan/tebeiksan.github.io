import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

export default function Default({ children }) {
  return (
    <div className="container relative">
      <Navbar />
      <Main>{children}</Main>
    </div>
  );
}
