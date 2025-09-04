import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: Readonly<ReactNode>;
}
function layout({ children }: Props) {
  return (
    <main>
      <NavBar />

      {children}

      <Footer />
    </main>
  );
}

export default layout;
