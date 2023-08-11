import React from "react";

//user info card after entering user name
const UserProfileCard = ({ user }) => {
  const { avatar_url, login, name, public_repos, public_gists, created_at } =
    user;

  return (
    <div className="user-card">
      <img src={avatar_url} alt={`${login}'s Avatar`} />
      <h3>Name : {name}</h3>
      <p>Github Profile: @{login}</p>
      <p>Profile Created: {new Date(created_at).toLocaleDateString()}</p>
      <p> No.of public repository: {public_repos}</p>
      <p>No.of public gists: {public_gists}</p>
    </div>
  );
};

export default UserProfileCard;
