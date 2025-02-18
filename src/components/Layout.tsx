"use client";
import { ReactNode, useState } from "react";
import { ThemeSlider } from "./ThemeSlider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [selected, setSelected] = useState("light");

  return (
    <>
      <div className="m-2 px-6 absolute top-0 right-0 overflow-hidden">
        <ThemeSlider selected={selected} setSelected={setSelected} />
      </div>
      <section className={`${selected === "light" ? "lightie" : "darkie"}`}>
        <main className="min-h-screen flex bg-bgfirst">
          <div className="max-w-sm m-auto text-txfirst">{children}</div>
        </main>
      </section>
    </>
  );
};

export default Layout;
