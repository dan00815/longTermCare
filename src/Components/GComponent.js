import React, { useState } from "react";
import "../style/G/style.css";

const GComponent = () => {
  const [homeCareService, setHomeCareService] = useState(false);
  const [button, setButton] = useState(true);
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
        <div className="G-service">
          <div className="serviceContent">
            <i className="fa-solid fa-play"></i>
            <p>
              <strong>日間照顧喘息</strong>
              ：讓長輩於日間照顧中心(類似長輩的幼兒園)接受照顧及用餐，分為半天及全天
            </p>
          </div>

          <div className="serviceContent">
            <i className="fa-solid fa-play"></i>
            <p>
              <strong>機構喘息</strong>
              ：讓長輩於住宿式機構接受24小時之照顧，依長輩額度不同最多可申請至14天或21天，照顧者可以得到較長時間的休息
            </p>
          </div>

          <div className="serviceContent">
            <i className="fa-solid fa-play"></i>
            <p>
              <strong>居家喘息</strong>
              ：派受過訓練的居服員至家中照顧長輩，依照顧者需求安排服務，每日最短2小時，最長10小時，兩小時為一單位
            </p>
          </div>
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
                若照顧者還是覺得壓力很大，各地區設有家庭照顧者支持中心，提供情緒支持及相關服務以減輕照顧上的壓力，由家照社工陪著您一起面對照顧一事，中央也制定出高負荷照顧者指標，個管師會詢問意願後協助轉介，您也可以主動致電各中心做諮詢
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
