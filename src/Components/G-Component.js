import React, { useState } from "react";
import "../style/G/style.css";
import DayCare from "./img/日照.jpg";
import CareCenter from "./img/機構喘.jpg";
import HomeCareService from "./img/居喘.jpg";

const GComponent = () => {
  const [homeCareService, setHomeCareService] = useState(false);
  const [button, setButton] = useState(true);
  const [GService1, setGService1] = useState(true);
  const [GService2, setGService2] = useState(true);
  const [GService3, setGService3] = useState(true);

  const handleToShow1 = () => {
    setGService1(!GService1);
  };
  const handleToShow2 = () => {
    setGService2(!GService2);
  };
  const handleToShow3 = () => {
    setGService3(!GService3);
  };

  const handleToClick = () => {
    setHomeCareService(true);
    setButton(false);
  };

  return (
    <div className="G-container">
      <div className="title-container">
        <h1 className="title-word">G碼/喘息服務</h1>
        <div className="title-description">
          若照顧者需長時間外出辦事或因照顧壓力過大需適度休息，甚至是外看休假時也能申請，這段期間由受過訓練的專業人員協助照顧，讓照顧者們可以喘息一下
        </div>
      </div>

      <span style={{ display: "flex", justifyContent: "center" }}>
        <hr color="darkblue" width="95%" />
      </span>

      <main className="G-mainPart">
        <div className="imgContainer ">
          <img
            src={DayCare}
            alt="無法顯示"
            style={{ opacity: GService1 ? "1" : "0.2" }}
          />
          <div
            className="G-desc ga-1"
            style={{ opacity: GService1 ? "0" : "1" }}
          >
            類似長輩的幼兒園，在這邊接受照顧及用餐，分為半天及全天
          </div>
          <p onClick={handleToShow1}>日間照顧喘息</p>
        </div>

        <div className="imgContainer ">
          <img
            src={CareCenter}
            alt="無法顯示"
            style={{ opacity: GService2 ? "1" : "0.2" }}
          />
          <div
            className="G-desc ga-2"
            style={{ opacity: GService2 ? "0" : "1" }}
          >
            長輩在此接受24小時照顧，照顧者能獲得長時間的休息，依額度不同可申請14天或21天
          </div>
          <p onClick={handleToShow2}>機構喘息</p>
        </div>

        <div className="imgContainer">
          <img
            src={HomeCareService}
            alt="無法顯示"
            style={{ opacity: GService3 ? "1" : "0.2" }}
          />
          <div
            className="G-desc ga-3"
            style={{ opacity: GService3 ? "0" : "1" }}
          >
            派受訓過的居服員至家中照顧長輩，依照顧者需求安排每日最短2小時，最長10小時
          </div>
          <p onClick={handleToShow3}>居家喘息</p>
        </div>
      </main>

      {/* 家照服務，點擊打開 */}
      <div className="homeCare">
        {button && (
          <button onClick={handleToClick}>
            <strong>了解更多</strong>
          </button>
        )}

        {homeCareService && (
          <main>
            <div className="title-container">
              <h1 className="title-word">家庭照顧者支持服務</h1>
              <div className="title-description">
                若照顧者還是覺得壓力很大，各地區設有家庭照顧者支持中心，提供情緒支持及相關服務以減輕照顧上的壓力，由家照社工陪著您一起面對照顧一事
              </div>
            </div>

            <div className="homeCare-service">
              <div>心理協談</div>
              <div>電話關懷</div>
              <div>長照服務諮詢</div>
              <div>到宅心理支持員</div>
              <div>紓壓/支持團體</div>
              <div>照顧技巧指導</div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default GComponent;
