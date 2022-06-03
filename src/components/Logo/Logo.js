import Tilt from "react-parallax-tilt";
import brain from "./logo.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="ma4">
      <Tilt className="Tilt br2 shadow-2" style={{ width: 150, height: 150 }}>
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="Brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
