import React from "react";
import styled from "styled-components";

import eventImg02 from "../../img/20210707_01_apxu_list.jpg";
import eventImg03 from "../../img/20210617_01_wo3z_list.jpg";
import eventImg04 from "../../img/20210517_01_smnz_list.jpg";

const ALPHA_MAIN_EVENT_SECTION = styled.section`
  height: 1000px;
  background-color: aliceblue;
  @media (max-width: 960px) {
    height: 900px;
  }
  div.event_title_group {
    text-align: center;
    padding-top: 118px;
    @media (max-width: 960px) {
      padding-top: 50px;
    }
    div.event_title_group_title {
      color: #222;
      font-size: 3.25em;
      @media (max-width: 960px) {
        font-size: 1.8em;
      }
      span {
        color: tomato;
      }
    }
    div.event_title_group_subtitle {
      font-size: 0.8em;
      font-weight: 100;
      margin-top: 34px;
      margin-bottom: 30px;
    }
  }
  ul.event_menu_group {
    display: flex;
    justify-content: center;
    li {
      font-weight: 300;
      color: #222;
      margin-right: 44px;
    }
  }
  div.event_contents_layout {
    width: 1300px;
    margin: 10px auto 0;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media (max-width: 1300px) {
      width: 100%;
    }
    @media (max-width: 960px) {
      margin-top: 5px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    div.event_contents_group_layout {
      width: 28.46%;
      height: 351px;
      border: 1px solid #ccc;
      margin-left: 1.6875em;
      margin-top: 18px;

      @media (max-width: 1300px) {
        width: calc(28.46% - 10px);
      }
      @media (max-width: 768px) {
        display: flex;
        width: 95%;
        height: 130px;
        margin-left: 2vw;
      }
      div.event_contents_group_desc {
        height: 130px;
        box-sizing: border-box;
        font-weight: 600;
        font-size: 1.25em;
        margin: 0 auto;
        padding-top: 10px;
        text-align: center;

        @media (max-width: 1300px) {
          width: 80%;
          height: 150px;
          font-size: calc(1.25em - 5px);
        }
        div.event_contents_group_date {
          font-weight: 300;
          font-size: 0.6em;
          padding-top: 1.25em;
        }
      }
    }
  }
  ul.event_contents_button_group {
    display: flex;
    justify-content: center;
    margin: 45px auto 0;
    width: 460px;
    @media (max-width: 960px) {
      width: 100%;
    }
    li {
      width: 230px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #ffffff;
      font-weight: 300;
      margin-right: 18px;
      background-color: #e75300;

      @media (max-width: 960px) {
        margin-right: 1px;
        font-size: 0.7em;
      }
    }
  }
`;

const EVENT_CONTENTS_GROUP_IMG = styled.div`
  width: 100%;
  height: 208px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1300px) {
    height: calc(208px - 50px);
  }
  @media (max-width: 768px) {
    height: 130px;
  }
`;

/*<---------- 컴포넌트 ----------->*/
const EventSection = () => {
  //더미데이터
  const eventArr = [
    {
      id: 1,
      path: eventImg02,
      title: "[이벤트], 프딩과 함께하는 프로페셔널 웨딩작가 컨설팅 서비스",
      date: "2021.07.08~2022.09.30",
    },
    {
      id: 2,
      path: eventImg03,
      title: "2022 소니월드 포트그래피 어워드",
      date: "2021.06.25~2022.1.14",
    },
    {
      id: 3,
      path: eventImg04,
      title: "[이벤트] α 랜선 세미나 ",
      date: "2020.08.28~재고 소진시",
    },
  ];
  const initContents = () => {
    const eventResult = eventArr.map((value) => {
      return (
        <div className="event_contents_group_layout" key={value.id}>
          <EVENT_CONTENTS_GROUP_IMG url={value.path}></EVENT_CONTENTS_GROUP_IMG>
          <div className="event_contents_group_desc">
            {value.title}
            <div className="event_contents_group_date">{value.date}</div>
          </div>
        </div>
      );
    });
    return eventResult;
  };

  return (
    <ALPHA_MAIN_EVENT_SECTION>
      <div className="event_title_group">
        <div className="event_title_group_title">
          EVENT & SEMINAR<span>.</span>
        </div>
        <div className="event_title_group_subtitle">
          소니에서 준비한 이벤트로 더 많은 혜택을!
          <br /> 세미나를 통해 소니 제품과 함께 하는 프로들의 사진 노하우를
          배워보세요!
        </div>
      </div>
      <ul className="event_menu_group">
        <li>EVENT</li>
        <li>SEMINAR</li>
      </ul>

      <div className="event_contents_layout">{initContents()}</div>
      <ul className="event_contents_button_group">
        <li>이벤트 보러가기 &gt;</li>
        <li>세미나보러가기 &gt;</li>
      </ul>
    </ALPHA_MAIN_EVENT_SECTION>
  );
};

export default EventSection;
