// import React from "react";
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
import React, { useContext } from 'react';
import {UserContext} from "../UserContext";
const PublicLayout = ({bloodbanks,campaigns}) => {
  const {username,setUsernameState} = useContext(UserContext);

  // const [username1, setUsername] = useState(username)
  // const username=useContext(UserContext);
  // setUsername({username});
  return (
    <>
      <Header isLoggedIn={false}/>
      {/* {console.log(username,"public")} */}
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/bloodbank/:bank_ID" element={<BloodBankScreen/>} />
            {/* <Route path="/editProfile" element={<EditProfileScreen  />} />
            <Route path="/updateInventory" element={<UpdateInventoryScreen username={username}/>} /> */}
            <Route path="/viewCamp/*" element={<ViewCampScreen campaigns={campaigns}/>} />
            {/* <Route path="/viewDonours" element={<ViewDonoursScreen/>} /> */}
            {/* <Route path="/donour/edit/:id" element={<DonourEditScreen/>} /> */}
            {/* <Route path="/donour/add" element={<DonourAddScreen/>} /> */}
            {/* <Route path="/donour/delete/:id" element={<DeleteDonor donorList={users}/>} /> */}
            {/* <Route path="/addCamp" element={<AddCampScreen username={username}/>} /> */}
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default PublicLayout;
