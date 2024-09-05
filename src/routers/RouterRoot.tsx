import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Login from "../screen/auth/Login";
import PrivateRoute from "./PrivateRoute";

function RouterRoot() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div>OK</div>
            </PrivateRoute>
          }
        />
        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <div>Protected</div>
            </PrivateRoute>
          }
        />
        <Route
          path="/item-1/page-1"
          element={
            <PrivateRoute>
              <div>Page 1</div>
            </PrivateRoute>
          }
        />
        <Route
          path="/item-1/page-2"
          element={
            <PrivateRoute>
              <div>Page 2</div>
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default RouterRoot;
