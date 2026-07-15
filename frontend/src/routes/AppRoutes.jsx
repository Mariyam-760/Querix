import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import Database from "../pages/Database/Database";

const AppRoutes = () => {
  return (
<BrowserRouter>
  <Routes>

    <Route path="/" element={<Navigate to="/login" replace />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/database" element={<Database />} />

    {/* Protected Dashboard Routes */}

    <Route
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Route>

    <Route
      path="*"
      element={
        <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
          404 | Page Not Found
        </div>
      }
    />

  </Routes>
</BrowserRouter>
  );
};

export default AppRoutes;