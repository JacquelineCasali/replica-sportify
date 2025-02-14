

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Header from "../components/header/Header";

import Home from "../pages/Home";
import Artists from "../pages/Artists";
import Artist from "../pages/Artist";
import Songs from "../pages/Songs";
import Song from "../pages/Song";




const AppRoutes = () => {
 
  return (
    <Router>
 <Header/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/artists" element={<Artists />}/>
       <Route path="/artist/:id" element={<Artist />}/>
       <Route path="/songs" element={<Songs />}/>
       <Route path="/song/:id" element={<Song />}/>
     

   
   
  
    </Routes>

  </Router>
  );
};
export default AppRoutes;
