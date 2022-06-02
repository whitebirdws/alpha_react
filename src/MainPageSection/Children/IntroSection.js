import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../../img/img_main72_sjcn.jpg";
import backgroundImg02 from "../../img/img_main960_sjcn.jpg";
const bounce = keyframes`
  0% {
    transform: translateX(10px);
    opacity: 0.1;
  }
  50% {
    transform: translateX(50px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);

  }
`;
const ALPHA_MAIN_INTRO_SECTION = styled.section`
  width: 1920px;
  background-color: #03010f;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1920px) {
    width: 100%;
  }
  @media (max-width: 1400px) {
    height: 600px;
  }
  @media (max-width: 960px) {
    overflow: hidden;
    height: 700px;
  }
  div.intro_title {
    position: absolute;
    z-index: 30;

    color: #efefef;
    margin-top: 200px;
    margin-left: 300px;
    @media (max-width: 1400px) {
      margin-left: 40px;
    }
    @media (max-width: 960px) {
      margin-top: 300px;
    }
    h2.intro_title_h2 {
      font-size: 4.111em;
      @media (max-width: 1400px) {
        font-size: 1.889em;
      }
    }
    h3.intro_title_subtitle {
      font-size: 1.333em;
      color: #99989e;
      margin-bottom: 30px;
    }
    h3.intro_title_desc {
      color: #99989e;
      font-size: 1em;
      margin-bottom: 40px;
    }
    h3.intro_title_desc02 {
      color: #e75300;
      font-size: 1rem;
      font-weight: 200;
      margin-top: 40px;
    }
  }
  img.intro_img {
    width: 1920px;
    height: 830px;

    margin: 0 auto;
    animation: ${bounce} 2s linear;

    @media (max-width: 1920px) {
      width: 100%;
    }
    @media (max-width: 1400px) {
      height: 600px;
    }
    @media (max-width: 1200px) {
      height: 400px;
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  img.intro_img960 {
    display: none;
    width: 960px;

    @media (max-width: 960px) {
      display: block;

      width: 100%;
    }
  }
  div.intro_menu {
    position: absolute;
    width: 948px;
    margin-top: -50px;
    right: 0;
    @media (max-width: 1200px) {
      display: none;
    }
    ul {
      display: flex;
      li {
        width: 316px;
        height: 130px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        background-color: #03010f;
        &:nth-child(1) {
          background-color: #e75300;
        }
      }
    }
  }
`;

/*<---------- 컴포넌트 ----------->*/

const IntroSection = () => {
  return (
    <ALPHA_MAIN_INTRO_SECTION>
      <div className="intro_title">
        <h2 className="intro_title_h2">
          α7IV
          <br />
          디지털 언패킹
          <br />
        </h2>
        <h3 className="intro_title_subtitle">표준의 초격차</h3>
        <br />
        <h3 className="intro_title_desc">
          α7IV를 디지털 언패키에서 자세하게 만나보세요
          <br />
        </h3>
        <h3 className="intro_title_desc02">자세히 보기 &rarr;</h3>
      </div>
      <img className="intro_img" src={backgroundImg} alt="이미지" />

      <img className="intro_img960" src={backgroundImg02} alt="이미지02" />

      <div className="intro_menu">
        <ul>
          <li>
            α7IV <br /> 디지털 언패킹
          </li>
          <li>
            What's in
            <br />
            α7IV 디지털 언패킹
          </li>
          <li>
            α7 X SEL1635GM <br />
            최우근
          </li>
        </ul>
      </div>
    </ALPHA_MAIN_INTRO_SECTION>
  );
};

export default IntroSection;
