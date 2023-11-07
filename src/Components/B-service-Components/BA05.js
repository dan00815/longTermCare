import React from "react";
import { Link } from "react-router-dom";

const BA05 = ({ returnArrow }) => {
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
            <Link to="/BA15">家務協助</Link>
          </button>
          <button>
            <Link to="/BA18">安全看視</Link>
          </button>
          <button>
            <Link to="/BA07">協助沐浴及洗頭</Link>
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
            <td>BA05</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>餐食照顧</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助長輩煮飯
              <br />
              2.包含當餐食材之處理、備餐後用具之清潔及善後工作，備餐一次為一組合。
              <br />
              3.份量原則上以長輩當餐可食用完為主，如三道菜或兩菜一湯，每道份量約1至1.5人份
              <br />
              4.烹調方式以煎、炒、蒸等方便料理之方式為主，不可執行過於複雜或需花費過久之烹調方式
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA05;
