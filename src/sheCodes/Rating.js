import React from "react";
import styled from "styled-components";

const Rating = () => {
  return (
    <Container>
      <Wrapper>
        <Account>
          <Price>
            <Amount>20K+</Amount>
            <AmountPrice>mentors</AmountPrice>
          </Price>
          <Li />
          <Price>
            <Amount>40K+</Amount>
            <AmountPrice>mentees</AmountPrice>
          </Price>
          <Li />
          <Price>
            <Amount>150K+</Amount>
            <AmountPrice>connections</AmountPrice>
          </Price>
        </Account>
      </Wrapper>
    </Container>
  );
};

export default Rating;

const Container = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  background-image: url("./Image/unsp.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Account = styled.div`
  height: 100px;
  width: 100%;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    margin-bottom: 25px;
  }
`;

const Amount = styled.div`
  font-size: 50px;
  font-weight: 500;
  color: whitesmoke;

  @media screen and (max-width: 425px) {
    font-size: 35px;
  }
`;

const AmountPrice = styled.div`
  font-family: poppins;
  font-size: 25px;
  letter-spacing: 1px;
  color: whitesmoke;

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

const Li = styled.div`
  width: 2px;
  height: 80%;
  background-color: whitesmoke;
`;
