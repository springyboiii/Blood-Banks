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
import ViewDonoursScreen from "../screens/ViewDonoursScreen";
import DonourEditScreen from "../screens/DonourEditScreen";
import DonourAddScreen from "../screens/DonourAddScreen";
import DeleteDonor from "../components/DeleteDonor";
import users from "../users";
import { useState } from "react";

const PublicLayout = ({bloodbanks,campaigns,username}) => {
  const [username1, setUsername] = useState(username)
  
  return (
    <>
    {console.log({username})}
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen bloodbanks={bloodbanks}/>}/>
            <Route path="/bloodbank/:id" element={<BloodBankScreen/>} />
            <Route path="/editProfile" element={<EditProfileScreen username={username1} />} />
            <Route path="/updateInventory" element={<UpdateInventoryScreen/>} />
            <Route path="/viewCamp" element={<ViewCampScreen campaigns={campaigns}/>} />
            <Route path="/viewDonours" element={<ViewDonoursScreen/>} />
            <Route path="/donour/edit/:id" element={<DonourEditScreen/>} />
            <Route path="/donour/add" element={<DonourAddScreen/>} />
            <Route path="/donour/delete" element={<DeleteDonor donorList={users}/>} />
            <Route path="/addCamp" element={<AddCampScreen/>} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;
