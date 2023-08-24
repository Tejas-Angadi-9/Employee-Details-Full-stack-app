import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewEmployees" element={<Users />} />
        <Route path="/addemployee" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
