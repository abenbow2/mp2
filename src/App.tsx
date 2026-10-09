import { useState } from 'react'
import favicon from './assets/favicon.png'
import './App.css'
import React from "react";
import { Outlet } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}


function Layout() {
  return(
    <div>
      <div id="header">
        <h1>BEANS! BEANS! BEANS!</h1>
        <div>
          <Link className="navlink" to="" id="list-view-button">    SEARCH    </Link>
          <Link className="navlink" to="Gallery" id="gallery-view-button">    GALLERY    </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
function Search() {
  return(
    <div>
      <input type="text" id="search-bar" placeholder="Search..."></input>
      <div id="search-results"></div>
    </div>
  );

}

function Gallery() {
  return(
    <div>
      <h2>GALLERY!</h2>
    </div>
  );
  
}

