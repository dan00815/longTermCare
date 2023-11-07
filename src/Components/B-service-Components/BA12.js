import React from "react";
import { Link } from "react-router-dom";

const BA12 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA14">陪同就醫</Link>
          </button>
          <button>
            <Link to="/BA18">安全看視</Link>
          </button>
          <button>
            <Link to="/BA16">代購或代領或代送服務</Link>
          </button>
          <button>
            <Link to="/BA11">肢體關節活動</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA12</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>協助上(下)樓梯</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助長輩上下樓梯之安全
              <br />
              2.包含協助輪椅搬運上(下)樓梯，長輩住家需至少在二樓(含)以上方能申請，此服務主要為留意有移位或上下樓梯問題之長輩，確保其外出的安全性
              <br />
              3.住家有電梯者不適用此項目
              <br />
              4.每單位僅包含協助上(下)樓梯一趟
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA12;
