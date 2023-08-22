import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Navigation/NavBar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      {/* <Routes>
                <Route path="/home" element={<HomePage/>}
            </Routes> */}
    </Router>
  );
};

export default AppRouter;
