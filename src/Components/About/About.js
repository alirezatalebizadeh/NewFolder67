import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <hr />
      {<Outlet />}
    </div>
  );
}
