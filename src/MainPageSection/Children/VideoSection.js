import React, { useEffect, useRef, useState } from "react";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled, { css } from "styled-components";
import "../style/animationManager.css";
import videoImg01 from "../../img/videoimg01.jpg";
import videoImg02 from "../../img/videoimg02.jpg";
import videoImg03 from "../../img/videoimg03.jpg";
import videoImg04 from "../../img/videoimg04.jpg";
import videoImg05 from "../../img/videoimg05.jpg";
const SliderManager = css`
  position: absolute;
  top: 0px;
  width: 0px;
  height: 0px;
  background-color: red;
  background: url($img);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 5;
`;

const ALPHA_MAIN_VIDEO_SECTION = styled.section`
  position: relative;
  height: 1077px;
  text-align: center;
  background-color: #333335;
  @media (max-width: 960px) {
    height: 750px;
  }
  div.video_title_group {
    padding-top: 120px;
    text-align: center;
    @media (max-width: 960px) {
      padding-top: 80px;
    }
    span.video_title {
      font-size: 3.25em;
      color: #fff;
      @media (max-width: 960px) {
        font-size: 1.8em;
      }
      span {
        color: tomato;
      }
    }
    span.video_subtitle {
      color: #fff;
      padding-bottom: 56px;
      @media (max-width: 960px) {
        font-size: 0.8em;
        font-weight: 100;
      }
    }
  }
  div.video_img_manager {
    div.video_img_group {
      position: relative;
      left: 50%;
      width: 100%;
      height: 620px;
      margin-top: 60px;
      margin-bottom: 80px;
      transform: translateX(-50%);
      @media (max-width: 960px) {
        height: 320px;
      }
      div.video_img_slider_group {
        position: relative;
        width: 1180px;
        margin: 0 auto;
        @media (max-width: 1200px) {
          display: none;
        }
        div.sliderbox01 {
          ${SliderManager} {
            top: 94px;
            width: 100px;
            height: 260px;
            background: url(${videoImg03});
          }
        }
        div.left_button {
          position: absolute;
          top: 100px;
          left: 12%;
          font-size: 70px;
          z-index: 1000;
          color: #ccc;
          cursor: pointer;
          opacity: 0.8;
        }
        div.sliderbox02 {
          ${SliderManager} {
            left: 6%;
            width: 100px;
            top: 54px;
            height: 426px;
            background: url(${videoImg04});
          }
        }
        div.sliderbox03 {
          ${SliderManager} {
            left: 12%;
            width: 850px;
            height: 540px;
            background: url(${videoImg05});
            z-index: 20;
          }
        }
        div.sliderbox04 {
          ${SliderManager} {
            left: 980px;
            top: 54px;
            width: 100px;
            height: 426px;
            background: url(${videoImg01});
            z-index: 20;
          }
        }
        div.sliderbox05 {
          ${SliderManager} {
            left: 1080px;
            top: 94px;
            width: 100px;
            height: 260px;
            background-color: #ccc;
            background: url(${videoImg02});
            z-index: 35;
          }
          div.right_button {
            position: absolute;
            top: 100px;
            right: 12%;
            font-size: 70px;
            z-index: 1000;
            color: #ccc;
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
      div.video_img_slider_group02 {
        display: none;
        width: 1200px;
        margin: 0 auto;
        position: relative;
        @media (max-width: 1200px) {
          display: block;
          width: 100%;
        }
        div.manager_of_responsive_slider {
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
        }
        ul.button_manager_of_responsive_slider {
          width: 100px;
          display: flex;

          margin: 10px auto;
          li {
            width: 15px;
            height: 15px;
            background-color: #ccc;
            border-radius: 50%;
            margin-left: 5px;
            &:hover {
              background-color: tomato;
            }
            cursor: pointer;
          }
        }
      }
    }
  }
  span.see_video_contents {
    color: #e75300;
    @media (max-width: 960px) {
      font-size: 0.8em;
    }
  }
`;

const VideoSection = () => {
  const videoArr = [
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
  let [videoSectionHeight, setVideoSectionHeight] = useState(0);
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
      videoArr[idx + 4 - 2].path
    })`;
    sliderBoxRef2.current.style.background = `url(${
      videoArr[idx + 4 - 1].path
    })`;
    sliderBoxRef3.current.style.background = `url(${videoArr[idx].path})`;
    sliderBoxRef4.current.style.background = `url(${
      videoArr[idx + 4 + 2].path
    })`;
    sliderBoxRef5.current.style.background = `url(${
      videoArr[idx + 4 + 3].path
    })`;
  };

  const rightMove = () => {
    sliderBoxGroup[currentCount - 1].current.classList.toggle("activeSlide");
    excuteMove(currentCount);
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

  const responsiveButton = (current) => {
    responsive_sliderManager.current.style.background = `url(${current})`;
    responsive_sliderManager.current.style.backgroundSize = `cover`;
    responsive_sliderManager.current.style.backgroundRepeat = `no-repeat`;
  };

  useEffect(() => {
    const responsiveSliderInit = () => {
      responsive_sliderManager.current.style.background = `url(${videoArr[0].path})`;
      responsive_sliderManager.current.style.backgroundSize = `cover`;
      responsive_sliderManager.current.style.backgroundRepeat = `no-repeat`;
    };
    responsiveSliderInit();
  }, []);

  useEffect(() => {
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
  }, [videoSectionHeight]);

  return (
    <ALPHA_MAIN_VIDEO_SECTION>
      <div className="video_title_group" ref={videoContentsTitleRef}>
        <span className="video_title">
          VIDEO_CONTENTS<span>.</span>
        </span>
        <span className="video_subtitle">
          <br />
          프로들이 선택한 카메라!
          <br />
          소니 카메라와 함께 사진 예술 창작의 더 깊은 세계로 여러분을
          초대합니다!
        </span>
      </div>
      <div className="video_img_manager" ref={videoImageManagerRef}>
        <div className="video_img_group">
          <div className="video_img_slider_group" ref={sliderGroupRef}>
            <div
              ref={sliderBoxRef1}
              className="sliderbox01"
              url={videoArr[3].path}
            >
              <div className="left_button">
                <MdArrowBackIos onClick={leftMove} />
              </div>
            </div>
            <div ref={sliderBoxRef2} className="sliderbox02"></div>
            <div ref={sliderBoxRef3} className="sliderbox03"></div>
            <div ref={sliderBoxRef4} className="sliderbox04"></div>
            <div ref={sliderBoxRef5} className="sliderbox05">
              <div className="right_button">
                <MdArrowForwardIos onClick={rightMove} />
              </div>
            </div>
          </div>
          <div className="video_img_slider_group02">
            <div
              className="manager_of_responsive_slider"
              ref={responsive_sliderManager}
            ></div>
            <ul className="button_manager_of_responsive_slider">
              <li onClick={() => responsiveButton(videoArr[5].path)}></li>
              <li onClick={() => responsiveButton(videoArr[1].path)}></li>
              <li onClick={() => responsiveButton(videoArr[2].path)}></li>
              <li onClick={() => responsiveButton(videoArr[3].path)}></li>
              <li onClick={() => responsiveButton(videoArr[4].path)}></li>
            </ul>
          </div>
        </div>
      </div>
      <span className="see_video_contents">
        더 많은 비디오 컨텐츠 보러가기&rarr;
      </span>
    </ALPHA_MAIN_VIDEO_SECTION>
  );
};

export default VideoSection;
