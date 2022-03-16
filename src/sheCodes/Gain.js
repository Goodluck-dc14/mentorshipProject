import React from "react";
import styled from "styled-components";
import { FaRegHandshake } from "react-icons/fa";

const Gain = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImgCard src="/Image/pexel.jpg" />
        </Left>
        <Right>
          <TextHolder>
            <Text>Gain bigger with us</Text>
            <Text1>
              So feel been kept be at gate. Be september it extensive oh
              concluded of certainty
            </Text1>
          </TextHolder>
          <IconTextHolder>
            <Icon>
              <FaRegHandshake />
            </Icon>
            <WordCont>
              <Word>Style too own civil</Word>
              <Word1>
                So feel been kept be at gate. Be extensive oh concluded of
                certainty
              </Word1>
            </WordCont>
          </IconTextHolder>
          <IconTextHolder>
            <Icon>
              <FaRegHandshake />
            </Icon>
            <WordCont>
              <Word>Style too own civil</Word>
              <Word1>
                So feel been kept be at gate. Be extensive oh concluded of
                certainty
              </Word1>
            </WordCont>
          </IconTextHolder>
          <IconTextHolder>
            <Icon>
              <FaRegHandshake />
            </Icon>
            <WordCont>
              <Word>Style too own civil</Word>
              <Word1>
                So feel been kept be at gate. Be extensive oh concluded of
                certainty
              </Word1>
            </WordCont>
          </IconTextHolder>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Gain;

const Container = styled.div`
  min-height: 90vh;
  height: 100%;
  width: 100%;
  background-color: #f3f3f3;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-right: unset;
  }
`;

const ImgCard = styled.img`
  width: 55%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  margin-left: 60px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: unset;
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const TextHolder = styled.div``;

const Text = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const Text1 = styled.div`
  margin-top: 15px;
  max-width: 350px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

const IconTextHolder = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #123456;
  background: lightgray;

  @media screen and (max-width: 425px) {
    height: 50px;
    width: 65px;
    border-radius: 100%;
  }
`;

const WordCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 1px;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Word = styled.div`
  font-size: 25px;
  font-weight: 500;
`;

const Word1 = styled.div`
  margin-top: 10px;
  max-width: 300px;
  color: gray;
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;
