"use client";
import { ThemeProvider as TP } from "next-themes";
import { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <TP attribute="class">{children}</TP>;
};

export default ThemeProvider;
