import React from "react";



export const UnauthorizedPage = () => {
  return (
    <>
      {" "}
      <div className="unheading">This is Unauthorized page</div>
      <div className="uncontent">
        You cannot access the private page as u havent subscribed the byte's
        youtube channel
      </div>
      <button>SUBSCRIBE</button>
    </>
  );
};
export default UnauthorizedPage;