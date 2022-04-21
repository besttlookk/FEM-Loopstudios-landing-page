import React, { useState } from "react";
import { Header } from ".";
import Footer from "./Footer";
import GlobalStyle from "../styles/GlobalStyles";
import MobileNavigation from "./MobileNavigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <GlobalStyle />
      <MobileNavigation isMenuActive={isMenuActive} />

      <Header setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
