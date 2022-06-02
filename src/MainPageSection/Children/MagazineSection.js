import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import "../style/animationManager.css";
import contentImg01 from "../../img/20211130_01_thumb.jpg";
import contentImg02 from "../../img/20211124_02_thumb.jpg";
import contentImg03 from "../../img/20211124_01_thumb.jpg";

const ALPHA_MAIN_MAGAZINE_SECTION = styled.section`
  width: 1920px;
  height: 1060px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #f1f5f9;

  @media (max-width: 1920px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    height: 610px;
  }

  div.magazine_title_group {
    padding-top: 200px;
    text-align: center;
    @media (max-width: 960px) {
      padding-top: 50px;
    }
    span.title_group_main_title {
      font-size: 2.8em;
      @media (max-width: 960px) {
        font-size: 1.8em;
      }
      span {
        color: tomato;
      }
    }
    span.title_group_main_subtitle {
      font-weight: 100;
      font-size: 1em;
      @media (max-width: 960px) {
        font-size: 0.8em;
      }
    }
  }
  div.magazine_contents_container {
    ul.contents_group {
      display: flex;
      width: 1170px;
      justify-content: center;
      margin: 60px auto 0;
      overflow: hidden;
      @media (max-width: 1190px) {
        width: 100%;
      }
      li.contents_list {
        margin-left: 4.2em;
        width: 328px;
        height: 439px;

        @media (max-width: 1190px) {
          margin-left: 2vw;
          &:last-child {
            margin-right: 2vw;
          }
        }
        @media (max-width: 960px) {
          width: 200px;
        }
        @media (max-width: 768px) {
          width: 150px;
        }
        @media (max-width: 500px) {
          margin: 0 auto;
          &:nth-child(1) {
            width: 300px;
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            display: none;
          }
        }
        div.contents_list_img {
          width: 100%;
          height: 294px;
          @media (max-width: 1100px) {
            height: 194px;
          }
          @media (max-width: 768px) {
            height: 150px;
          }
        }
        div.contents_list_subtitle_group {
          width: 328px;
          height: 145px;
          background-color: ${(props) => props.backgroundcolor || "#222"};

          @media (max-width: 960px) {
            width: 200px;
          }
          @media (max-width: 768px) {
            width: 150px;
          }
          @media (max-width: 500px) {
            &:nth-child(2) {
              width: 300px;
            }
          }
          div.contents_list_date {
            padding: 32px 20px 0;
            color: ${(props) => props.color || "#ccc"};
          }
          div.contents_list_subtitle {
            color: ${(props) => props.color || "#ffffff"};
            font-size: 1.1em;
            padding: 10px 20px 36px;
            @media (max-width: 1100px) {
              font-size: 0.8em;
            }
          }
        }
      }
    }
  }
  div.more_description {
    color: #e75300;
    margin-top: 82px;
    text-align: center;
    @media (max-width: 960px) {
      margin-top: -100px;
    }
  }
`;

/*<---------- 컴포넌트 ----------->*/

const MagazineSection = () => {
  //useRef
  const magazineManagerRef = useRef(null);
  const magazieTitleRef = useRef(null);
  //더미데이터
  const MagazineData = [
    {
      id: 1,
      img: contentImg01,
      date: "2021.11.26",
      subtitle: "[소니코리아] 알파 프로페셔널 인터뷰 - α1 X SE...",
    },
    {
      id: 2,
      img: contentImg02,
      date: "2021.11.23",
      subtitle: "[소니코리아] 디지털 언패킹- 표준의 초격차 α7 |..",
    },
    {
      id: 3,
      img: contentImg03,
      date: "2021.11.17",
      subtitle: "[소니코리아] 디지털 언패킹- 표준의 초격차 α7 |..",
    },
  ];

  const introduceMagazine = () => {
    const result = MagazineData.map((value) => {
      const contentImg = {
        backgroundImage: `url(${value.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };

      return (
        <li className="contents_list" key={value.id}>
          <div className="contents_list_img" style={contentImg} />
          {value.id === 2 ? (
            <div
              className="contents_list_subtitle_group"
              backgroundcolor="#ffffff"
            >
              <div className="contents_list_date" color="#222">
                {value.date}
              </div>
              <div className="contents_list_subtitle" color="#222">
                {value.subtitle}
              </div>
            </div>
          ) : (
            <div className="contents_list_subtitle_group">
              <div className="contents_list_date">{value.date}</div>
              <div className="contents_list_subtitle">{value.subtitle}</div>
            </div>
          )}
        </li>
      );
    });
    return result;
  };

  let [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setTitleHeight(magazieTitleRef.current.getBoundingClientRect().top);
    });
    const posY = () => {
      if (titleHeight < window.innerHeight * 0.1) {
        magazineManagerRef.current.classList.add("slideUp");
      } else {
        magazineManagerRef.current.classList.remove("slideUp");
      }
    };
    posY();
  }, [titleHeight]);
  return (
    <ALPHA_MAIN_MAGAZINE_SECTION>
      <div className="magazine_title_group" ref={magazieTitleRef}>
        <span className="title_group_main_title">
          MAGAZINE<span>.</span>
        </span>

        <span className="title_group_main_subtitle">
          <br /> 소니 카메라 제품의 새로운 소식과 프로들의 사진 촬영 노하우와
          <br />
          제품 관련 최신 뉴스를 지금 확인해 보세요!
        </span>
      </div>
      <div className="magazine_contents_container">
        <ul className="contents_group" ref={magazineManagerRef}>
          {introduceMagazine()}
        </ul>
      </div>
      <div className="more_description">더 많은 매거진 보러가기&rarr; </div>
    </ALPHA_MAIN_MAGAZINE_SECTION>
  );
};

export default MagazineSection;
