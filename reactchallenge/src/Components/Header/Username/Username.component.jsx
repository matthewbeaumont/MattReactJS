import React, { useState } from "react";

import { Container } from "./Username.elements";

import ProfilePic from "../../../Images/profilePic.jpg";

export default function Username({ UserID, UserNumber, Location }) {
  const [LoginStatus, setLoginStatus] = useState(true);
  return (
    <>
      <Container>
        <div>
          {/* Below are 3 example sof using props */}
          <p>
            Username: <span>{UserID}</span>{" "}
          </p>
          <p>
            Usernumber: <span>{UserNumber}</span>{" "}
          </p>
          <p>
            Location: <span>{Location}</span>{" "}
          </p>
        </div>
        {/* Below is an example of using a State. First the on click event causes a piece of javascript to run. The javascript is saying that the variable LoginStatus needs to be switched to the opposite of its current boolean value. So if it was True then on click it becomes false. I use the State LoginStatus again inside the button as part of a ternary operator where if the value of LoginState is true the button will say "Log Out" and if it is false it will say "Log In" */}
        <button onClick={() => setLoginStatus((LoginStatus) => !LoginStatus)}>
          {" "}
          {LoginStatus ? "Log Out" : "Log In"}{" "}
        </button>
        <img src={ProfilePic} alt="Oh noes! :("></img>
      </Container>
    </>
  );
}
