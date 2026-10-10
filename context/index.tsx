"use client";

import { ChildrenProps, ContextProps } from "@/interfaces";
import React, { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext<ContextProps | null>(null);

const MainContextWrapper: React.FC<ChildrenProps> = ({ children }) => {
  const [nav, setNav] = useState<string>("Home");
  const selectNav = (data: string) => {
    setNav(data);
    localStorage.setItem("storedNav", data);
  };

  useEffect(() => {
    const storedNav = localStorage.getItem("storedNav");
    if (storedNav) {
      setNav(storedNav);
    }
  }, [nav]);
  return (
    <MainContext.Provider value={{ nav, selectNav }}>
      {children}
    </MainContext.Provider>
  );
};

export const UseMyContext = (): ContextProps => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("Empty context");
  }
  return context;
};

export default MainContextWrapper;
