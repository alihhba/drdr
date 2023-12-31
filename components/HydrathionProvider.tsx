"use client";
import React, { useEffect, useState } from "react";

const HydrathionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div>{children}</div>;
};

export default HydrathionProvider;
