import React from "react";
import { Link } from "react-router-dom";

const BA16 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA15">家務協助</Link>
          </button>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA05">餐食照顧</Link>
          </button>
          <button>
            <Link to="/BA04">協助進食或管灌</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA16</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>代購或代領或代送服務</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助代購日常生活必須品、餐點或代辦、代送、代領行為
              <br />
              2.包含郵寄、領取補助品、衣物床單送洗(或取回)
              <br />
              3.以代購或代領長輩物品或事項為主，最遠距離為住家起算五公里內
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA16;
