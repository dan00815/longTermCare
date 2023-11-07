import React from "react";
import { Link } from "react-router-dom";

const BA14 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA13">陪同外出</Link>
          </button>
          <button>
            <Link to="/BA12">協助上(下)樓梯</Link>
          </button>
          <button>
            <Link to="/BA16">代購或代領或代送服務</Link>
          </button>
          <button>
            <Link to="/BA03">測量生命徵象</Link>
          </button>
          <button>
            <Link to="/BA07">協助沐浴及洗頭</Link>
          </button>

          <Link to="/B" style={{ width: "60px" }}>
            <img src={returnArrow} alt="錯誤X" title="返回" />
          </Link>
        </div>

        <table className="BA-profile-table">
          <tr>
            <td className="profile-title">代號</td>
            <td>BA14</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>陪同就醫</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要陪同長輩往返醫院就診
              <br />
              2.包含協助掛號(含預約)、長輩外出前之準備、陪同就診、聽取及轉知醫囑
              <br />
              3.外出交通工具及就診之費用需由使用方負擔
              <br />
              4.每單位至少需服務90分鐘，若看診時間超過則與BA13一同搭配使用
              <br />
              5.可依長輩突發性或臨時性之照顧需要，先行臨時提供服務，並應於服務後立即通知個管師及衛生局人員
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA14;
