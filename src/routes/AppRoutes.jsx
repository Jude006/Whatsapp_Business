import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Demo from "../pages/Demo";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import AuthRoutes from "./AuthRoutes";
import NotFound from "../pages/NotFound";
import DashboardRoutes from "./DashboardRoutes";
import CommonLayout from "../components/common/layouts/CommonLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
