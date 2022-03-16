import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <TextHolder>
            <Text>
              Customer care is the process of building an emotional connection
              with your customers, whereas customer service is simply the advice
              or assistance your business provides them. While both functions
              increase customer satisfaction, customer service does this by
              answering questions and providing support. Customer care is the
              process of building an emotional connection with your customers,
              whereas customer service is simply the advice or assistance your
            </Text>
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <Button>Join</Button>
            </NavLink>
          </TextHolder>
          <Image src="/Image/people.jpg" />
        </Left>
        <Right>
          <Img src="/Image/3.jpg" />
          <Img1 src="/Image/11.jpg" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Join;

const Container = styled.div`
  margin-top: 80px;
  min-height: 90vh;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  width: 50%;
  min-height: 55vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-right: unset;
  }
`;

const TextHolder = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;

  @media screen and (max-width: 375px) {
    height: unset;
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 250px;
  }
`;

const Text = styled.div`
  font-size: 15px;
  text-align: justify;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 425px) {
    font-size: small;
  }
`;

const Button = styled.div`
  width: 120px;
  height: 50px;
  background-color: #123456;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin-top: unset;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
    width: 100px;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 250px;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 50%;
    align-items: center;
    justify-content: center;
    margin-right: unset;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 250px;
  }
`;

const Img1 = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 250px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 250px;
  }
`;
