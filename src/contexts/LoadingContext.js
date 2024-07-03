"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const LoadingProvider = ({ children }) => {
  return (
    <>
      {children}

      <Next13ProgressBar
        height="3px"
        color="#00FF87"
        options={{ showSpinner: false }}
        showOnShallow
        stopDelayMs={200}
      />
    </>
  );
};

export default LoadingProvider;
