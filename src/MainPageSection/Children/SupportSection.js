import React from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import iconGroup from "../../img/ico_guide.png";
import { background } from "../style/StyleMainPage";
const ALPHA_MAIN_SUPPORT_SECTION = styled.section`
  height: 570px;
  background-color: #f1f5f9;
  @media (max-width: 960px) {
    height: 500px;
  }
`;
const SUPPORT_SECTION_TITLE_GROUP = styled.div`
  padding-top: 130px;
  text-align: center;
  @media (max-width: 960px) {
    padding-top: 50px;
  }
`;
const TITLE_GROUP_MAINTITLE = styled.div`
  font-size: 3.25em;
  font-weight: 600;
  @media (max-width: 960px) {
    font-size: 1.8em;
  }
`;
const TITLE_GROUP_DESC = styled.div`
  padding-top: 28px;
  font-weight: 200;
  font-size: 0.9em;
  @media (max-width: 960px) {
    padding-top: 18px;
  }
`;
const SUPPORT_SECTION_SUPPORT_MENU_LAYOUT = styled.div`
  padding-top: 64px;
  @media (max-width: 960px) {
    display: none;
  }
`;
const SUPPORT_SECTION_SUPPORT_MENU = styled.ul`
  display: flex;
  justify-content: center;
`;
const SUPPORT_SECTION_SUPPORT_MENU_LIST = styled.li`
  width: 220px;
  height: 150px;
  box-sizing: border-box;
  padding-top: 32px;
  padding-left: 36px;
  font-size: 1.125em;
  font-weight: 600;
  position: relative;
  overflow: hidden;

  &:nth-child(1) {
    background-color: #e75300;
    color: #ffffff;
    margin-right: 30px;
  }
  &:nth-child(2) {
    background-color: #ccc;
    color: #ffffff;
    margin-right: 30px;
  }
  &:nth-child(3) {
    background-color: #222;
    color: #ffffff;
    margin-right: 30px;
  }
  &:nth-child(4) {
    background-color: #efefef;
    color: #222;
  }
`;

const SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LAYOUT = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    padding-top: 64px;
    width: 850px;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`;
const SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU = styled.ul`
  display: none;

  @media (max-width: 960px) {
    display: block;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST = styled.li`
  width: 50%;
  height: 100px;
  box-sizing: border-box;
  padding-top: 12px;
  padding-left: 36px;
  font-size: 1.125em;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  font-size: 0.9em;
  font-weight: 200;

  &:nth-child(1) {
    background-color: #e75300;
    color: #ffffff;
  }
  &:nth-child(2) {
    background-color: #ccc;
    color: #ffffff;
    font-weight: 500;
  }
`;
const SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_02 = styled.ul`
  display: none;
  @media (max-width: 960px) {
    display: block;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST_02 = styled.li`
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100px;
  box-sizing: border-box;
  padding-top: 32px;
  padding-left: 36px;
  font-size: 0.9em;
  font-weight: 200;

  &:nth-child(1) {
    background-color: #222;
    color: #ffffff;
  }
  &:nth-child(2) {
    background-color: #efefef;
    color: #222;
  }
`;

const ICON_BOX = styled.div`
  position: absolute;
  right: 0px;
  bottom: 10px;
  background: url(${iconGroup});
  ${background}
  background-position: 30px 0px;
  width: 80px;
  height: 30px;
`;
const ICON_BOX_02 = styled.div`
  position: absolute;
  right: -30px;
  bottom: 10px;
  background: url(${iconGroup});
  ${background}
  background-position: -50px 0px;
  width: 80px;
  height: 30px;
`;
const ICON_BOX_03 = styled.div`
  position: absolute;
  right: -30px;
  bottom: 10px;
  background: url(${iconGroup});
  ${background}
  background-position: 20px -70px;
  background-position: 10px -50px;
  width: 80px;
  height: 30px;
`;
const ICON_BOX_04 = styled.div`
  position: absolute;
  right: -30px;
  bottom: 10px;
  background: url(${iconGroup});
  ${background}
  background-position: -50px -50px;
  width: 80px;
  height: 30px;
`;
const SupportSection = () => {
  const spanStyle = {
    color: "#E75300",
  };
  const arrowStyle = {
    color: "#ffffff",
    verticalAlign: "middle",
  };
  const arrowStyle02 = {
    color: "#222",
    verticalAlign: "middle",
  };

  return (
    <ALPHA_MAIN_SUPPORT_SECTION>
      <SUPPORT_SECTION_TITLE_GROUP>
        <TITLE_GROUP_MAINTITLE>
          SUPPORT<span style={spanStyle}>.</span>
        </TITLE_GROUP_MAINTITLE>
        <TITLE_GROUP_DESC>
          소니 고객지원에 오신 것을 환영합니다.
        </TITLE_GROUP_DESC>
      </SUPPORT_SECTION_TITLE_GROUP>
      <SUPPORT_SECTION_SUPPORT_MENU_LAYOUT>
        <SUPPORT_SECTION_SUPPORT_MENU>
          <SUPPORT_SECTION_SUPPORT_MENU_LIST>
            정품등록
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX></ICON_BOX>
          </SUPPORT_SECTION_SUPPORT_MENU_LIST>
          <SUPPORT_SECTION_SUPPORT_MENU_LIST>
            A/S안내
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX_02></ICON_BOX_02>
          </SUPPORT_SECTION_SUPPORT_MENU_LIST>
          <SUPPORT_SECTION_SUPPORT_MENU_LIST>
            제품지원
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX_03></ICON_BOX_03>
          </SUPPORT_SECTION_SUPPORT_MENU_LIST>
          <SUPPORT_SECTION_SUPPORT_MENU_LIST>
            구매처 안내
            <MdArrowForwardIos style={arrowStyle02} />
            <ICON_BOX_04></ICON_BOX_04>
          </SUPPORT_SECTION_SUPPORT_MENU_LIST>
        </SUPPORT_SECTION_SUPPORT_MENU>
      </SUPPORT_SECTION_SUPPORT_MENU_LAYOUT>

      <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LAYOUT>
        <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU>
          <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST>
            정품등록
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX></ICON_BOX>
          </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST>
          <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST>
            A/S안내
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX_02></ICON_BOX_02>
          </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST>
        </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU>
        <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_02>
          <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST_02>
            제품지원
            <MdArrowForwardIos style={arrowStyle} />
            <ICON_BOX_03></ICON_BOX_03>
          </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST_02>
          <SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST_02>
            구매처 안내
            <MdArrowForwardIos style={arrowStyle02} />
            <ICON_BOX_04></ICON_BOX_04>
          </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LIST_02>
        </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_02>
      </SUPPORT_SECTION_SUPPORT_RESPONSIVE_MENU_LAYOUT>
    </ALPHA_MAIN_SUPPORT_SECTION>
  );
};
export default SupportSection;
