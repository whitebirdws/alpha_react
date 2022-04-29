import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

const ALPHA_MAIN_CONTAINER = styled.div`
  background-color: #03010f;
`;

const CombineLayout = () => {
  return (
    <>
      <ALPHA_MAIN_CONTAINER>
        <Header />
        <Section />
        <Footer />
      </ALPHA_MAIN_CONTAINER>
    </>
  );
};

export default CombineLayout;
