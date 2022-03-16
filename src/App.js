import React from "react";
import SignUp from "./Registration/SignUp";
import Structure from "./sheCodes/StructureHeader/Structure";
import SignIn from "./Registration/SignIn";
import Onboarding1 from "./ProfileSetUp/Onboarding1";
import Category from "./ProfileSetUp/Category";
import ImgBio from "./ProfileSetUp/ImgBio";
import Details from "./ProfileSetUp/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./UserProfile/Profile";
import Onboarding5 from "./ProfileSetUp/Onboarding5";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Structure />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/imgBio" element={<ImgBio />} />
          <Route path="/details" element={<Details />} />
          <Route path="/onboarding5" element={<Onboarding5 />} />
          <Route path="/userpage" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
