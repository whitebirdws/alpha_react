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
`;
const EVENT_SECTION_TITLE_GROUP = styled.div`
  text-align: center;
  padding-top: 118px;
  @media (max-width: 960px) {
    padding-top: 50px;
  }
`;
const EVENT_SECTION_TITLE_GROUP_TITLE = styled.div`
  font-size: 3.25em;
  color: #222;
  @media (max-width: 960px) {
    font-size: 1.8em;
  }
`;
const EVENT_SECTION_TITLE_GROUP_SUBTITLE = styled.div`
  margin-top: 34px;
  margin-bottom: 30px;
  font-size: 0.8em;
  font-weight: 100;
`;

const EVENT_SECTION_MENU_GROUP = styled.ul`
  display: flex;
  justify-content: center;
`;

const EVENT_SECTION_MENU_GROUP_LIST = styled.li`
  margin-right: 44px;
  font-size: 1.125em;
  font-weight: 300;
`;
const EVENT_SECTION_CONTENTS_LAYOUT = styled.div`
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
`;
const EVENT_SECTION_CONTENTS_GROUP_LAYOUT = styled.div`
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
    margin-left: 2vw;
    width: 95%;
    height: 130px;
  }
`;

const EVENT_SECTION_CONTENTS_GROUP_IMG = styled.div`
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
const EVENT_SECTION_CONTENTS_GROUP_DESC = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  height: 130px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.25em;
  text-align: center;

  @media (max-width: 1300px) {
    width: 80%;
    height: 150px;
    font-size: calc(1.25em - 5px);
  }
`;
const EVENT_SECTION_CONTETS_GROUP_DATE = styled.div`
  font-weight: 300;
  font-size: 0.6em;
  padding-top: 1.25em;
`;
const EVENT_SECTION_CONTENTS_BUTTON_GROUP = styled.ul`
  display: flex;
  justify-content: center;
  margin: 45px auto 0;
  width: 460px;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
const EVENT_SECTION_CONTENTS_BUTTON_LIST = styled.li`
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
`;
const EventSection = () => {
  const EventArr = [
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
    const eventResult = EventArr.map((value) => {
      return (
        <>
          <EVENT_SECTION_CONTENTS_GROUP_LAYOUT key={value.id}>
            <EVENT_SECTION_CONTENTS_GROUP_IMG
              url={value.path}
            ></EVENT_SECTION_CONTENTS_GROUP_IMG>
            <EVENT_SECTION_CONTENTS_GROUP_DESC>
              {value.title}
              <EVENT_SECTION_CONTETS_GROUP_DATE>
                {value.date}
              </EVENT_SECTION_CONTETS_GROUP_DATE>
            </EVENT_SECTION_CONTENTS_GROUP_DESC>
          </EVENT_SECTION_CONTENTS_GROUP_LAYOUT>
        </>
      );
    });
    return eventResult;
  };

  return (
    <ALPHA_MAIN_EVENT_SECTION>
      <EVENT_SECTION_TITLE_GROUP>
        <EVENT_SECTION_TITLE_GROUP_TITLE>
          EVENT & SEMINAR<span style={{ color: "tomato" }}>.</span>
        </EVENT_SECTION_TITLE_GROUP_TITLE>
        <EVENT_SECTION_TITLE_GROUP_SUBTITLE>
          소니에서 준비한 이벤트로 더 많은 혜택을!
          <br /> 세미나를 통해 소니 제품과 함께 하는 프로들의 사진 노하우를
          배워보세요!
        </EVENT_SECTION_TITLE_GROUP_SUBTITLE>
      </EVENT_SECTION_TITLE_GROUP>
      <EVENT_SECTION_MENU_GROUP>
        <EVENT_SECTION_MENU_GROUP_LIST>EVENT</EVENT_SECTION_MENU_GROUP_LIST>
        <EVENT_SECTION_MENU_GROUP_LIST>SEMINAR</EVENT_SECTION_MENU_GROUP_LIST>
      </EVENT_SECTION_MENU_GROUP>

      <EVENT_SECTION_CONTENTS_LAYOUT>
        {initContents()}
      </EVENT_SECTION_CONTENTS_LAYOUT>
      <EVENT_SECTION_CONTENTS_BUTTON_GROUP>
        <EVENT_SECTION_CONTENTS_BUTTON_LIST>
          이벤트 보러가기 &gt;
        </EVENT_SECTION_CONTENTS_BUTTON_LIST>
        <EVENT_SECTION_CONTENTS_BUTTON_LIST>
          세미나보러가기 &gt;
        </EVENT_SECTION_CONTENTS_BUTTON_LIST>
      </EVENT_SECTION_CONTENTS_BUTTON_GROUP>
    </ALPHA_MAIN_EVENT_SECTION>
  );
};

export default EventSection;
