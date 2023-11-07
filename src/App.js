import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Layout from "./Components/Layout";
import HomeComponent from "./Components/HomeComponent";
import BComponent from "./Components/B-Component";
import CComponent from "./Components/C-Component";
import DComponent from "./Components/DComponent";
import EComponent from "./Components/E-Component";
import FComponent from "./Components/F-Component";
import GComponent from "./Components/GComponent";
import slide1 from "./Components/img/slide-1.jpg";
import slide2 from "./Components/img/slide-2.jpg";
import slide3 from "./Components/img/slide-3.png";
import slide4 from "./Components/img/slide-4.jpg";
import slide5 from "./Components/img/slide-5.jpg";
import returnArrow from "./Components/img/return-back.png";
import BA01 from "./Components/B-service-Components/BA01";
import BA02 from "./Components/B-service-Components/BA02";
import BA03 from "./Components/B-service-Components/BA03";
import BA04 from "./Components/B-service-Components/BA04";
import BA05 from "./Components/B-service-Components/BA05";
import BA07 from "./Components/B-service-Components/BA07";
import BA10 from "./Components/B-service-Components/BA10";
import BA11 from "./Components/B-service-Components/BA11";
import BA12 from "./Components/B-service-Components/BA12";
import BA13 from "./Components/B-service-Components/BA13";
import BA14 from "./Components/B-service-Components/BA14";
import BA15 from "./Components/B-service-Components/BA15";
import BA16 from "./Components/B-service-Components/BA16";
import BA18 from "./Components/B-service-Components/BA18";
import BA20 from "./Components/B-service-Components/BA20";

function App() {
  const Images = [slide1, slide2, slide3, slide4, slide5];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent Images={Images} />} />
          <Route path="/B" element={<BComponent />} />
          {/* B碼分頁 */}
          <Route>
            <Route path="/BA01" element={<BA01 returnArrow={returnArrow} />} />
            <Route path="/BA02" element={<BA02 returnArrow={returnArrow} />} />
            <Route path="/BA03" element={<BA03 returnArrow={returnArrow} />} />
            <Route path="/BA04" element={<BA04 returnArrow={returnArrow} />} />
            <Route path="/BA05" element={<BA05 returnArrow={returnArrow} />} />
            <Route path="/BA07" element={<BA07 returnArrow={returnArrow} />} />
            <Route path="/BA10" element={<BA10 returnArrow={returnArrow} />} />
            <Route path="/BA11" element={<BA11 returnArrow={returnArrow} />} />
            <Route path="/BA12" element={<BA12 returnArrow={returnArrow} />} />
            <Route path="/BA13" element={<BA13 returnArrow={returnArrow} />} />
            <Route path="/BA14" element={<BA14 returnArrow={returnArrow} />} />
            <Route path="/BA15" element={<BA15 returnArrow={returnArrow} />} />
            <Route path="/BA16" element={<BA16 returnArrow={returnArrow} />} />
            <Route path="/BA18" element={<BA18 returnArrow={returnArrow} />} />
            <Route path="/BA20" element={<BA20 returnArrow={returnArrow} />} />
          </Route>
          <Route path="/C" element={<CComponent />} />
          <Route path="/D" element={<DComponent />} />
          <Route path="/E" element={<EComponent />} />
          <Route path="/F" element={<FComponent />} />
          <Route path="/G" element={<GComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
