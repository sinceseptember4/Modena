import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;