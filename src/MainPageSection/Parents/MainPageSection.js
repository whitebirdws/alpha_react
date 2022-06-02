import React from "react";
import styled from "styled-components";

import IntroSection from "../Children/IntroSection";
import MagazineSection from "../Children/MagazineSection";
import VideoSection from "../Children/VideoSection";
import EventSection from "../Children/EventSection";
import SubContentsSection from "../Children/SubContentsSection";
import SupportSection from "../Children/SupportSection";

const ALPHA_MAIN_CONTAINER = styled.div`
  background-color: #03010f;
  @media (max-width: 520px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

/*<---------- 컴포넌트 ----------->*/

const MainPageSection = () => {
  return (
    <>
      <ALPHA_MAIN_CONTAINER>
        <IntroSection />
        <MagazineSection />
        <VideoSection />
        <EventSection />
        <SubContentsSection />
        <SupportSection />
      </ALPHA_MAIN_CONTAINER>
    </>
  );
};

export default MainPageSection;
