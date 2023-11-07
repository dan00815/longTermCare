import React from "react";
import { Link } from "react-router-dom";

const BA02 = ({ returnArrow }) => {
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
            <Link to="/BA05">餐食照顧</Link>
          </button>
          <button>
            <Link to="/BA04">協助進食或管灌</Link>
          </button>
          <button>
            <Link to="/BA15">家務協助</Link>
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
            <td>BA02</td>
          </tr>
          <tr>
            <td className="profile-title">照顧組合</td>
            <td>基本日常照顧</td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description-title">
              組合說明及內容
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="profile-description">
              1.依照長輩需求進行日常之協助
              <br />
              2.包含：協助移位、上下床、刷牙洗臉、穿脫衣服、如廁、換尿布、刮鬍子、修剪指（趾）甲、協助用藥、整理床及更換床單
              <br />
              3.每單位至少需服務30分鐘
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BA02;
