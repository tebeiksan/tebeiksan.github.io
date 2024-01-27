import React from "react";

export default function Main({ children }) {
  return (
    <main
      style={{
        marginTop: `var(--navbar-height)`,
        height: `calc(100vh - var(--navbar-height))`,
      }}
    >
      {children}
    </main>
  );
}
