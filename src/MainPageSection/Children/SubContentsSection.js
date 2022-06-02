import React from "react";
import styled, { css } from "styled-components";

import advertisementImg01 from "../../img/banner_micro_7mmc.jpg";
import advertisementImg02 from "../../img/banner_gmaster.jpg";

const AdvertisementManager = css`
  width: 1180px;
  height: 254px;
  background: ${(props) => props.background};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    height: 154px;
  }
`;
const ListManager = css`
  ul {
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 960px) {
      margin-top: 10px;
      padding-left: 5px;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    li {
      &:nth-child(1) {
        padding-top: 56px;
        color: #ccc;
        font-size: 1.125em;
        @media (max-width: 960px) {
          font-size: 0.8em;
        }
      }
      &:nth-child(2) {
        color: #ffffff;
        font-size: 2.8125em;
        font-weight: 600;
        @media (max-width: 960px) {
          font-size: 1.5em;
        }
      }
      &:nth-child(3) {
        padding-top: 32px;
        color: #e75300;
        font-weight: 600;
        font-size: 1.125em;
        @media (max-width: 960px) {
          padding-top: 12px;
          padding-right: 10px;
          display: flex;
          align-items: center;
          justify-content: end;
          font-size: 0.8em;
        }
      }
    }
  }
`;
const ALPHA_MAIN_SUB_CONTENTS_SECTION = styled.section`
  height: 508px;
  background-color: #03010f;

  @media (max-width: 960px) {
    height: 320px;
  }
  div.advertisement_layout {
    width: 1180px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 100%;
    }
    div.advertisement_group01 {
      background: url(${advertisementImg01});
      ${AdvertisementManager}
      ${ListManager}
    }
    div.advertisement_group02 {
      background: url(${advertisementImg02});
      ${AdvertisementManager}
      ${ListManager}
    }
  }
`;

const Img = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 10px;
`;

/*<---------- 컴포넌트 ----------->*/

const SubContentsSection = () => {
  return (
    <ALPHA_MAIN_SUB_CONTENTS_SECTION>
      <div className="advertisement_layout">
        <div className="advertisement_group01">
          <ul>
            <li>원핸드 컴팩트 풀프레임</li>
            <li>α7c</li>
            <li>
              자세히보기
              <Img src={require("../../img/arrow.png").default} />
            </li>
          </ul>
        </div>
        <div className="advertisement_group02">
          <ul>
            <li>미래형 렌즈의 완성</li>
            <li>G Master</li>
            <li>
              자세히보기
              <Img src={require("../../img/arrow.png").default} />
            </li>
          </ul>
        </div>
      </div>
    </ALPHA_MAIN_SUB_CONTENTS_SECTION>
  );
};

export default SubContentsSection;
