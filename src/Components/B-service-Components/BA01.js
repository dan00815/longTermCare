import React from "react";
import { Link } from "react-router-dom";

const BA01 = ({ returnArrow }) => {
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
            <Link to="/BA02">基本身體清潔</Link>
          </button>
          <button>
            <Link to="/BA20">陪伴服務</Link>
          </button>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA12">協助上下樓梯</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA01</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>基本身體清潔</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助床上擦澡及洗頭
              <br />
              2.包含當次梳頭修面、穿脫衣服、排泄物清理、更換尿布、倒尿袋尿桶
              <br />
              3.可依長輩突發性或臨時性之照顧需要，先行臨時提供服務，並應於服務後立即通知個管師及衛生局人員
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA01;
