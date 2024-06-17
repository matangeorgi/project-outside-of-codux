import "./login.css";
import PexelsRrrinna2776108Jpg from "../../assets/pexels-rrrinna-2776108.jpg";

export interface LoginProps {
  className?: string;
  disable: boolean;
  buttonText: string;
}

export const Login: React.FC<LoginProps> = ({ className = "", buttonText }) => (
  <form className="form">
    <label></label>
    <label>Username</label>
    <br />
    <input type="text" />
    <br />
    Password
    <br />
    <input type="text" />
    <br />
    <br />
    <input type="submit" value={buttonText} />
    <img
      className="img"
      style={{ borderRadius: "10px" }}
      src={PexelsRrrinna2776108Jpg}
    />
  </form>
);
