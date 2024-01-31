import React from "react";

export default function Main({ children }) {
  return (
    <main
      className="px-5 md:px-[5rem]"
      style={{
        marginTop: `var(--navbar-height)`,
        height: `calc(100vh - var(--navbar-height))`,
      }}
    >
      {children}
    </main>
  );
}
