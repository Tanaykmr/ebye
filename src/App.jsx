import "./App.css";
import Navbar from "./components/Navbar";

import Login from "./components/Login"
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Purchase from "./components/User/Purchase";
import Sell from "./components/User/Sell";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="/Purchase" element={<Purchase/>}/>
          <Route path="/Sell" element={<Sell/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
