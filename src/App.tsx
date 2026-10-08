import { useState } from 'react'
import favicon from './assets/favicon.png'
import './App.css'
import React from "react";
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
        <Route index element={<Home />} />
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
          <button id="list-view-button">SEARCH</button>
          <button id="gallery-view-button">GALLERY</button>
        </div>
      </div>
    </div>
  );
}
function Home() {
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

