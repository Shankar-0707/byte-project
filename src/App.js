import React from 'react'
// import { Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./parts/HomePage";
import UnauthorizedPage from "./parts/UnauthorizedPage";
import PrivatePage from "./parts/PrivatePage";
import './parts/styles.css'; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>
    </Router>
  );
}
export default App;