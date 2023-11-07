import React from "react";
import { Link } from "react-router-dom";

const BA07 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA01">基本身體清潔</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA11">肢體關節活動</Link>
          </button>
          <button>
            <Link to="/BA10">翻身拍背</Link>
          </button>
          <button>
            <Link to="/BA20">陪伴服務</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA07</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>協助沐浴及洗頭</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.協助長輩至浴室洗澡
              <br />
              2.包含協助或引導至浴廁、穿脫衣服、全身淋浴、坐浴或盆浴、洗頭、排泄物清理（含當次更換尿片）、浴廁之事前準備及事後清理。
              <br />
              3.每次沐浴完畢後，浴室地板拖乾也包含在該服務內容
              <br />
              4.同時段不可再執行BA01
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA07;
