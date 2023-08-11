import React, { useState } from "react";
import "./styles/App.scss";
import UserInputForm from "./components/UserInputForm";
import UserProfileCard from "./components/UserProfileCard";

// Deployed
// https://64d5e814c687dc3ab56af69e--radiant-jelly-d7e16e.netlify.app/

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleUserDataFetched = (data) => {
    setUserData(data);
  };

  return (
    <div className="app">
      <h1>Github User Information</h1>
      <UserInputForm onUserDataFetched={handleUserDataFetched} />
      {userData && <UserProfileCard user={userData} />}
    </div>
  );
};

export default App;
