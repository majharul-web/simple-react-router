import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.log(details)
  return (
    <div>
      <h1>Friend Details Coming soon</h1>
      <h3>{details.name}</h3>
      <p>{details.email}</p>
      <p>{details.address?.city}</p>
    </div>
  );
};

export default FriendDetails;
