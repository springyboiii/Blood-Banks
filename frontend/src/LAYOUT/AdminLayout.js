import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "../components/admin/Dashborad";
import NotFoundPage from "../components/NotFoundPage";

const AdminLayout = () => {
  return (
    <Routes>
      <Route path="dashboard/*" element={<Dashborad />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default AdminLayout;
