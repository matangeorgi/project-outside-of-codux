import "./login.css";
import React from "react";
import PexelsRrrinna2776108Jpg from "../../assets/pexels-rrrinna-2776108.jpg";

export interface LoginProps {
  className?: string;
  disable: boolean;
  buttonText: string;
}

export const Login: React.FC<LoginProps> = ({ className = "", buttonText }) => (
  <form className="form">
    <label>Username</label>
    <br />
    <input type="text" />
    <br />
    <label>Password</label>
    <br />
    <input type="text" />
    <br />
    <br />
    <input type="submit" value={buttonText} />
    <img src={PexelsRrrinna2776108Jpg} className="img" style={{borderRadius: '10px'}}/>
  </form>
);
