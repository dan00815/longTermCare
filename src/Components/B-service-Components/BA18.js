import React from "react";
import { Link } from "react-router-dom";

const BA18 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA02">陪伴服務</Link>
          </button>
          <button>
            <Link to="/BA07">協助沐浴及洗頭</Link>
          </button>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA14">陪同就醫</Link>
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
            <td>BA18</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>安全看視</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.至家中陪伴、看視安全或協助日常生活處理
              <br />
              2.該組合限心智障礙者或嚴重失智症者使用，主要內容與陪伴服務相同
              <br />
              3.每單位至少需服務30分鐘
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA18;
