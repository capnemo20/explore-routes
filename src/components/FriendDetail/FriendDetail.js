import React from "react";
import "./FriendDetail.css";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();

  return (
    <div>
      <h1>Details About: {friend.name}</h1>
      <p>Call Him/Her: {friend.phone}</p>
      <h2>Everything you need to about this person</h2>
    </div>
  );
};

export default FriendDetail;
