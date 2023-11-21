import React, { useRef } from "react";
import "../style/D/style.css";
import car from "./img/car.png";

const DComponent = () => {
  return (
    <div className="D-container">
      <div className="title-container">
        <h1 className="title-word">D碼/交通接送服務</h1>
        <div className="title-description">
          往返醫院及住家的交通車，為無障礙環境，輪椅可直接推上車
        </div>
      </div>

      <span style={{ display: "flex", justifyContent: "center" }}>
        <hr color="darkblue" width="95%" />
      </span>

      <div className="D-mainPart">
        <div className="imgContainer show">
          <div>
            <img src={car} alt="" />
          </div>
        </div>
        <div className="D-part-Description">
          <p>長照交通車有政府補助，民眾只需支付少許的費用</p>
          <p>上車地點為醫院或住家其中一端，僅能作為往返醫院之用途</p>
          <p>可用於回診、就醫、復健、洗腎</p>
        </div>
      </div>
    </div>
  );
};

export default DComponent;
