import React from "react";
import { Link } from "react-router-dom";

const BA13 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA12">協助上(下)樓梯</Link>
          </button>
          <button>
            <Link to="/BA14">陪同就醫</Link>
          </button>
          <button>
            <Link to="/BA20">陪伴服務</Link>
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
            <td>BA13</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>陪同外出</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.陪同長輩外出確保安全
              <br />
              2.該服務包含外出工具之安排及外出期間之安全
              <br />
              3.外出目的包含購物、社交活動、辦理事務、參與宗教活動、用餐、散步/運動、上下學、復健或洗腎
              <br />
              4.外出交通工具之費用需由使用方負擔
              <br />
              5.每單位至少需服務30分鐘，若有上下樓梯協助需求可與BA12搭配使用
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA13;
