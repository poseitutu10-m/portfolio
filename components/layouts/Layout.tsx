import { ChildrenProps } from "@/interfaces";
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="page-shell">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
