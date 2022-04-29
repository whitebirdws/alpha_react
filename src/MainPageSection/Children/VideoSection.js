import React, { useEffect, useRef, useState } from "react";
import { background, background02 } from "../style/StyleMainPage";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import "../style/animationManager.css";
import videoImg01 from "../../img/videoimg01.jpg";
import videoImg02 from "../../img/videoimg02.jpg";
import videoImg03 from "../../img/videoimg03.jpg";
import videoImg04 from "../../img/videoimg04.jpg";
import videoImg05 from "../../img/videoimg05.jpg";

const ALPHA_MAIN_VIDEO_SECTION = styled.section`
  position: relative;
  height: 1077px;
  text-align: center;
  background-color: #333335;
  @media (max-width: 960px) {
    height: 750px;
  }
`;
const VIDEO_SECTION_TITLE_GROUP = styled.div`
  padding-top: 120px;
  text-align: center;
  @media (max-width: 960px) {
    padding-top: 80px;
  }
`;
const VIDEO_SECTION_TITLE = styled.span`
  font-size: 3.25em;
  color: #fff;
  @media (max-width: 960px) {
    font-size: 1.8em;
  }
`;
const VIDEO_SECTION_SUBTITLE = styled.span`
  color: #fff;

  padding-bottom: 56px;
  @media (max-width: 960px) {
    font-size: 0.8em;
    font-weight: 100;
  }
`;
const VIDEO_SECTION_IMG_GROUP = styled.div`
  position: relative;
  width: 100%;
  height: 620px;
  margin-top: 60px;
  margin-bottom: 80px;
  left: 50%;
  /* overflow: hidden; */
  transform: translateX(-50%);
  @media (max-width: 960px) {
    height: 320px;
  }
`;

const MORE_DESC_VIDEO = styled.span`
  color: #e75300;
  @media (max-width: 960px) {
    font-size: 0.8em;
  }
`;
const TestGroup = styled.div`
  position: relative;
  /* left: 4.5%; */
  width: 1180px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const TestBox = styled.div`
  position: absolute;

  top: 94px;
  width: 100px;
  height: 260px;
  background-color: #ccc;
  background: url(${(props) => props.url});
  ${background02}
  z-index: 5;
  @media (max-width: 1200px) {
    top: 0;
    left: 12%;
    width: 850px;
    height: 540px;
  }
`;
const TestBox2 = styled.div`
  position: absolute;
  left: 6%;
  top: 54px;
  width: 100px;
  height: 426px;
  background-color: red;
  background: url(${(props) => props.url});
  ${background}
  background-position: left;
  z-index: 10;
  @media (max-width: 1200px) {
    top: 0;
    left: 12%;
    width: 850px;
    height: 540px;
  }
`;
const TestBox3 = styled.div`
  position: absolute;
  left: 12%;
  width: 850px;
  height: 540px;
  background-color: #ccc;
  background: url(${(props) => props.url});
  ${background02}
  z-index: 20;
`;
const TestBox4 = styled.div`
  position: absolute;
  left: 980px;
  top: 54px;
  width: 100px;
  height: 426px;
  background-color: red;
  background: url(${(props) => props.url});
  ${background}
  background-position: left;
  z-index: 10;
  @media (max-width: 1200px) {
    top: 0;
    left: 12%;
    width: 850px;
    height: 540px;
  }
`;
const TestBox5 = styled.div`
  position: absolute;
  left: 1080px;
  top: 94px;
  width: 100px;
  height: 260px;
  background-color: #ccc;
  background: url(${(props) => props.url});
  ${background02}
  z-index: 5;
  @media (max-width: 1200px) {
    top: 0;
    left: 12%;
    width: 850px;
    height: 540px;
  }
`;

const LeftTestDiv = styled.div`
  position: absolute;
  top: 100px;
  left: 12%;
  font-size: 70px;
  z-index: 1000;
  color: #ccc;
  cursor: pointer;
  opacity: 0.8;
`;
const RightTestDiv = styled.div`
  position: absolute;
  top: 100px;
  right: 12%;
  font-size: 70px;
  z-index: 1000;
  color: #ccc;
  cursor: pointer;
  opacity: 0.8;
`;
const TestGroup02 = styled.div`
  display: none;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1200px) {
    display: block;
    width: 100%;
  }
`;
const SLIDER_RESPONSIVE = styled.div`
  margin: 0 auto;
  width: 850px;
  height: 528px;
  background-color: #ccc;

  overflow: hidden;
  @media (max-width: 960px) {
    width: 80%;
    height: 350px;
  }
  @media (max-width: 600px) {
    width: 450px;
    height: 300px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 200px;
  }
`;

const SLIDER_RESPONSIVE_CONTROL = styled.ul`
  width: 100px;
  display: flex;
  jutify-content: center;
  margin: 10px auto;
`;
const SLIDER_RESPONSIVE_CONTROL_BUTTON = styled.li`
  width: 15px;
  height: 15px;
  background-color: #ccc;
  border-radius: 50%;
  margin-left: 5px;
  &:hover {
    background-color: tomato;
  }
  cursor: pointer;
`;

const VideoSection = () => {
  const VideoArr = [
    {
      id: 1,
      path: videoImg01,
    },
    {
      id: 2,
      path: videoImg02,
    },
    {
      id: 3,
      path: videoImg03,
    },
    {
      id: 4,
      path: videoImg04,
    },
    {
      id: 5,
      path: videoImg05,
    },
    {
      id: 6,
      path: videoImg01,
    },
    {
      id: 7,
      path: videoImg02,
    },
    {
      id: 8,
      path: videoImg03,
    },
    {
      id: 9,
      path: videoImg04,
    },
    {
      id: 10,
      path: videoImg05,
    },
    {
      id: 11,
      path: videoImg02,
    },
    {
      id: 12,
      path: videoImg02,
    },
    {
      id: 13,
      path: videoImg03,
    },
    {
      id: 14,
      path: videoImg04,
    },
    {
      id: 15,
      path: videoImg05,
    },
  ];

  let currentCount = 1;

  let videoImageManagerRef = useRef(null);
  let videoContentsTitleRef = useRef(null);

  let sliderGroupRef = useRef(null);
  let sliderBoxRef1 = useRef(null);
  let sliderBoxRef2 = useRef(null);
  let sliderBoxRef3 = useRef(null);
  let sliderBoxRef4 = useRef(null);
  let sliderBoxRef5 = useRef(null);

  let sliderBoxGroup = [
    sliderBoxRef1,
    sliderBoxRef2,
    sliderBoxRef3,
    sliderBoxRef4,
    sliderBoxRef5,
  ];

  let responsive_sliderManager = useRef(null);

  const excuteMove = (idx) => {
    sliderBoxRef1.current.style.background = `url(${
      VideoArr[idx + 4 - 2].path
    })`;
    sliderBoxRef2.current.style.background = `url(${
      VideoArr[idx + 4 - 1].path
    })`;
    sliderBoxRef3.current.style.background = `url(${VideoArr[idx].path})`;
    sliderBoxRef4.current.style.background = `url(${
      VideoArr[idx + 4 + 2].path
    })`;
    sliderBoxRef5.current.style.background = `url(${
      VideoArr[idx + 4 + 3].path
    })`;
  };

  const rightMove = () => {
    sliderBoxGroup[currentCount - 1].current.classList.toggle("activeSlide");
    excuteMove(currentCount);
    console.log(currentCount);
    if (currentCount === 5) {
      currentCount = 0;
    }
    currentCount += 1;
  };
  const leftMove = () => {
    sliderBoxGroup[currentCount].current.classList.toggle("activeSlide");
    excuteMove(currentCount);
    console.log(currentCount);
    if (currentCount === 0) {
      currentCount = 5;
    }
    currentCount -= 1;
  };

  const responsiveSliderInit = () => {
    responsive_sliderManager.current.style.background = `url(${VideoArr[0].path})`;
    responsive_sliderManager.current.style.backgroundSize = `cover`;
    responsive_sliderManager.current.style.backgroundRepeat = `no-repeat`;
  };

  const responsiveButton = (current) => {
    responsive_sliderManager.current.style.background = `url(${current})`;
    responsive_sliderManager.current.style.backgroundSize = `cover`;
    responsive_sliderManager.current.style.backgroundRepeat = `no-repeat`;
  };
  let [videoSectionHeight, setVideoSectionHeight] = useState(0);
  useEffect(() => {
    responsiveSliderInit();
    window.addEventListener("scroll", () => {
      setVideoSectionHeight(
        videoContentsTitleRef.current.getBoundingClientRect().top
      );
    });
    const posY = () => {
      if (videoSectionHeight < window.innerHeight * 0.1) {
        videoImageManagerRef.current.classList.add("slideUp");
      } else {
        videoImageManagerRef.current.classList.remove("slideUp");
      }
    };
    posY();
  }, [videoSectionHeight, responsiveSliderInit]);

  return (
    <ALPHA_MAIN_VIDEO_SECTION>
      <VIDEO_SECTION_TITLE_GROUP ref={videoContentsTitleRef}>
        <VIDEO_SECTION_TITLE>
          VIDEO_CONTENTS<span style={{ color: "tomato" }}>.</span>
        </VIDEO_SECTION_TITLE>
        <VIDEO_SECTION_SUBTITLE>
          <br />
          프로들이 선택한 카메라!
          <br />
          소니 카메라와 함께 사진 예술 창작의 더 깊은 세계로 여러분을
          초대합니다!
        </VIDEO_SECTION_SUBTITLE>
      </VIDEO_SECTION_TITLE_GROUP>
      <div ref={videoImageManagerRef}>
        <VIDEO_SECTION_IMG_GROUP>
          <TestGroup ref={sliderGroupRef}>
            <TestBox
              ref={sliderBoxRef1}
              className="test test01"
              url={VideoArr[3].path}
            >
              <LeftTestDiv>
                <MdArrowBackIos onClick={leftMove} />
              </LeftTestDiv>
            </TestBox>
            <TestBox2
              ref={sliderBoxRef2}
              className="test test02"
              url={VideoArr[4].path}
            ></TestBox2>
            <TestBox3
              ref={sliderBoxRef3}
              className="test test03"
              url={VideoArr[5].path}
            ></TestBox3>
            <TestBox4
              ref={sliderBoxRef4}
              className="test test04"
              url={VideoArr[6].path}
            ></TestBox4>
            <TestBox5
              ref={sliderBoxRef5}
              className="test test05"
              url={VideoArr[7].path}
            >
              <RightTestDiv>
                <MdArrowForwardIos onClick={rightMove} />
              </RightTestDiv>
            </TestBox5>
          </TestGroup>
          <TestGroup02>
            <SLIDER_RESPONSIVE
              ref={responsive_sliderManager}
            ></SLIDER_RESPONSIVE>
            <SLIDER_RESPONSIVE_CONTROL>
              <SLIDER_RESPONSIVE_CONTROL_BUTTON
                onClick={() => responsiveButton(VideoArr[5].path)}
              ></SLIDER_RESPONSIVE_CONTROL_BUTTON>
              <SLIDER_RESPONSIVE_CONTROL_BUTTON
                onClick={() => responsiveButton(VideoArr[1].path)}
              ></SLIDER_RESPONSIVE_CONTROL_BUTTON>
              <SLIDER_RESPONSIVE_CONTROL_BUTTON
                onClick={() => responsiveButton(VideoArr[2].path)}
              ></SLIDER_RESPONSIVE_CONTROL_BUTTON>
              <SLIDER_RESPONSIVE_CONTROL_BUTTON
                onClick={() => responsiveButton(VideoArr[3].path)}
              ></SLIDER_RESPONSIVE_CONTROL_BUTTON>
              <SLIDER_RESPONSIVE_CONTROL_BUTTON
                onClick={() => responsiveButton(VideoArr[4].path)}
              ></SLIDER_RESPONSIVE_CONTROL_BUTTON>
            </SLIDER_RESPONSIVE_CONTROL>
          </TestGroup02>
        </VIDEO_SECTION_IMG_GROUP>
      </div>
      <MORE_DESC_VIDEO>더 많은 비디오 컨텐츠 보러가기&rarr;</MORE_DESC_VIDEO>
    </ALPHA_MAIN_VIDEO_SECTION>
  );
};

export default VideoSection;
