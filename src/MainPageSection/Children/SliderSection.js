import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../../img/img_main72_sjcn.jpg";
import backgroundImg02 from "../../img/img_main960_sjcn.jpg";
const ALPHA_MAIN_SLIDER_SECTION = styled.section`
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
`;

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

const SLIDER_SECTION_IMG = styled.img`
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
`;

const SLIDER_SECTION_IMG960 = styled.img`
  display: none;
  width: 960px;

  @media (max-width: 960px) {
    display: block;

    width: 100%;
  }
`;
const SLIDER_SECTION_TITLE = styled.div`
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
`;
const SLIDER_SECTION_TITLE_H2 = styled.h2`
  font-size: 74px;
  @media (max-width: 1400px) {
    font-size: 34px;
  }
`;
const SLIDER_SECTION_TITLE_H3 = styled.h3`
  font-size: 24px;
  color: #99989e;
  margin-bottom: 40px;
`;
const SLIDER_SECTION_TITLE_DESC = styled.h3`
  margin-bottom: 40px;
  font-size: 1rem;
  color: #99989e;
`;
const SLIDER_SECTION_TITLE_DESC02 = styled.h3`
  font-size: 1rem;
  margin-top: 40px;
  font-weight: 200;
  color: #e75300;
`;
const SLIDER_SECTION_MENU = styled.div`
  position: absolute;
  width: 948px;
  margin-top: -50px;
  right: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const SLIDER_SECTION_MENU_UL = styled.ul`
  display: flex;
`;
const SLIDER_SECTION_MENU_LI = styled.li`
  width: 316px;
  height: 130px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  background-color: #03010f;
  &:nth-child(1) {
    background-color: #e75300;
  }
`;

const SliderSection = () => {
  return (
    <ALPHA_MAIN_SLIDER_SECTION>
      <SLIDER_SECTION_TITLE>
        <SLIDER_SECTION_TITLE_H2>
          α7IV
          <br />
          디지털 언패킹
          <br />
        </SLIDER_SECTION_TITLE_H2>
        <SLIDER_SECTION_TITLE_H3>표준의 초격차</SLIDER_SECTION_TITLE_H3>
        <br />
        <SLIDER_SECTION_TITLE_DESC>
          α7IV를 디지털 언패키에서 자세하게 만나보세요
          <br />
        </SLIDER_SECTION_TITLE_DESC>
        <SLIDER_SECTION_TITLE_DESC02>
          자세히 보기 &rarr;
        </SLIDER_SECTION_TITLE_DESC02>
      </SLIDER_SECTION_TITLE>
      <SLIDER_SECTION_IMG src={backgroundImg} />

      <SLIDER_SECTION_IMG960 src={backgroundImg02}></SLIDER_SECTION_IMG960>

      <SLIDER_SECTION_MENU>
        <SLIDER_SECTION_MENU_UL>
          <SLIDER_SECTION_MENU_LI>
            α7IV <br /> 디지털 언패킹
          </SLIDER_SECTION_MENU_LI>
          <SLIDER_SECTION_MENU_LI>
            What's in
            <br />
            α7IV 디지털 언패킹
          </SLIDER_SECTION_MENU_LI>
          <SLIDER_SECTION_MENU_LI>
            α7 X SEL1635GM <br />
            최우근
          </SLIDER_SECTION_MENU_LI>
        </SLIDER_SECTION_MENU_UL>
      </SLIDER_SECTION_MENU>
    </ALPHA_MAIN_SLIDER_SECTION>
  );
};

export default SliderSection;
