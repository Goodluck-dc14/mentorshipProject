import React from "react";
import styled from "styled-components";
import { AiOutlineMail, AiOutlineLike } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Steps = () => {
  return (
    <Container>
      <Wrapper>
        <TitleHolder>Follow easy steps and get a mentor/mentee</TitleHolder>
        <LineHolder>
          <Li></Li>
          <Circle></Circle>
          <Li></Li>
        </LineHolder>
        <CardHolder>
          <Card>
            <IconHolder>
              <Icon>
                <AiOutlineMail />
              </Icon>
            </IconHolder>{" "}
            <Text>Create an account</Text>
            <SmallText>
              Is unsatiable if projecting It recommend boisterious insensible.
            </SmallText>
          </Card>
          <MiddleCard>
            <MiddleIconHolder>
              <Icon>
                <CgProfile />
              </Icon>
            </MiddleIconHolder>{" "}
            <Text1>Set up your profile</Text1>
            <SmallText1>
              Is unsatiable if projecting It recommend boisterious insensible.
            </SmallText1>
          </MiddleCard>
          <Card>
            <IconHolder>
              <Icon>
                <AiOutlineLike />
              </Icon>
            </IconHolder>{" "}
            <Text>Get a mentor/mentee</Text>
            <SmallText>
              Is unsatiable if projecting It recommend boisterious insensible.
            </SmallText>
          </Card>
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default Steps;

const Container = styled.div`
  min-height: 90vh;
  height: 100%;
  width: 100%;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleHolder = styled.div`
  text-align: center;
  max-width: 500px;
  font-size: 40px;
  font-weight: 600px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    max-width: 500px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    max-width: 400px;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
    max-width: 300px;
  }
`;

const LineHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Li = styled.div`
  width: 50px;
  height: 0px;
  border: 1px solid gray;
`;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid gray;
  border-radius: 100%;
`;

const CardHolder = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 240px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: 25px;
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    margin: 25px;
    width: 40%;
  }
  @media screen and (max-width: 425px) {
    margin: 30px;
    width: 100%;
  }
`;

const MiddleCard = styled.div`
  width: 330px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 30%;
    height: 240px;
    margin: 25px;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 240px;
    margin: 25px;
  }
  @media screen and (max-width: 425px) {
    margin: 30px;
    width: 100%;
  }
`;

const IconHolder = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: -50px;
`;

const MiddleIconHolder = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  background-color: #123456;
  position: absolute;
  top: -60px;

  @media screen and (max-width: 1024px) {
    width: 80px;
    height: 80px;
    top: -50px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: -50px;
  }
`;

const Icon = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  line-height: 3;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const SmallText = styled.div`
  text-align: center;
  font-size: 17px;
  max-width: 200px;
  color: gray;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    max-width: 200px;
  }
`;

const Text1 = styled.div`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  line-height: 4;

  @media screen and (max-width: 768px) {
    line-height: 3;
    font-size: 25px;
  }
`;

const SmallText1 = styled.div`
  text-align: center;
  font-size: 17px;
  max-width: 200px;
  color: gray;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    max-width: 200px;
  }
`;
