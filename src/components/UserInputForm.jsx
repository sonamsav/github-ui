import React, { useState } from "react";
import axios from "axios";

const UserInputForm = ({ onUserDataFetched }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      onUserDataFetched(response.data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" className="submit-button">
        Get User Info
      </button>
    </form>
  );
};

export default UserInputForm;
