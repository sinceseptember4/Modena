import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/home";
import Explanation from "./component/explanation";
import {  Navbar, Nav } from 'react-bootstrap';
import Logo from './component/images/logo.jpeg';
import LogoName from './component/images/logo-name.jpeg';
function App() {
  const PublicUrl = process.env.PUBLIC_URL;
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="White" variant="White">
      <Navbar.Brand href="/">
        <img height="30" alt="Modena logo" src={Logo} />
        <img height="15" alt="Modena logo" src={LogoName} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/explanation">🔰初めての方へ</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
      <BrowserRouter>
      
        <Routes>
        <Route path={`${PublicUrl}/`} element={<Home />}/>
        <Route path={`${PublicUrl}/explanation`} element={<Explanation />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;