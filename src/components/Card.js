import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <img
        alt="robotphoto"
        src={`https://robohash.org/${id}?size=400x400`}
        width="200px"
        height="200px"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
