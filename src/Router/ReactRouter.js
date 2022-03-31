import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const ReactRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />

          <Route
            path="/dashboard/:userId/*"
            exact
            element={<ProtectedRoutes />}
          >
            <Route path="/dashboard/:userId/*" exact element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ReactRouter;
