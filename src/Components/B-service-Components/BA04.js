import React from "react";
import { Link } from "react-router-dom";

const BA04 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA05">餐食照顧</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA20">陪伴服務</Link>
          </button>
          <button>
            <Link to="/BA03">測量生命徵象</Link>
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
            <td>BA04</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>協助進食或管灌</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助餵飯、鼻胃管進食協助、加熱餐點(不開火)
              <br />
              2.包含當次進食環境的準備、餐具準備及餐後收拾，該服務亦包含不需使用瓦斯爐之餐點加熱方式，如:電鍋加熱、果汁機攪打、食物調理機等
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA04;
