import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import "../style/Home/style.css";
import HomeMark from "./img/homeMark.png";

const Nav = () => {
  const Navigate = useNavigate();
  const returnHome = () => {
    Navigate("/");
  };

  return (
    <>
      <nav>
        <div className="imgContainer" onClick={returnHome}>
          <img src={HomeMark} alt="首頁圖示"></img>
          <p className="hometitle">長照知多少</p>
        </div>
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
            輔具及無障礙環境改善
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
    </>
  );
};

export default Nav;
