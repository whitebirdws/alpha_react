import React from "react";
import styled from "styled-components";

import imgIcon from "../img/btn_util.png";

const AlphaMainHeader = styled.header`
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
  nav {
    width: 1920px;
    height: 84px;
    margin: 0 auto;

    @media (max-width: 1920px) {
      width: 100%;
    }
    .nav_children_group {
      color: #ffffff;
      line-height: 84px;
      .nav_children_logo {
        float: left;
        .nav_children_logo_img {
          width: 30px;
          height: 30px;
          margin-left: 20px;
          vertical-align: middle;
        }
      }
    }
    ul.nav_menu_group {
      position: relative;
      left: 50%;
      transform: translate(-50%);
      float: left;
      display: flex;
      li {
        margin-right: 3.2em;
        font-size: 1.125em;
        @media (max-width: 1100px) {
          display: none;
        }
      }
    }
    ul.nav_service_group {
      position: absolute;
      right: 64px;
      display: flex;
      li {
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
          width: 2px;
          height: 20px;
          background-color: #efefef;
          margin-top: 30px;
          margin-right: 15px;
        }
        &:nth-child(3) {
          width: 40px;
          height: 30px;
          display: inline-block;
          background-color: aliceblue;
          background: url(${imgIcon});
          background-repeat: no-repeat;
          background-size: 50%;
          background-position: 2px -39px;
          cursor: pointer;
          margin-top: 30px;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <AlphaMainHeader>
      <nav>
        <div className="nav_children_group ">
          <div className="nav_children_logo">
            <img
              className="nav_children_logo_img "
              alt="logo"
              src={require("../img/logo.png").default}
            />
          </div>
          <ul className="nav_menu_group">
            <li>매거진</li>
            <li>프로</li>
            <li>제품정보</li>
            <li>이벤트</li>
            <li>세미나</li>
            <li>아카데미</li>
          </ul>

          <ul className="nav_service_group">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </AlphaMainHeader>
  );
};

export default Header;
