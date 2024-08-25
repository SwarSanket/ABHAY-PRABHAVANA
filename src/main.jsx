import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import FounderMess from "./components/founder-message/FounderMess.jsx";
import "./index.css";
import Expriences from "./components/expriences/Expriences.jsx";
import Jouneryoptions from "./components/jouneryoptions/Jouneryoption.jsx";
import Planavisit from "./components/plan-a-visit/Planavisit.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/founder-message" element={<FounderMess />} />

        <Route path="/Expriences" element={<Expriences />} />
        <Route path="/Jouneryoptions" element={<Jouneryoptions />} />
        <Route path="/Planavisit" element={<Planavisit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
