import React from "react";
import styled from "styled-components";
import { Fragment } from "react-is";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <BottomTab>
        <Tab>
          <span>
            copyright @ {date} ALL rights reserved {""}
          </span>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const BottomTab = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #21325e;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    padding: 1em 0;
  }
`;
