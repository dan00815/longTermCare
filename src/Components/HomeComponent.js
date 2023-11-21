import React, { useState, useEffect } from "react";
import "../style/Home/style.css";
import backgroundImage from "./img/background.jpg";
import phone from "./img/phone.png";
import home from "./img/home.png";
import evaluate from "./img/evaluate.png";
import oldService from "./img/old-service.png";

const HomeComponent = ({ Images }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [goTop, setGoTop] = useState(false);
  const [isActiveAns1, setIsActiveAns1] = useState(false);
  const [isActiveAns2, setIsActiveAns2] = useState(false);
  const [MiniCard1, setMiniCard1] = useState(false);
  const [MiniCard2, setMiniCard2] = useState(false);
  const [MiniCard3, setMiniCard3] = useState(false);
  const [MiniCard4, setMiniCard4] = useState(false);

  const preSlide = () => {
    setIsAutoPlay(false);
    if (currentImgIndex == 0) {
      setCurrentImgIndex(4);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };
  const nextSlide = () => {
    setIsAutoPlay(false);
    if (currentImgIndex >= 4) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };
  const retrunSldie = () => {
    setIsAutoPlay(true);
    console.log("return");
  };
  const stopSlide = () => {
    setIsAutoPlay(false);
    console.log("stop");
  };

  const slideMove = () => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentImgIndex(currentImgIndex + 1);
        if (currentImgIndex >= 4) {
          setCurrentImgIndex(0);
        }
        clearInterval(interval);
      }, 3000);
    }
  };
  slideMove();

  const hanleToActiveAns1 = () => {
    setIsActiveAns1(!isActiveAns1);
  };
  const hanleToActiveAns2 = () => {
    setIsActiveAns2(!isActiveAns2);
  };

  const handleToSlideUp1 = () => {
    setMiniCard1(!MiniCard1);
  };
  const handleToSlideUp2 = () => {
    setMiniCard2(!MiniCard2);
  };
  const handleToSlideUp3 = () => {
    setMiniCard3(!MiniCard3);
  };
  const handleToSlideUp4 = () => {
    setMiniCard4(!MiniCard4);
  };

  const CloseSlideUp = () => {
    setMiniCard1(false);
    setMiniCard2(false);
    setMiniCard3(false);
    setMiniCard4(false);
  };

  const appearElement = document.querySelectorAll(".appear");
  const InfoElement = document.querySelectorAll(".four-service");
  const flowChartElement = document.querySelectorAll(".flowChart");

  //滾輪事件
  const checkElements = () => {
    const trigger = window.innerHeight * 0.75;
    const goTopTrigger = window.innerHeight * 0.3;
    const chartTrigger = window.innerHeight * 1.5;
    appearElement.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      if (top < trigger) {
        element.classList.add("show");
      }
    });

    // 這裡主要設定goTop箭頭到哪裡時會隱藏，用長照四包錢當基準點
    InfoElement.forEach((e) => {
      const InfoTop = e.getBoundingClientRect().top;
      if (InfoTop < goTopTrigger) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    });

    //設定流程圖跳出顯示的效果
    //這邊如果設定新增class等於show並設定translateY不會有往上位移的效果
    flowChartElement.forEach((e) => {
      const flowChartContainerUp = e.getBoundingClientRect().top;
      // console.log(flowChartContainerUp);
      if (flowChartContainerUp < chartTrigger) {
        e.style.transform = "translateY(0)";
      }
    });
  };
  window.addEventListener("scroll", checkElements);

  return (
    <div>
      {/* 幻燈片 */}
      <div className="slide">
        <button
          className="pre-button"
          onClick={preSlide}
          onMouseLeave={retrunSldie}
          onMouseOver={stopSlide}
        >
          ＜
        </button>

        <img
          src={Images[currentImgIndex]}
          alt="無法呈現"
          onClick={retrunSldie}
        />

        <button
          className="next-button"
          onClick={nextSlide}
          onMouseLeave={retrunSldie}
          onMouseOver={stopSlide}
        >
          ＞
        </button>
      </div>

      <main>
        <section className="QA-section">
          <div className="whatIs1">
            <div className="whatIs1-que">什麼是長照？</div>
            <div
              className={`whatIs1-ans ${isActiveAns1 ? "active" : ""}`}
              onClick={hanleToActiveAns1}
            >
              <div className="re-ans-filter">解答！</div>
              <div className="ans-filter">
                指的是長期照顧
                <br />
                身心失能持續已達或預期達六個月以上者
                <br />
                依其個人或其照顧者之需要，所提供之生活支持、協助、社會參與、照顧及相關之醫護服務。
              </div>
            </div>
          </div>

          <div className="whatIs2">
            <div
              className={`whatIs2-ans ${isActiveAns2 ? "active" : ""}`}
              onClick={hanleToActiveAns2}
            >
              <div className="re-ans-filter">解答！</div>
              <div className="ans-filter">
                人終有一老，邁入老年階段，會感受到體力明顯下降
                <br />
                而當今的台灣是一個勞動力人口與照顧比例逐漸失衡的狀況，如何維持晚年生活的自主，便需要借助長照服務
              </div>
            </div>

            <div className="whatIs2-que">為什麼需要長照？</div>
          </div>
        </section>

        <section className="four-service">
          <h1>
            <i>長照有四包錢</i>
          </h1>

          <div className="appear">
            <i class="fa-solid fa-handshake"></i>
            <h2>照顧與專業服務</h2>
          </div>
          <p className="appear">
            分為居家服務與復能服務
            <br />
            居家服務為B開頭的碼別，由居家單位派遣受過訓練的居家服務員到府提供長輩日常生活所需之協助
            <br />
            復能服務為C開頭的碼別，由專業老師教長輩學習自主生活，達到「復原能力」的效果
          </p>

          <div className="appear">
            <i class="fa-solid fa-van-shuttle"></i>
            <h2>交通接送服務</h2>
          </div>
          <p className="appear">
            交通接送服務為D開頭的碼別，接送長輩往返醫院與住家
          </p>

          <div className="appear">
            <i class="fa-solid fa-wheelchair"></i>
            <h2>輔具與無障礙環境</h2>
          </div>
          <p className="appear">
            輔具為E開頭的碼別，可以申請補助以購買如輪椅、拐杖的用具
            <br />
            無障礙環境改造為F開頭的碼別，針對家中生活空間進行無障礙設施改造
          </p>

          <div className="appear">
            <i class="fa-solid fa-mug-saucer"></i>
            <h2>照顧者喘息服務</h2>
          </div>
          <p className="appear">
            喘息服務為G開頭的碼別，分擔照顧者的壓力，讓其於照顧過程中獲得短暫喘息的機會
            <br />
            各地也有設立家庭照顧者關懷中心，成為照顧者的另一個後盾
          </p>
        </section>

        <section className="identity-partial">
          <img
            src={backgroundImage}
            alt="無法顯示"
            className="backgroundImage"
          />
          <div className="filter"></div>
          <h1>誰可以申請長照</h1>

          <div className="identity-mainPartial">
            <div className="identity-mini">
              <div
                className={`identity-mini-card ${
                  MiniCard1 ? "active" : "faded"
                }`}
              >
                65歲以上
                <br />
                失能、衰弱、獨居老人
              </div>
              <div
                className={`identity-mini-card ${
                  MiniCard2 ? "active" : "faded"
                }`}
              >
                55歲以上
              </div>
              <div
                className={`identity-mini-card  ${
                  MiniCard3 ? "active" : "faded"
                }`}
              >
                50歲以上
              </div>
              <div
                className={`identity-mini-card  ${
                  MiniCard4 ? "active" : "faded"
                }`}
              >
                不限年齡
                <br />
                只需持有身障手冊
              </div>
            </div>

            <div className="identity">
              <div
                className="identity-card"
                onMouseOver={handleToSlideUp1}
                onMouseLeave={CloseSlideUp}
                onClick={handleToSlideUp1}
              >
                <p>失能長者</p>
              </div>
              <div
                className="identity-card"
                onMouseOver={handleToSlideUp2}
                onMouseLeave={CloseSlideUp}
                onClick={handleToSlideUp2}
              >
                <p>失能原住民</p>
              </div>
              <div
                className="identity-card"
                onMouseOver={handleToSlideUp3}
                onMouseLeave={CloseSlideUp}
                onClick={handleToSlideUp3}
              >
                <p>失智長輩</p>
              </div>
              <div
                className="identity-card"
                onMouseOver={handleToSlideUp4}
                onMouseLeave={CloseSlideUp}
                onClick={handleToSlideUp4}
              >
                <p>身心障礙者</p>
              </div>
            </div>
          </div>
        </section>

        <section className="apply">
          <h1 className="apply-appear">如果有需要，該如何申請</h1>

          <div className="flowChart">
            <div className="chart-elm">
              <p>
                長照專線
                <strong>1966</strong>
              </p>
              <img src={phone} alt="" className="phoneImg" />
            </div>
            <span>
              <i className="fa-solid fa-right-long"></i>
              <p>
                各地衛生局
                <br />
                會派專員到府評估
              </p>
            </span>
            <div className="chart-elm">
              <p>到你家</p>
              <img
                src={home}
                alt=""
                style={{
                  transform: "translateY(-10px)",
                }}
              />
            </div>
            <span>
              <i className="fa-solid fa-right-long"></i>
              <p>
                依照長輩失能
                <br />
                狀況評估等級
              </p>
            </span>
            <div className="chart-elm">
              <p>給額度</p>
              <img src={evaluate} alt="" />
            </div>
            <span>
              <i className="fa-solid fa-right-long"></i>
              <p>
                按等級和需求給予
                <br />
                對應服務
              </p>
            </span>
            <div className="chart-elm">
              <p>用服務</p>
              <img src={oldService} alt="" />
            </div>
          </div>
        </section>
      </main>

      {/* 回到最上方 */}
      {goTop && (
        <div id="ToTop">
          <a href="#">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
