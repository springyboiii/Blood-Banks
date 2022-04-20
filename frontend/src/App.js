import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BloodBankScreen from "./screens/BloodBankScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import UpdateInventoryScreen from "./screens/UpdateInventoryScreen";
import ViewCampScreen from "./screens/ViewCampScreen";
import AddCampScreen from "./screens/AddCampScreen";
import Login from "./components/login/Login"

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Route path="/signIn" component={Login} exact />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/bloodbank/:id" component={BloodBankScreen} />
          <Route path="/editProfile" component={EditProfileScreen} />
          <Route path="/updateInventory" component={UpdateInventoryScreen} />
          <Route path="/viewCamp" component={ViewCampScreen} />
          <Route path="/addCamp" component={AddCampScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
