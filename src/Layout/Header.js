import React from "react";
import styled from "styled-components";

import imgIcon from "../img/btn_util.png";

const ALPHA_MAIN_HEADER = styled.header`
  position: fixed;
  width: 1920px;
  height: 82px;
  background-color: #03010f;
  z-index: 2000;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1920px) {
    width: 100%;
  }
`;
const ALPHA_MAIN_HEADER_NAV = styled.nav`
  width: 1920px;
  margin: 0 auto;
  height: 84px;
  @media (max-width: 1920px) {
    width: 100%;
  }

  /* opacity: 0.7; 가이드 
  background-color: #03010f; */
`;
const NAV_CHILDREN_GROUP = styled.div`
  color: #ffffff;
  line-height: 84px;
`;
const NAV_CHILDREN_LOGO = styled.div`
  float: left;
`;
const NAV_CHILDREN_LOGO_IMG = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  vertical-align: middle;
`;

const NAV_CHILDREN_MENU_GROUP = styled.ul`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  float: left;
  display: flex;
`;
const NAV_CHILDREN_MENU_LIST = styled.li`
  margin-right: 3.2em;
  font-size: 1.125em;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const NAV_CHILDREN_SERVICE_GROUP = styled.ul`
  position: absolute;
  right: 64px;
  display: flex;
`;
const NAV_CHILDREN_SERVICE_LIST = styled.li`
  &:nth-child(1) {
    margin-top: 30px;
    width: 40px;
    height: 30px;
    background: url(${imgIcon});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 2px 2px;
    cursor: pointer;
  }
  &:nth-child(2) {
    margin-top: 30px;
    margin-right: 15px;
    width: 2px;
    height: 20px;
    background-color: #efefef;
  }
  &:nth-child(3) {
    margin-top: 30px;
    width: 40px;
    height: 30px;
    display: inline-block;
    background-color: aliceblue;
    background: url(${imgIcon});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 2px -39px;
    cursor: pointer;
  }
`;
const SERVICE_IMG = styled.div``;
const SERVICE_IMG02 = styled.div``;
const Header = () => {
  return (
    <ALPHA_MAIN_HEADER>
      <ALPHA_MAIN_HEADER_NAV>
        <NAV_CHILDREN_GROUP className="clearfix">
          <NAV_CHILDREN_LOGO>
            <NAV_CHILDREN_LOGO_IMG
              alt="logo"
              src={require("../img/logo.png").default}
            />
          </NAV_CHILDREN_LOGO>
          <NAV_CHILDREN_MENU_GROUP>
            <NAV_CHILDREN_MENU_LIST>매거진</NAV_CHILDREN_MENU_LIST>
            <NAV_CHILDREN_MENU_LIST>프로</NAV_CHILDREN_MENU_LIST>
            <NAV_CHILDREN_MENU_LIST>제품정보</NAV_CHILDREN_MENU_LIST>
            <NAV_CHILDREN_MENU_LIST>이벤트</NAV_CHILDREN_MENU_LIST>
            <NAV_CHILDREN_MENU_LIST>세미나</NAV_CHILDREN_MENU_LIST>
            <NAV_CHILDREN_MENU_LIST>아카데미</NAV_CHILDREN_MENU_LIST>
          </NAV_CHILDREN_MENU_GROUP>

          <NAV_CHILDREN_SERVICE_GROUP>
            <NAV_CHILDREN_SERVICE_LIST>
              <SERVICE_IMG />
            </NAV_CHILDREN_SERVICE_LIST>
            <NAV_CHILDREN_SERVICE_LIST></NAV_CHILDREN_SERVICE_LIST>
            <NAV_CHILDREN_SERVICE_LIST>
              <SERVICE_IMG02 />
            </NAV_CHILDREN_SERVICE_LIST>
          </NAV_CHILDREN_SERVICE_GROUP>
        </NAV_CHILDREN_GROUP>
      </ALPHA_MAIN_HEADER_NAV>
    </ALPHA_MAIN_HEADER>
  );
};

export default Header;
