import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Elements/Nav";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
