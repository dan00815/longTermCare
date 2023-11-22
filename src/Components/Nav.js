import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../style/Home/style.css";
import HomeMark from "./img/homeMark.png";
import { useState, useEffect } from "react";

const Nav = () => {
  const Navigate = useNavigate();
  const returnHome = () => {
    setHamburgerBtn(true);
    setThreeLineBtn(false);
    setRWDNav(false);
    setBCOn(false);
    setEFOn(false);
    setBCClick(true);
    setEFClick(true);
    Navigate("/");
  };

  const [RWDNav, setRWDNav] = useState(false);
  const [hamburgerBtn, setHamburgerBtn] = useState(true);
  const [threeLineBtn, setThreeLineBtn] = useState(false);
  const [BCOn, setBCOn] = useState(false);
  const [BCClick, setBCClick] = useState(true);
  const [EFOn, setEFOn] = useState(false);
  const [EFClick, setEFClick] = useState(true);

  const navButtonOpen = () => {
    setRWDNav(!RWDNav);
    setHamburgerBtn(false);
    setThreeLineBtn(true);
  };

  const navButtonClose = () => {
    setHamburgerBtn(true);
    setThreeLineBtn(false);
    setRWDNav(!RWDNav);
    setBCOn(false);
    setEFOn(false);
    setBCClick(true);
    setEFClick(true);
  };

  const hanleToCloseBC = () => {
    setBCOn(!BCOn);
    setBCClick(!BCClick);
  };
  const hanleToCloseEF = () => {
    setEFOn(!EFOn);
    setEFClick(!EFClick);
  };

  return (
    <>
      <nav>
        <div className="imgContainer" onClick={returnHome}>
          <div>
            <img src={HomeMark} alt="首頁圖示"></img>
          </div>
          <p>長照知多少</p>
        </div>

        <i
          class="fa-solid fa-bars"
          onClick={navButtonOpen}
          style={{ display: hamburgerBtn ? "block" : "none" }}
        ></i>
        <i
          className="fa-solid fa-xmark"
          style={{ display: threeLineBtn ? "block" : "none", right: "15px" }}
          onClick={navButtonClose}
        ></i>

        <ul className="nav-ul">
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li className="BC">
            照顧及專業服務
            <ul className="BC-tab">
              <li>
                <Link to="/B">照顧服務</Link>
              </li>
              <li>
                <Link to="/C">專業服務</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/D">交通接送</Link>
          </li>
          <li className="EF">
            輔具及無障礙環改
            <ul className="EF-tab">
              <li>
                <Link to="/E">輔具介紹</Link>
              </li>
              <li>
                <Link to="/F">無障礙環改</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/G">喘息服務</Link>
          </li>
        </ul>
      </nav>

      <ul className="nav-ul-RWD" style={{ left: RWDNav ? "0%" : "-100%" }}>
        <li onClick={navButtonClose}>
          <Link to="/">首頁</Link>
        </li>
        <li onClick={hanleToCloseBC}>
          照顧及專業服務
          <i
            className="fa-solid fa-chevron-down"
            style={{ transform: BCClick ? "rotate(90deg)" : "rotate(0)" }}
          ></i>
        </li>

        <ul
          className="BC-tab"
          style={{
            display: BCOn ? "block" : "none",
          }}
        >
          <li onClick={navButtonClose}>
            <Link to="/B">照顧服務</Link>
          </li>
          <li onClick={navButtonClose}>
            <Link to="/C">專業服務</Link>
          </li>
        </ul>

        <li onClick={navButtonClose}>
          <Link to="/D">交通接送</Link>
        </li>
        <li onClick={hanleToCloseEF}>
          輔具及無障礙環改
          <i
            className="fa-solid fa-chevron-down"
            style={{ transform: EFClick ? "rotate(90deg)" : "rotate(0)" }}
          ></i>
        </li>
        <ul
          className="EF-tab"
          style={{
            display: EFOn ? "block" : "none",
          }}
        >
          <li onClick={navButtonClose}>
            <Link to="/E">輔具介紹</Link>
          </li>
          <li onClick={navButtonClose}>
            <Link to="/F">無障礙環改</Link>
          </li>
        </ul>
        <li onClick={navButtonClose}>
          <Link to="/G">喘息服務</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
