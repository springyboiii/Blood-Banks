import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BloodBankScreen from "../screens/BloodBankScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import UpdateInventoryScreen from "../screens/UpdateInventoryScreen";
import ViewCampScreen from "../screens/ViewCampScreen";
import AddCampScreen from "../screens/AddCampScreen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";

const PublicLayout = () => {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" element={<HomeScreen/>}/>
            <Route path="/bloodbank/:id" element={<BloodBankScreen/>} />
            <Route path="/editProfile" element={<EditProfileScreen/>} />
            <Route path="/updateInventory" element={<UpdateInventoryScreen/>} />
            <Route path="/viewCamp" element={<ViewCampScreen/>} />
            <Route path="/addCamp" element={<AddCampScreen/>} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;
