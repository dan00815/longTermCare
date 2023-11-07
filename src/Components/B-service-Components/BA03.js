import React from "react";
import { Link } from "react-router-dom";

const BA03 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA04">協助進食或管灌</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA10">翻身拍背</Link>
          </button>
          <button>
            <Link to="/BA11">肢體關節活動</Link>
          </button>
          <button>
            <Link to="/BA16">代購或代領或代送服務</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA03</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>測量生命徵象</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.測量長輩之血壓、體溫、脈搏及呼吸。
              <br />
              2.需每次量測後記錄及異常時轉知家屬
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA03;
