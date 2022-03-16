import React, { useContext, useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../Registration/AuthState";
import { app } from "../base";

const Category = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const { currentUser } = useContext(AuthProvider);

  const getData = async () => {
    await app
      .firestore()
      .collection("category")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setData(r);
      });
  };

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

  const select = async (catProp) => {
    await app
      .firestore()
      .collection("category")
      .doc(catProp)
      .collection("users")
      .doc(currentUser.uid)
      .set({
        createdBy: userData.createdBy,
        userEmail: userData.userEmail,
        username: userData.username,
        category: catProp,
      });

    await app.firestore().collection("Users").doc(currentUser.uid).update({
      category: catProp,
    });

    Navigate("/imgBio");
  };

  const create = async () => {
    await app.firestore().collection("category").doc(text).set({});

    await app
      .firestore()
      .collection("category")
      .doc(text)
      .collection("users")
      .doc(currentUser.uid)
      .set({
        createdBy: userData.createdBy,
        userEmail: userData.userEmail,
        username: userData.username,
        category: text,
      });

    await app.firestore().collection("Users").doc(currentUser.uid).update({
      category: text,
    });

    setText("");
    Navigate("/imgBio");
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  return (
    <Container>
      <LeftHolder>
        <SearchBar>
          <Icon>
            <BiSearch />
          </Icon>
          <Input placeholder="Search category" />
        </SearchBar>
        <Hold>
          <Topic>Top Pick</Topic>
          <Result>
            {data?.map((props) => (
              <Cat
                key={props.id}
                onClick={() => {
                  select(props.id);
                  localStorage.setItem("category", props.id);
                }}
              >
                {props.id}
              </Cat>
            ))}
            <Cat
              onClick={() => {
                document.getElementById("moda").style.display = "flex";
              }}
            >
              Create
            </Cat>
            <Create id="moda">
              <Box>
                <Cancel>
                  <MdOutlineCancel
                    style={{
                      margin: "5px",
                      cursor: "pointer",
                      color: "red",
                    }}
                    onClick={() => {
                      document.getElementById("moda").style.display = "none";
                    }}
                  />
                </Cancel>
                <Inputs>
                  <Label>Create Category</Label>
                  <Input1
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </Inputs>
                <Button1 onClick={create}>Done</Button1>
              </Box>
            </Create>
          </Result>
        </Hold>
      </LeftHolder>
      <TextHolder>
        <Title>Select at least one category </Title>
        <Text>
          The algorithm takes care to create text that looks similar to an
          ordinary book but without meaning.{" "}
        </Text>
        <Holder>
          <Location>
            <NotIt />
            <It />
            <NotIt />
            <NotIt />
            <NotIt />
          </Location>
        </Holder>
      </TextHolder>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  min-height: 100%;
  height: 100vh;
  color: #525252;
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    height: 100%;
    min-height: 100vh;
  }
`;

const LeftHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBar = styled.div`
  width: 80%;
  height: 50px;
  background: var(--back);
  margin-top: 20px;
  border-radius: 100px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: var(--gold);
  font-size: 20px;
  margin-left: 15px;
  margin-top: 5px;
`;

const Input = styled.input`
  margin-left: 20px;
  height: 80%;
  flex: 0.99;
  border-radius: 0 100px 100px 0;
  border: none;
  background: none;
  outline: none;
  font-size: 17px;
`;

const Hold = styled.div`
  width: 80%;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Topic = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Result = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const Cat = styled.div`
  border: 1px solid var(--border);
  padding: 5px 15px;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-right: 10px;
  transition: 350ms;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
    /* color: white; */
  }
`;

const TextHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
    margin-top: 200px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: black;
  @media screen and (max-width: 425px) {
    margin-top: 30px;
    text-align: center;
    font-size: 30px;
  }
`;

const Text = styled.div`
  max-width: 80%;
  margin-top: 20px;
  font-size: 18px;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Holder = styled.div``;

const Location = styled.div`
  margin-top: 30px;
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const It = styled.div`
  width: 30px;
  height: 3px;
  background-color: var(--deep);
  margin-right: 15px;
  @media screen and (max-width: 425px) {
    margin-left: 15px;
    margin-right: unset;
    width: 20px;
  }
`;

const NotIt = styled.div`
  width: 30px;
  height: 3px;
  margin-right: 15px;
  background-color: var(--deep);
  opacity: 0.3;
  @media screen and (max-width: 425px) {
    margin-left: 15px;
    margin-right: unset;
    width: 20px;
  }
`;

const Create = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.3px);
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

const Box = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cancel = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.div`
  color: black;
`;

const Input1 = styled.input`
  height: 35px;
  width: 78%;
  border: none;
  outline: 1px solid rgba(0, 0, 0, 0.4);
  margin-top: 10px;
  border-radius: 5px;
  padding-left: 5px;
  text-transform: lowercase;
`;

const Button1 = styled.div`
  background: var(--deep);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  border-radius: 3px;
  color: white;
  margin-top: 20px;
`;
