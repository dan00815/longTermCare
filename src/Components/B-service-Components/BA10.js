import React from "react";
import { Link } from "react-router-dom";

const BA10 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA02">基本身體清潔</Link>
          </button>
          <button>
            <Link to="/BA11">肢體關節活動</Link>
          </button>
          <button>
            <Link to="/BA03">測量生命徵象</Link>
          </button>
          <button>
            <Link to="/BA12">協助上(下)樓梯</Link>
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
            <td>BA10</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>翻身拍背</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.協助長輩扣背、震顫、翻身，及相關照顧指導，實際執行需視長輩身體狀況調整力道大小
              <br />
              2.幫助長輩拍痰及促進血液循環
              <br />
              3.相關操作方式依照衛福部制定之指引執行
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA10;
