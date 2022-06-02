import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { background, background02, snsIconSize } from "./style/StyleMainPage";
import icon01 from "../img/ico_sns_facebook.png";
import icon02 from "../img/ico_sns_instar.png";
import icon03 from "../img/ico_sns_youtube.png";
import icon04 from "../img/ico_sns_blog.png";
import icon05 from "../img/ico_sns_post.png";
import icon06 from "../img/ico_sns_band.png";

import familySiteIcon01 from "../img/triangle_family.png";
import familySiteIcon02 from "../img/arrow_family.png";
const collectionList = css`
  //mixin
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
const ALPHA_FOOTER = styled.footer`
  background-color: #03010f;
  @media (max-width: 960px) {
    height: 500px;
  }
  .footer_container {
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
    .footer_address_container {
      padding-top: 45px;
      ul.address_title_group {
        display: flex;
        li {
          color: #ffffff;
          font-size: 0.8em;
          margin-right: 10px;
          &:nth-child(3) {
            color: #e75300;
          }
        }
      }
      ul.address_desc_group {
        padding-top: 40px;
        li {
          color: #ccc;
          font-size: 0.8em;
        }
      }
    }
    .footer_sub_layout {
      position: absolute;
      padding-top: 45px;
      right: 0;
      @media (max-width: 1200px) {
        position: static;
        background-color: #03010f;
      }
      .footer_sns_group_container_960 {
        display: none;
        @media (max-width: 960px) {
          display: block;
          margin-bottom: 20px;
        }
        ul.sns_group_collection {
          display: flex;
          width: 500px;
          justify-content: center;
          @media (max-width: 960px) {
            width: 100%;
          }
          li.sns_group_collection_list {
            ${collectionList}
          }
        }
      }
      .footer_family_site_container {
        ul.family_site_group_container {
          display: flex;
          @media (max-width: 960px) {
            flex-direction: column;
            width: 500px;
          }
          @media (max-width: 500px) {
            width: 100%;
          }
          li {
            position: relative;
            width: 240px;
            height: 40px;
            background-color: #6f6f75;
            box-sizing: border-box;
            color: #fff;
            font-size: 0.8em;
            line-height: 40px;
            margin-right: 5px;
            padding-left: 16px;

            @media (max-width: 960px) {
              width: 500px;
              margin-top: 5px;
              text-align: center;
            }
            @media (max-width: 500px) {
              width: 100%;
            }
            .family_site_icon {
              position: absolute;
              right: 10px;
              top: 18px;
              width: 8px;
              height: 8px;
              background: url(${familySiteIcon01});
              ${background02}
              transform: rotate(90deg);
            }
            .family_site_icon02 {
              width: 8px;
              height: 8px;
              background: url(${familySiteIcon02});
              ${background02}
              position:absolute;
              right: 10px;
              top: 18px;
            }
          }
        }
      }
      .footer_sns_group_container {
        @media (max-width: 960px) {
          display: none;
        }
        ul.sns_group_collection {
          display: flex;
          width: 500px;
          justify-content: center;
          @media (max-width: 960px) {
            width: 100%;
          }
          li.sns_group_collection_list {
            ${collectionList}
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const snsCollectionRef = useRef(null);
  const CollectionList = () => {
    return (
      <ul ref={snsCollectionRef} className="sns_group_collection">
        <li className={"sns_group_collection_list"}></li>
        <li className={"sns_group_collection_list"}></li>
        <li className={"sns_group_collection_list"}></li>
        <li className={"sns_group_collection_list"}></li>
        <li className={"sns_group_collection_list"}></li>
        <li className={"sns_group_collection_list"}></li>
      </ul>
    );
  };
  return (
    <ALPHA_FOOTER>
      <div className="footer_container">
        <div className="footer_address_container">
          <ul className="address_title_group">
            <li>이용약관</li>
            <li>|</li>
            <li>개인정보처리방침</li>
            <li>|</li>
            <li>상담안내</li>
            <li>|</li>
            <li>사이트맵</li>
          </ul>
          <ul className="address_desc_group">
            <li>
              사업장주소 : 서울특별시 영등포구 국제금융로 10 원아이에프씨 24F
            </li>
            <li>사업자등록번호 : 106-81-23810</li>
            <li>통신판매번호 2012-서울영등포-1038 소니코리아(주)</li>
            <li>대표이사 : Okura Kikuo개인정보관리책임자 : Okura Kikuo</li>
            <li>
              TEL : 소니코리아 고객 센터 1588-0911E-MAIL : cshelp@sony.co.kr
            </li>
          </ul>
        </div>
        <div className="footer_sub_layout">
          <div className="footer_sns_group_container_960">
            {CollectionList()}
          </div>
          <div className="footer_family_site_container">
            <ul className="family_site_group_container">
              <li>
                Sony Family 사이트
                <div className="family_site_icon"></div>
              </li>
              <li>
                Sony Global Home 바로가기
                <div className="family_site_icon02"></div>
              </li>
            </ul>
          </div>
          <div className="footer_sns_group_container">{CollectionList()}</div>
        </div>
      </div>
    </ALPHA_FOOTER>
  );
};

export default Footer;
