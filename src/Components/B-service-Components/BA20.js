import React from "react";
import { Link } from "react-router-dom";

const BA20 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA07">協助沐浴及洗頭</Link>
          </button>
          <button>
            <Link to="/BA01">基本身體清潔</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA18">安全看視</Link>
          </button>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA20</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>陪伴服務</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.至家中陪伴看視、協助日常生活參與或執行活動
              <br />
              2.包含讀報、讀書、下棋、室內運動、讀畫冊、拼圖、縫紉、練字、言語互動
              <br />
              3.每單位至少需服務30分鐘
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA20;
