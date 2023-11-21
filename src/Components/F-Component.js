import React from "react";
import "../style/F/style.css";
import FA01 from "./img/FA01.jpg";
import FA02 from "./img/FA02.jpg";

const FComponent = () => {
  return (
    <div className="F-container">
      <div className="title-container">
        <h1 className="title-word">環境改造</h1>
        <div className="title-description">
          針對失能長輩的生活環境，進行必要之改造，創造友善的無障礙居住空間，更重要的是也保障其安全
        </div>
      </div>

      <div className="img-container">
        <div className="">
          <img src={FA01} alt="無法顯示" />
        </div>
        <div className="img-div">
          <img src={FA02} alt="無法顯示" />
        </div>
      </div>
    </div>
  );
};

export default FComponent;
