import React from "react";
import { Hello } from "./components/Hello";

export const Main = () => (
  <>
    <Hello message="React TypeScript Webpack Starter">
      <div className="features">
        <div>Webpack 5 + HMR</div>
        <div>TypeScript + React</div>
        <div>SCSS + Autoprefixing</div>
      </div>
    </Hello>
  </>
);
