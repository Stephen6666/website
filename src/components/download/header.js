import React from "react";
import styled from "styled-components";

import { Container } from "../global";

const Header = () => {
  return (
    <HeaderWrapper id="loophole">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>Download &amp; Setup Loophole</h1>
          </HeaderTextGroup>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`;
const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    font-size: 35px;
    margin: 0 0 24px;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    font-size: 5 rem;
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    text-align: center;
  }
`;

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`;


