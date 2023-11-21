import React from "react";

import "../style/C/style.css";

const CComponent = () => {
  return (
    <div className="C-container">
      <div className="title-container">
        <h1 className="title-word">C碼/復能服務</h1>
        <div className="title-description">
          由各領域專業老師，透過短期內密集的指導，讓長輩學會自主生活，依照目的不同，規劃個別的訓練目標
        </div>
      </div>

      <main className="C-mainPart">
        {/* 依序是CA07/08 CB01/02/03/04 */}
        <div className="C-div-part odd">
          <div className="code-part">
            <p>
              CA07
              <br />
              日常生活功能恢復
            </p>
          </div>
          <div className="execute-part">
            恢復日常生活功能，訓練長輩完成如自行洗臉、穿脫衣服、上廁所、從床上或椅子上起身、獨自行走
          </div>
        </div>

        <div className="C-div-part even">
          <div className="code-part">
            <p>
              CA08
              <br />
              個別社會
            </p>
          </div>
          <div className="execute-part">
            針對身障者、失智症者，提供個別化服務，主要協助增進社交技巧，能多與人互動及訓練生活自理能力
          </div>
        </div>

        <div className="C-div-part odd">
          <div className="code-part">
            <p>
              CB01
              <br />
              營養照護
            </p>
          </div>
          <div className="execute-part">
            針對營養不良、肌少症或體態異常的長輩，安排營養師替其制定完整的飲食菜單
          </div>
        </div>

        <div className="C-div-part even">
          <div className="code-part">
            <p>
              CB02
              <br />
              進食與吞嚥照護
            </p>
          </div>
          <div className="execute-part">
            針對吞嚥障礙或有嗆咳問題的長輩
            <br />
            安排老師指導吞嚥技巧
          </div>
        </div>

        <div className="C-div-part odd">
          <div className="code-part">
            <p>
              CB03
              <br />
              困擾行為照護
            </p>
          </div>
          <div className="execute-part">
            針對出現日夜顛倒、妄想等困擾行為的長輩，由老師提供照顧方法及引導方式
          </div>
        </div>

        <div className="C-div-part even">
          <div className="code-part">
            <p style={{}}>
              CB04
              <br />
              臥床或活動受限照護
            </p>
          </div>
          <div className="execute-part">
            針對臥床或有多重困擾，像營養不良、身上傷口等長輩，由兩位老師進場協助指導照顧方針
          </div>
        </div>
      </main>
    </div>
  );
};

export default CComponent;
