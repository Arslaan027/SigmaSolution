import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/home";
import Biz from "./Components/Biz/Biz";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/biz" element={<Biz />} />
      </Route>
    </Routes>
  );
};

export default App;
