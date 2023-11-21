import React, { useState } from "react";
import "../style/B/style.css";
import { Link } from "react-router-dom";
import BAService from "./img/BA-service.jpg";

const BComponent = () => {
  return (
    <div className="B-container">
      <div className="B-title">
        <h1>BA碼/居家服務</h1>
        <div className="B-description">
          到府提供長輩服務，滿足日常需求
          <br />
          諸如準備餐點、幫忙洗澡、陪同外出看診等等，甚至包含整理家務
          <br />
          僅需支付一點點自負額，長照低收者由政府全額負擔
        </div>
        <div className="img-container">
          <img src={BAService} alt="" />
        </div>
      </div>

      <table>
        <tr>
          <th
            colSpan={5}
            style={{
              backgroundColor: "rgba(238, 119, 0, 0.7)",
              fontSize: "1.5rem",
            }}
          >
            長照給付及支付收費標準
          </th>
        </tr>
        <tr>
          <th>代碼</th>
          <th>
            照顧組合
            <br />
            (點選查看詳細內容)
          </th>
          <th>給(支)付價格</th>
          <th>
            自負額16%
            <br />
            (一般戶)
          </th>
          <th>
            自負額5%
            <br />
            (中低收)
          </th>
        </tr>
        <tr>
          <td>BA01</td>
          <td>
            <Link to="/BA01">基本身體清潔</Link>
          </td>
          <td>260</td>
          <td>41</td>
          <td>13</td>
        </tr>

        <tr>
          <td>BA02</td>
          <td>
            <Link to="/BA02">基本日常照顧</Link>
          </td>
          <td>195</td>
          <td>31</td>
          <td>9</td>
        </tr>

        <tr>
          <td>BA03</td>
          <td>
            <Link to="/BA03">測量生命徵象</Link>
          </td>
          <td>35</td>
          <td>5</td>
          <td>1</td>
        </tr>
        <tr>
          <td>BA04</td>
          <td>
            <Link to="/BA04">協助進食或管灌</Link>
          </td>
          <td>130</td>
          <td>20</td>
          <td>6</td>
        </tr>
        <tr>
          <td>BA05</td>
          <td>
            <Link to="/BA05">餐食照顧</Link>
          </td>
          <td>310</td>
          <td>49</td>
          <td>15</td>
        </tr>
        <tr>
          <td>BA07</td>
          <td>
            <Link to="/BA07">協助沐浴及洗頭</Link>
          </td>
          <td>325</td>
          <td>52</td>
          <td>16</td>
        </tr>
        <tr>
          <td>BA10</td>
          <td>
            <Link to="/BA10">翻身拍背</Link>
          </td>
          <td>155</td>
          <td>24</td>
          <td>7</td>
        </tr>
        <tr>
          <td>BA11</td>
          <td>
            <Link to="/BA11">肢體關節活動</Link>
          </td>
          <td>195</td>
          <td>31</td>
          <td>9</td>
        </tr>
        <tr>
          <td>BA12</td>
          <td>
            <Link to="/BA12">協助上(下)樓梯</Link>
          </td>
          <td>130</td>
          <td>20</td>
          <td>6</td>
        </tr>
        <tr>
          <td>BA13</td>
          <td>
            <Link to="/BA13">陪同外出</Link>
          </td>
          <td>195</td>
          <td>31</td>
          <td>9</td>
        </tr>
        <tr>
          <td>BA14</td>
          <td>
            <Link to="/BA14">陪同就醫</Link>
          </td>
          <td>685</td>
          <td>109</td>
          <td>34</td>
        </tr>
        <tr>
          <td>BA15</td>
          <td>
            <Link to="/BA15">家務協助</Link>
          </td>
          <td>195</td>
          <td>31</td>
          <td>9</td>
        </tr>
        <tr>
          <td>BA16</td>
          <td>
            <Link to="/BA16">代購或代領或代送服務</Link>
          </td>
          <td>130</td>
          <td>20</td>
          <td>6</td>
        </tr>
        <tr>
          <td>BA18</td>
          <td>
            <Link to="/BA18">安全看視</Link>
          </td>
          <td>200</td>
          <td>32</td>
          <td>10</td>
        </tr>
        <tr>
          <td>BA20</td>
          <td>
            <Link to="/BA20">陪伴服務</Link>
          </td>
          <td>175</td>
          <td>28</td>
          <td>8</td>
        </tr>
      </table>
    </div>
  );
};

export default BComponent;
