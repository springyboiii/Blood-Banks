import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Dashborad from "../components/admin/Dashborad";
import NotFoundPage from "../components/NotFoundPage";


const AdminLayout = () => {
  return (
    <Routes>
      <Route path="signIn" element={<Login/>} />
      <Route path="dashboard/*" element={<Dashborad/>}  />
      <Route path="*" element={<NotFoundPage/> }></Route>

    </Routes>
  )
}

export default AdminLayout