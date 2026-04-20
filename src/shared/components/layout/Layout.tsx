import type { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-background">
      <div className="layout-scroll flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
