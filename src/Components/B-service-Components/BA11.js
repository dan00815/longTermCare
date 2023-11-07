import React from "react";
import { Link } from "react-router-dom";

const BA11 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA10">翻身拍背</Link>
          </button>
          <button>
            <Link to="/BA18">安全看視</Link>
          </button>
          <button>
            <Link to="/BA20">陪伴服務</Link>
          </button>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA15">家務協助</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA11</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>肢體關節活動</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助長輩做上下肢運動
              <br />
              2.該組合執行方式包含被動執行上下肢運動、督促長輩進行主動運動、進行站立練習等
              <br />
              3.實際執行需依照長輩身體狀況、體力進行調整及隨時留意長輩能負荷之程度安排休息時間
              <br />
              4.被動運動以上下肢各關節活動為主，包含:肩關節、趾關節、腕關節、肘關節、膝關節、踝關節、髖關節
              <br />
              5.該組合嚴禁執行按摩行為
              <br />
              6.被動運動之相關操作方式依照衛福部制定之指引執行
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA11;
