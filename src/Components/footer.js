import React from "react";
import FBIcon from "./img/facebook-1-svgrepo-com.svg";
import IGIcon from "./img/instagram-2-1-logo-svgrepo-com.svg";
import GithubIcon from "./img/github-142-svgrepo-com.svg";

const footer = () => {
  return (
    <div className="footer">
      <div className="contactInfo">
        <p className="main-info">合作邀約請洽</p>

        <div className="mail-info">
          <i className="fa-solid fa-envelope"></i>
          <p>huan518087@gmail.com</p>
        </div>
        <div className="phone-info">
          <i className="fa-solid fa-phone"></i>
          <p> 0912-345-678</p>
        </div>
      </div>

      <p className="text-info">®本網站僅供個人作品使用，並無進行任何商業行為</p>
      <div className="imageContainer">
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={FBIcon} alt="FB"></img>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={IGIcon} alt="IG"></img>
          </a>
        </div>
        <div className="footer-github">
          <a href="#">
            <img src={GithubIcon} alt="Github"></img>
          </a>
        </div>

        {/* <a href="https://www.facebook.com/" target="_blank">
          <img src={FBIcon} alt="FB"></img>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={IGIcon} alt="IG"></img>
        </a>
        <a href="#">
          <img src={GithubIcon} alt="Github"></img>
        </a> */}
      </div>
    </div>
  );
};

export default footer;
