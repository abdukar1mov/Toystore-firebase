import React from "react";
import { signInWithGoogle } from "../config/firebase";
import styled from "styled-components";
import bg from "../images/Login-img.webp";

const Login = () => {
  return (
    <Logined>
      <div className="bg"></div>
      <div className="text">
        <button onClick={signInWithGoogle} className="btn">
          Register
        </button>
      </div>
    </Logined>
  );
};
const Logined = styled.div`
  .bg {
    background: url(${bg}) no-repeat center center/cover;
    width: 100%;
    height: 100vh;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 600;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    width: 200px;
  }
`;

export default Login;
