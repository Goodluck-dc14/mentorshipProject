import React, { useState, useContext } from "react";
import styled from "styled-components";
import { app } from "../base";
import { AuthProvider } from "../Registration/AuthState";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

const ImgBio = () => {
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");

  const { currentUser } = useContext(AuthProvider);

  const category = localStorage.getItem("category");

  const Navigate = useNavigate();

  const uploadImage = async ({ target }) => {
    const file = target.files[0];
    setImg(URL.createObjectURL(file));
    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (err) => console.log(err.message),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((URL) => {
          setAvatar(URL);
        });
      }
    );
  };

  const Post = async () => {
    await app
      .firestore()
      .collection("Users")
      .doc(currentUser.uid)
      .update({ img: avatar, bio: bio });

    await app
      .firestore()
      .collection("category")
      .doc(category)
      .collection("users")
      .doc(currentUser.uid)
      .update({ img: avatar, bio: bio });

    Navigate("/imgBio");
    setImg("");
    setBio("");
    Navigate("/details");
  };

  return (
    <Container>
      <TOpHolder>
        <Left>
          <Image src={img} />
          {img === "" ? <Overlay htmlFor="img">+</Overlay> : null}
        </Left>
        <Right>
          <Inp type="file" onChange={uploadImage} id="img" />
          <span>Create your bio</span>
          <TextArea
            placeholder="Type here....."
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </Right>
      </TOpHolder>
      <TextHolder>
        <Title>Welcome Romanus</Title>
        <Text>
          The algorithm takes care to create text that looks similar to an
          ordinary book but without meaning.{" "}
        </Text>
        <Holder>
          <Button
            onClick={() => {
              Post();
            }}
          >
            Next
          </Button>
          <Location>
            <NotIt />
            <NotIt />
            <It />
            <NotIt />
            <NotIt />
          </Location>
        </Holder>
      </TextHolder>
    </Container>
  );
};

export default ImgBio;

const Container = styled.div`
  display: flex;
  min-height: auto;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Left = styled.div`
  width: 50%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    padding-right: unset;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 95%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  justify-content: center;
  span {
    color: var(--border);
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    padding-left: unset;
    /* width: 100%; */
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const TOpHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: black;
  @media screen and (max-width: 425px) {
    margin-top: 30px;
    font-size: 30px;
  }
`;

const Text = styled.div`
  max-width: 80%;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
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

const Image = styled.img`
  background: rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
  overflow: hidden;
  @media screen and (max-width: 320px) {
    width: 270px;
    height: 270px;
  }
`;

const Overlay = styled.label`
  background: rgba(33, 50, 94, 0.2);
  width: 300px;
  height: 300px;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  cursor: pointer;
  border: 1px dashed rgba(33, 50, 94, 0.5);
  @media screen and (max-width: 320px) {
    width: 270px;
    height: 270px;
  }
`;

const TextArea = styled.textarea`
  max-width: 65%;
  min-height: 250px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 20px;
  outline: 1px solid rgba(0, 0, 0, 0.3);
  border: none;
  font-size: 17px;
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.9);
  }
  ::placeholder {
    font-family: "Ubuntu", sans-serif;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
    max-width: 85%;
  }
`;

const Inp = styled.input`
  display: none;
`;

// const Container = styled.div``;

// const Container = styled.div``;
