import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App, Contact, About, History} from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} >
        <Route path="history" element={<History /> } />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

