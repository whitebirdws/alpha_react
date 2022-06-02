import React from "react";
import styled, { css } from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import iconGroup from "../../img/ico_guide.png";

const IconBoxManager = css`
  position: absolute;
  right: ${(props) => props.right || "0px"};
  bottom: ${(props) => props.bottom || "0px"};
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
  background: url(${iconGroup});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${(props) => props.backgroundposition || "0px 0px"};
`;
const IconBox1 = css`
  ${IconBoxManager}
  right: 0px;
  width: 80px;
  height: 30px;
  bottom: 10px;
  background-position: 30px 0px;
`;
const IconBox2 = css`
  ${IconBoxManager}
  right: -30px;
  bottom: 10px;
  width: 80px;
  height: 30px;
  background-position: -50px 0px;
`;
const IconBox3 = css`
  ${IconBoxManager}
  right: -30px;
  bottom: 10px;
  width: 80px;
  height: 30px;
  background-position: 10px -50px;
`;
const IconBox4 = css`
  ${IconBoxManager}
  right: -30px;
  bottom: 10px;
  width: 80px;
  height: 30px;
  background-position: -50px -50px;
`;

const ALPHA_MAIN_SUPPORT_SECTION = styled.section`
  height: 570px;
  background-color: #f1f5f9;
  @media (max-width: 960px) {
    height: 500px;
  }
  div.support_title_group {
    padding-top: 130px;
    text-align: center;
    @media (max-width: 960px) {
      padding-top: 50px;
    }
    div.title_group_maintitle {
      font-size: 3.25em;
      font-weight: 600;
      @media (max-width: 960px) {
        font-size: 1.8em;
      }
      span {
        color: #e75300;
      }
    }
    div.title_group_desc {
      padding-top: 28px;
      font-weight: 200;
      font-size: 0.9em;
      @media (max-width: 960px) {
        padding-top: 18px;
      }
    }
  }
  div.support_menu_layout {
    padding-top: 64px;
    @media (max-width: 960px) {
      display: none;
    }
    ul.support_menu {
      display: flex;
      justify-content: center;
      li {
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
          div.icon_box {
            ${IconBox1}
          }
        }
        &:nth-child(2) {
          background-color: #ccc;
          color: #ffffff;
          margin-right: 30px;
          div.icon_box02 {
            ${IconBox2}
          }
        }
        &:nth-child(3) {
          background-color: #222;
          color: #ffffff;
          margin-right: 30px;
          div.icon_box03 {
            ${IconBox3}
          }
        }
        &:nth-child(4) {
          background-color: #efefef;
          color: #222;
          div.icon_box04 {
            ${IconBox4}
          }
        }
      }
    }
  }
  div.support_responsive_menu_layout {
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
    ul.support_responsive_menu {
      display: none;
      @media (max-width: 960px) {
        display: block;
        display: flex;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
      }
      li {
        position: relative;
        width: 50%;
        height: 100px;
        box-sizing: border-box;
        font-size: 0.9em;
        font-weight: 200;
        font-weight: 600;
        overflow: hidden;
        padding-top: 12px;
        padding-left: 36px;

        &:nth-child(1) {
          background-color: #e75300;
          color: #ffffff;
        }
        &:nth-child(2) {
          background-color: #ccc;
          color: #ffffff;
          font-weight: 500;
        }
      }
    }
    ul.support_responsive_menu02 {
      display: none;
      @media (max-width: 960px) {
        display: block;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
      }
      li {
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
          div.icon_box {
          }
        }
        &:nth-child(2) {
          background-color: #efefef;
          color: #222;
        }
      }
    }
  }
`;

/*<---------- 컴포넌트 ----------->*/

const SupportSection = () => {
  const arrowStyle = {
    color: "#ffffff",
    marginTop: "-2px",
    verticalAlign: "middle",
  };
  const arrowStyle02 = {
    color: "#222",
    marginTop: "-2px",
    verticalAlign: "middle",
  };

  return (
    <ALPHA_MAIN_SUPPORT_SECTION>
      <div className="support_title_group">
        <div className="title_group_maintitle">
          SUPPORT<span>.</span>
        </div>
        <div className="title_group_desc">
          소니 고객지원에 오신 것을 환영합니다.
        </div>
      </div>
      <div className="support_menu_layout">
        <ul className="support_menu">
          <li>
            정품등록
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box"></div>
          </li>
          <li>
            A/S안내
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box02"></div>
          </li>
          <li>
            제품지원
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box03"></div>
          </li>
          <li>
            구매처 안내
            <MdArrowForwardIos style={arrowStyle02} />
            <div className="icon_box04"></div>
          </li>
        </ul>
      </div>

      <div className="support_responsive_menu_layout">
        <ul className="support_responsive_menu">
          <li>
            정품등록
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box"></div>
          </li>
          <li>
            A/S안내
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box02"></div>
          </li>
        </ul>
        <ul className="support_responsive_menu02">
          <li>
            제품지원
            <MdArrowForwardIos style={arrowStyle} />
            <div className="icon_box03"></div>
          </li>
          <li>
            구매처 안내
            <MdArrowForwardIos style={arrowStyle02} />
            <div className="icon_box04"></div>
          </li>
        </ul>
      </div>
    </ALPHA_MAIN_SUPPORT_SECTION>
  );
};
export default SupportSection;
