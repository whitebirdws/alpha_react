import React from "react";
import styled from "styled-components";
import { background02 } from "../style/StyleMainPage";
import advertisementImg01 from "../../img/banner_micro_7mmc.jpg";
import advertisementImg02 from "../../img/banner_gmaster.jpg";

const ALPHA_MAIN_SUB_CONTENTS_SECTION = styled.section`
  height: 508px;
  background-color: #03010f;

  @media (max-width: 960px) {
    height: 320px;
  }
`;
const SUB_CONTENTS_SECTION_ADVERTISEMENT_LAYOUT = styled.div`
  width: 1180px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const ADVERTISEMENT_GROUP01 = styled.div`
  width: 1180px;
  height: 254px;
  background: url(${advertisementImg01});
  ${background02}
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    height: 154px;
  }
`;
const ADVERTISEMENT_GROUP02 = styled.div`
  width: 1180px;
  height: 254px;
  background: url(${advertisementImg02});
  ${background02}
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    height: 154px;
  }
`;
const ADVERTISEMENT_GROUP = styled.ul`
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 960px) {
    margin-top: 10px;
    padding-left: 5px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const ADVERTISEMENT_GROUP_LIST = styled.li`
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
`;
const Img = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 10px;
`;
const SubContentsSection = () => {
  return (
    <ALPHA_MAIN_SUB_CONTENTS_SECTION>
      <SUB_CONTENTS_SECTION_ADVERTISEMENT_LAYOUT>
        <ADVERTISEMENT_GROUP01>
          <ADVERTISEMENT_GROUP>
            <ADVERTISEMENT_GROUP_LIST>
              원핸드 컴팩트 풀프레임
            </ADVERTISEMENT_GROUP_LIST>
            <ADVERTISEMENT_GROUP_LIST>α7c</ADVERTISEMENT_GROUP_LIST>
            <ADVERTISEMENT_GROUP_LIST>
              자세히보기
              <Img src={require("../../img/arrow.png").default} />
            </ADVERTISEMENT_GROUP_LIST>
          </ADVERTISEMENT_GROUP>
        </ADVERTISEMENT_GROUP01>
        <ADVERTISEMENT_GROUP02>
          <ADVERTISEMENT_GROUP>
            <ADVERTISEMENT_GROUP_LIST>
              미래형 렌즈의 완성
            </ADVERTISEMENT_GROUP_LIST>
            <ADVERTISEMENT_GROUP_LIST>G Master</ADVERTISEMENT_GROUP_LIST>
            <ADVERTISEMENT_GROUP_LIST>
              자세히보기
              <Img src={require("../../img/arrow.png").default} />
            </ADVERTISEMENT_GROUP_LIST>
          </ADVERTISEMENT_GROUP>
        </ADVERTISEMENT_GROUP02>
      </SUB_CONTENTS_SECTION_ADVERTISEMENT_LAYOUT>
    </ALPHA_MAIN_SUB_CONTENTS_SECTION>
  );
};

export default SubContentsSection;
