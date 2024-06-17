import "./login.css";
import PexelsRrrinna2776108Jpg from "../../assets/pexels-rrrinna-2776108.jpg";

export interface LoginProps {
  className?: string;
  disable: boolean;
  buttonText: string;
}

export const Login: React.FC<LoginProps> = ({ className = "", buttonText }) => (
  <form className="form">
    <br />
    <label></label>
    <input type="text" />
    <img
      className="img"
      style={{ borderRadius: "10px" }}
      src={PexelsRrrinna2776108Jpg}
    />
    <br />
    Password
    <br />
    <input type="text" />
    <br />
    <label>Username</label>
    <br />
    <input type="submit" value={buttonText} />
  </form>
);
