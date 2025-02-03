import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/footer";
import Apps from "./components/apps";
import AdminDashboard from "./components/admin";
import "./App.css";

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Apps />} />
        </Routes>
      {/* <div className="flex min-h-screen flex-col">
        <Header />
        <Home />
        <Footer />
      </div> */}
    </Router>
  );
}

export default App;
