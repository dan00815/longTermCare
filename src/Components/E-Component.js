import React, { useState } from "react";
import "../style/E/style.css";
import tool1 from "./img/輔具tool/輪椅.jpg";
import tool2 from "./img/輔具tool/便盆椅.png";
import tool3 from "./img/輔具tool/洗澡椅.jpeg";
import tool4 from "./img/輔具tool/單拐.jpg";
import tool5 from "./img/輔具tool/助行器.jpg";
import tool6 from "./img/輔具tool/移位腰帶.jpg";
import tool7 from "./img/輔具tool/電動床.jpg";
import tool8 from "./img/輔具tool/爬梯機.jpg";

const EComponents = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  // openModal裡面傳過來的東西(圖片本身)會被放到imageUrl，並設為setSelectedImage
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsDisplay(true);
  };

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      setIsDisplay(false);
    }
  });

  return (
    <div
      className="E-container"
      style={{ backgroundColor: isDisplay ? "rgba(0, 0, 0, 0.6)" : "" }}
    >
      <div className="title-container" style={{ marginTop: "0" }}>
        <h1 className="title-word">輔具介紹</h1>
        <div className="title-description">
          幫助失能長輩於日常生活中更加便利之工具，我們稱之為輔具，政府針對各項輔具訂有補助措施，而又能細分為僅能直接購置或使用租賃的方式
          <br />
          除了以下幾種較常見的，還有很多種類，若想知道可以進一步了解
        </div>
      </div>

      <div className="modal" style={{ display: isDisplay ? "block" : "none" }}>
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              setIsDisplay(false);
            }}
          >
            &times;
          </span>
          <img alt="圖片" src={selectedImage} />
        </div>
      </div>

      <div className="E-mainPart">
        <table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>說明</th>
              <th>租賃/購置</th>
              <th>圖片</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-name">輪椅</td>
              <td className="td-desc">
                建議依照身形、體重、自身需求不同，挑選適合的輪椅，若不清楚亦可詢問專業老師
                <br />
                僅能從輔具清單中挑一款輪椅申請補助
              </td>
              <td className="td-rent">可租賃可購置</td>
              <td className="imgContainer">
                <img
                  src={tool1}
                  onClick={() => openModal(tool1)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "1" }}
                ></img>
              </td>
            </tr>
            <tr>
              <td className="td-name">便盆椅</td>
              <td className="td-desc">
                方便使用者如廁，對於有跌倒風險的長輩來說幫助很大，通常會放於床邊方便使用
                <br />
                有輪子的甚至可以將行動不便的長輩直接推至浴室洗澡
              </td>
              <td className="td-rent">限購置</td>
              <td className="imgContainer">
                <img
                  src={tool2}
                  onClick={() => openModal(tool2)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">沐浴椅</td>
              <td className="td-desc">
                方便行動不便的長輩在浴室可以坐著洗澡，相較於坐在馬桶上，有靠背的洗澡椅更加安全
              </td>
              <td className="td-rent">限購置</td>
              <td className="imgContainer">
                <img
                  src={tool3}
                  onClick={() => openModal(tool3)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">單拐</td>
              <td className="td-desc">
                讓行動不便的長輩做支撐，可避免跌倒的發生 <br />
                依照身形、身高差異選取不同的尺寸，若有問題可諮詢專業老師
              </td>
              <td className="td-rent">限購置</td>
              <td className="imgContainer">
                <img
                  src={tool4}
                  onClick={() => openModal(tool4)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">助行器</td>
              <td className="td-desc">
                相較於單拐為更加安全的輔具 <br />
                可選配加裝輪子或選擇有輪子的款式，使用起來會更加安全穩固
              </td>
              <td className="td-rent">限購置</td>
              <td className="imgContainer">
                <img
                  src={tool5}
                  onClick={() => openModal(tool5)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">移位腰帶</td>
              <td className="td-desc">
                讓照顧者使用，更方便做移位的動作 <br />
                將腰帶穿在被照顧者的身上，雙腳跨過繩帶，兩側的把手讓照顧者抓取便於轉移位
              </td>
              <td className="td-rent">限購置</td>
              <td className="imgContainer">
                <img
                  src={tool6}
                  onClick={() => openModal(tool6)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">電動床</td>
              <td className="td-desc">
                具有升降功能的電動床，讓照顧這件事更加得心應手
                <br />
                移位時可將床降低，餵食前將床升高並讓床頭抬起
              </td>
              <td className="td-rent">可租賃可購置</td>
              <td className="imgContainer">
                <img
                  src={tool7}
                  onClick={() => openModal(tool7)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
            <tr>
              <td className="td-name">爬梯機</td>
              <td className="td-desc">
                協助行動不便及體重較重的長輩完成上下樓梯的動作
              </td>
              <td className="td-rent">限租賃</td>
              <td className="imgContainer">
                <img
                  src={tool8}
                  onClick={() => openModal(tool8)}
                  alt="圖片"
                  style={{ zIndex: isDisplay ? "-3" : "" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EComponents;
