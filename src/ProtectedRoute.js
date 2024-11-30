import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ auth, element }) => {
  return auth ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
