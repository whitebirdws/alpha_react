import React from "react";
import styled from "styled-components";
import { background, background02, snsIconSize } from "./style/StyleMainPage";
import icon01 from "../img/ico_sns_facebook.png";
import icon02 from "../img/ico_sns_instar.png";
import icon03 from "../img/ico_sns_youtube.png";
import icon04 from "../img/ico_sns_blog.png";
import icon05 from "../img/ico_sns_post.png";
import icon06 from "../img/ico_sns_band.png";

import familySiteIcon01 from "../img/triangle_family.png";
import familySiteIcon02 from "../img/arrow_family.png";

const ALPHA_MAIN_FOOTER = styled.footer`
  background-color: #03010f;

  @media (max-width: 960px) {
    height: 500px;
  }
  /* opacity: 0.5;가이드
  background-color: #d7dbff; */
`;
const MAIN_FOOTER_CONTAINER = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 1170px) {
    width: 500px;
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const MAIN_FOOTER_ADDRESS_CONTAINER = styled.div`
  padding-top: 45px;
`;
const ADDRESS_TITLE_GROUP = styled.ul`
  display: flex;
`;
const ADDRESS_TITLE_LIST = styled.li`
  color: #ffffff;
  font-size: 0.8em;
  margin-right: 10px;
  &:nth-child(3) {
    color: #e75300;
  }
`;
const ADDRESS_DESC_GROUP = styled.ul`
  padding-top: 40px;
`;
const ADDRESS_DESC_LIST = styled.li`
  color: #ccc;
  font-size: 0.8em;
`;

const MAIN_FOOTER_SUBLAYOUT = styled.div`
  position: absolute;
  padding-top: 45px;
  right: 0;
  @media (max-width: 1200px) {
    position: static;
    background-color: #03010f;
  }
`;
const MAIN_FOOTER_FAMILY_SITE_CONTAINER = styled.div``;

const FAMILY_SITE_GROUP_CONTAINER = styled.ul`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const FAMILY_SITE_GROUP_LIST = styled.li`
  background-color: #6f6f75;
  box-sizing: border-box;
  color: #fff;
  width: 240px;
  height: 40px;
  margin-right: 5px;
  font-size: 0.8em;
  padding-left: 16px;
  line-height: 40px;
  position: relative;
  @media (max-width: 960px) {
    width: 500px;
    margin-top: 5px;
    text-align: center;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const FAMILY_SITE_ICON = styled.div`
  width: 8px;
  height: 8px;
  background: url(${familySiteIcon01});
  ${background02}
  position:absolute;
  right: 10px;
  top: 18px;
  transform: rotate(90deg);
`;
const FAMILY_SITE_ICON02 = styled.div`
  width: 8px;
  height: 8px;
  background: url(${familySiteIcon02});
  ${background02}
  position:absolute;
  right: 10px;
  top: 18px;
`;

const MAIN_FOOTER_SNS_GROUP_CONTAINER = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;
const MAIN_FOOTER_SNS_GROUP_CONTAINER_960 = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    margin-bottom: 20px;
  }
`;
const SNS_GROUP_COLLECTION = styled.ul`
  display: flex;
  width: 500px;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
const SNS_GROUP_COLLECTION_LIST = styled.li`
  margin-top: 28px;
  &:nth-child(1) {
    background: url(${icon01});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon01});
      background-position: 40px 0px;
    }
  }
  &:nth-child(2) {
    background: url(${icon02});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon02});
      background-position: 40px 0px;
    }
  }
  &:nth-child(3) {
    background: url(${icon03});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon03});
      background-position: 40px 0px;
    }
  }
  &:nth-child(4) {
    background: url(${icon04});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon04});
      background-position: 40px 0px;
    }
  }
  &:nth-child(5) {
    background: url(${icon05});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon05});
      background-position: 40px 0px;
    }
  }
  &:nth-child(6) {
    background: url(${icon06});
    ${background};
    ${snsIconSize}
    &:hover {
      background: url(${icon06});
      background-position: 40px 0px;
    }
  }
`;

const Footer = () => {
  return (
    <ALPHA_MAIN_FOOTER>
      <MAIN_FOOTER_CONTAINER>
        <MAIN_FOOTER_ADDRESS_CONTAINER>
          <ADDRESS_TITLE_GROUP>
            <ADDRESS_TITLE_LIST>이용약관</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>|</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>개인정보처리방침</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>|</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>상담안내</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>|</ADDRESS_TITLE_LIST>
            <ADDRESS_TITLE_LIST>사이트맵</ADDRESS_TITLE_LIST>
          </ADDRESS_TITLE_GROUP>
          <ADDRESS_DESC_GROUP>
            <ADDRESS_DESC_LIST>
              사업장주소 : 서울특별시 영등포구 국제금융로 10 원아이에프씨 24F
            </ADDRESS_DESC_LIST>
            <ADDRESS_DESC_LIST>사업자등록번호 : 106-81-23810</ADDRESS_DESC_LIST>
            <ADDRESS_DESC_LIST>
              통신판매번호 2012-서울영등포-1038 소니코리아(주)
            </ADDRESS_DESC_LIST>
            <ADDRESS_DESC_LIST>
              대표이사 : Okura Kikuo개인정보관리책임자 : Okura Kikuo
            </ADDRESS_DESC_LIST>
            <ADDRESS_DESC_LIST>
              TEL : 소니코리아 고객 센터 1588-0911E-MAIL : cshelp@sony.co.kr
            </ADDRESS_DESC_LIST>
          </ADDRESS_DESC_GROUP>
        </MAIN_FOOTER_ADDRESS_CONTAINER>
        <MAIN_FOOTER_SUBLAYOUT>
          <MAIN_FOOTER_SNS_GROUP_CONTAINER_960>
            <SNS_GROUP_COLLECTION>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
            </SNS_GROUP_COLLECTION>
          </MAIN_FOOTER_SNS_GROUP_CONTAINER_960>
          <MAIN_FOOTER_FAMILY_SITE_CONTAINER>
            <FAMILY_SITE_GROUP_CONTAINER>
              <FAMILY_SITE_GROUP_LIST>
                Sony Family 사이트
                <FAMILY_SITE_ICON></FAMILY_SITE_ICON>
              </FAMILY_SITE_GROUP_LIST>
              <FAMILY_SITE_GROUP_LIST>
                Sony Global Home 바로가기
                <FAMILY_SITE_ICON02></FAMILY_SITE_ICON02>
              </FAMILY_SITE_GROUP_LIST>
            </FAMILY_SITE_GROUP_CONTAINER>
          </MAIN_FOOTER_FAMILY_SITE_CONTAINER>
          <MAIN_FOOTER_SNS_GROUP_CONTAINER>
            <SNS_GROUP_COLLECTION>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
              <SNS_GROUP_COLLECTION_LIST></SNS_GROUP_COLLECTION_LIST>
            </SNS_GROUP_COLLECTION>
          </MAIN_FOOTER_SNS_GROUP_CONTAINER>
        </MAIN_FOOTER_SUBLAYOUT>
      </MAIN_FOOTER_CONTAINER>
    </ALPHA_MAIN_FOOTER>
  );
};

export default Footer;
