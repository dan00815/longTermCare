import React from "react";
import { Link } from "react-router-dom";

const BA15 = ({ returnArrow }) => {
  return (
    <div className="BA-profile-container">
      <h1>個別服務詳細內容</h1>

      <div className="BA-profile">
        <div className="B-NavBar">
          <div>其他相關服務</div>
          <button>
            <Link to="/BA16">代購或代領或代送服務</Link>
          </button>
          <button>
            <Link to="/BA02">基本日常照顧</Link>
          </button>
          <button>
            <Link to="/BA07">協助沐浴及洗頭</Link>
          </button>
          <button>
            <Link to="/BA18">安全看視</Link>
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
            <td>BA15</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>家務協助</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.主要協助家中環境之基本清潔
              <br />
              2.本組合會依是否獨居分為兩種狀況
              <br />
              3.獨居長輩：整體居家生活空間之清潔，含洗曬衣物、地板掃拖，臥房整理，整體範圍較廣
              <br />
              4.非獨居長輩(有同住者)：以睡眠及主要生活空間之清潔為主，僅包含長輩臥房之整理、主要活動空間之地板掃拖及長輩衣物之洗曬
              <br />
              5.上述長輩主要生活空間會依照實際狀況不同而界定，原則上排除住家的公共空間
              <br />
              6.衣物之送洗(含自助洗)亦包含在該項目中
              <br />
              7.嚴禁做非上述所列之家務部分，如大掃除、跪著擦地、爬高清潔天花板或擦抽油煙機等危險行為
              <br />
              8.每單位至少需服務30分鐘
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA15;
