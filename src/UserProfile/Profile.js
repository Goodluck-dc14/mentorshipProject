import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { app } from "../base";
import { AuthProvider } from "../Registration/AuthState";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  const { currentUser } = useContext(AuthProvider);

  const getUserData = async () => {
    await app
      .firestore()
      .collection("Users")
      .doc(currentUser.uid)
      .get()
      .then((el) => {
        setUserData(el.data());
      });
  };

  useEffect(() => {
    getUserData();
    console.log(userData);
  }, []);
  return (
    <Body>
      <Container>
        <Top>
          <CoverPhoto src="/image/3.jpeg" />
          <ProfilePic src={userData.img} />
        </Top>
        <Mid>
          <Name>{userData.username}</Name>
          <Category>{userData.category}</Category>
          <Numbers>
            <LeftNum>
              <span>5</span>
              <div>Mentors</div>
            </LeftNum>
            <Line />
            <LeftNum>
              <span>3</span>
              <div>Mentees</div>
            </LeftNum>
          </Numbers>
          <Label>Make a</Label>
          <Buttons>
            <Button1>Mentors</Button1>
            <Button1>Mentee</Button1>
          </Buttons>
        </Mid>
        <Bottom>
          <Ul>
            <Head>
              <Icon />
              <span>Bio</span>
            </Head>
            <Text>{userData.bio}</Text>
          </Ul>
          <Ul>
            <Head>
              <Icon />
              <span>Experience</span>
            </Head>
            <Text>{userData.experience}</Text>
          </Ul>
          <Ul>
            <Head>
              <Icon />
              <span>Age</span>
            </Head>
            <Text>{userData.age} years old</Text>
          </Ul>
          <Ul>
            <Head>
              <Icon />
              <span>Other Skill</span>
            </Head>
            <Ol>
              <li>{userData.skill1}</li>
              <li>{userData.skill2}</li>
            </Ol>
          </Ul>
          <Ul>
            <Head>
              <Icon />
              <span>Achievements</span>
            </Head>
            <Ol>
              <li>{userData.ach1}</li>
              <li>{userData.ach2}</li>
            </Ol>
          </Ul>
          <Button2>View CV</Button2>
        </Bottom>
        <Navigators>
          <IC>
            <AiOutlineUser />{" "}
          </IC>
          <ImgHolder>
            <ImgIcon src="/image/1.png" />
          </ImgHolder>
          <IC>
            <AiOutlineBell />{" "}
          </IC>
        </Navigators>
      </Container>
    </Body>
  );
};

export default Profile;

const Body = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 425px;
  height: 100%;
  min-height: 100vh;
  background: white;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: red;
  position: relative;
`;

const CoverPhoto = styled.img`
  height: 200px;
  width: 100%;
  background: black;
  object-fit: cover;
`;

const ProfilePic = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid gold;
  object-fit: cover;
  position: absolute;
  bottom: -60px;
`;

const Mid = styled.div`
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Category = styled.div`
  border-radius: 20px;
  padding: 7px 20px;
  margin-top: 7px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`;

const Numbers = styled.div`
  display: flex;
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const LeftNum = styled.div`
  text-align: center;
  padding: 0px 40px;
  span {
    font-size: 23px;
    font-weight: 600;
  }
  div {
    opacity: 0.7;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(0, 0, 0, 0.6);
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
`;

const Button1 = styled.div`
  width: 40%;
  background: var(--deep);
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: 350ms;
  :hover {
    transform: scale(1.05);
  }
`;

const Label = styled.div`
  margin-top: 30px;
  font-family: "Ubuntu", cursive;
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-bottom: 30px;
`;

const Ul = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 18px;
  }
`;

const Icon = styled.div`
  width: 10px;
  height: 10px;
  background: gold;
  transform: rotate(45deg);
`;

const Text = styled.div`
  margin-top: 7px;
  opacity: 0.8;
  max-width: 85%;
  text-align: justify;
`;

const Ol = styled.ul`
  max-width: 85%;

  li {
    margin-left: -20px;
    margin-top: 10px;
  }
`;

const Button2 = styled.div`
  margin-left: 25px;
  margin-top: 40px;
  width: 130px;
  height: 40px;
  background: var(--deep);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 350ms;
  :hover {
    transform: scale(1.05);
  }
`;

const Navigators = styled.div`
  height: 65px;
  background: var(--border);
  width: 100%;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IC = styled.div`
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

const ImgHolder = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ImgIcon = styled.img`
  height: 90%;
`;

// const Body = styled.div``

// const Body = styled.div``

// const Body = styled.div``

// const Body = styled.div``
