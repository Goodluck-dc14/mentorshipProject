import React, { useState, useContext } from "react";
import styled from "styled-components";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../Registration/AuthState";
import { app } from "../base";

const Details = () => {
  const [age, setAge] = useState("");
  const [exp, setExp] = useState("");
  const [cv, setCv] = useState("");
  const [preCv, setPreCv] = useState("");

  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");

  const [ach1, setAch1] = useState("");
  const [ach2, setAch2] = useState("");

  const { currentUser } = useContext(AuthProvider);

  const category = localStorage.getItem("category");

  const Navigate = useNavigate();

  const cvUPloap = async ({ target }) => {
    const file = target.files[0];
    setPreCv(URL.createObjectURL(file));

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("CV/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setCv(URL);
        });
      }
    );
  };

  const upload = async () => {
    await app.firestore().collection("Users").doc(currentUser.uid).update({
      age: age,
      experience: exp,
      skill1: skill1,
      skill2: skill2,
      ach1: ach1,
      ach2: ach2,
      cv: cv,
    });
    await app
      .firestore()
      .collection("category")
      .doc(category)
      .collection("users")
      .doc(currentUser.uid)
      .update({
        age: age,
        experience: exp,
        skill1: skill1,
        skill2: skill2,
        ach1: ach1,
        ach2: ach2,
        cv: cv,
      });

    setAge("");
    setExp("");
    setSkill1("");
    setSkill2("");
    setAch1("");
    setAch2("");
    setCv("");
    Navigate("/onboarding5");
  };

  return (
    <Container>
      <LeftHolder></LeftHolder>
      <TextHolder>
        <InputHolder>
          <Inputer>
            <Label>Enter Your Age</Label>
            <InputMain>
              <Input
                type="number"
                placeholder="20"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <span>Years Old</span>
            </InputMain>
          </Inputer>
          <Inputer>
            <Label>Experience</Label>
            <RestInput
              type="text"
              placeholder="6 years of expireince/beginner"
              value={exp}
              onChange={(e) => {
                setExp(e.target.value);
              }}
            />
          </Inputer>
          <Inputer id="form">
            <Label>
              Input Other Skill <span>(optional)</span>
            </Label>
            <RestInput
              type="text"
              placeholder="6 years of expireince/beginner"
              value={skill1}
              onChange={(e) => {
                setSkill1(e.target.value);
              }}
            />
            <RestInput
              type="teaddxt"
              placeholder="6 years of expireince/beginner"
              value={skill2}
              onChange={(e) => {
                setSkill2(e.target.value);
              }}
            />
            <Add>
              <span>+</span>
            </Add>
          </Inputer>
          <Inputer>
            <Label>
              Achievements <span>(optional)</span>
            </Label>
            <RestInput
              type="text"
              placeholder="6 years of expireince/beginner"
              value={ach1}
              onChange={(e) => {
                setAch1(e.target.value);
              }}
            />
            <RestInput
              type="text"
              placeholder="6 years of expireince/beginner"
              value={ach2}
              onChange={(e) => {
                setAch2(e.target.value);
              }}
            />
            <Add>
              <span>+</span>
            </Add>
          </Inputer>
          <CVInputer>
            <InputMain>
              <CV type="file" placeholder="" id="cv" onChange={cvUPloap} />
              {cv === "" ? (
                <Span>
                  upload your CV <span>(optional)</span>
                </Span>
              ) : (
                <span
                  style={{
                    color: "blue",
                    flex: "0.98",
                    paddingLeft: "10px",
                  }}
                >
                  Cv uploaded
                </span>
              )}

              <label htmlFor="cv">+</label>
            </InputMain>
          </CVInputer>
        </InputHolder>
        <Holder>
          <Button onClick={upload}>Done</Button>
          <Location>
            <NotIt />
            <NotIt />
            <NotIt />
            <It />
            <NotIt />
          </Location>
        </Holder>
      </TextHolder>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  display: flex;
  /* min-height: auto; */
  height: auto;
  color: #525252;
  width: 100%;
  background: black;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/image/8.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;
  position: fixed;
  left: 0;
  top: 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

const TextHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
  background: white;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
  }
`;

const InputHolder = styled.div`
  width: 70%;
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const Inputer = styled.div`
  margin-top: 40px;
`;

const Span = styled.div`
  font-size: 17px;
  width: 90%;
  padding-left: 14px;
  opacity: 0.5;
  span {
    font-size: 14px;
  }
`;

const CVInputer = styled.div`
  margin-top: 40px;

  label {
    font-size: 25px;
    cursor: pointer;
  }
`;

const Label = styled.div`
  font-weight: 500;
  span {
    font-weight: normal;
    font-size: 14px;
  }
`;

const InputMain = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  height: 50px;
  width: 99.7%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.7);
  }
  display: flex;
  align-items: center;
  span {
    color: black;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 17px;
  width: 35px;
  text-align: center;
  padding-top: 5px;
  padding-left: 10px;
  ::placeholder {
    opacity: 0.6;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RestInput = styled.input`
  margin-top: 10px;
  border-radius: 5px;
  height: 50px;
  width: 95%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.7);
  }
  display: flex;
  font-size: 17px;
  align-items: center;
  padding-left: 15px;
  ::placeholder {
    opacity: 0.6;
  }
`;

const Add = styled.div`
  width: 99%;
  text-align: right;
  font-size: 25px;
  margin-top: 10px;

  span {
    cursor: pointer;
  }
`;

const CV = styled.input`
  display: none;
`;

const Holder = styled.div``;

const Button = styled.div`
  margin-top: 30px;
  height: 45px;
  width: 220px;
  background: var(--deep);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

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

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
