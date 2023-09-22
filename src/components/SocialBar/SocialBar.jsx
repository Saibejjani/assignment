import "./SocialBar.css";
import { github, twitter, linkedin, discord } from "../../assets/";
const SocialBar = () => {
  return (
    <div className="social-bar">
      <img src={github} alt="" />
      <img src={twitter} alt="" />
      <img src={linkedin} alt="" />
      <img src={discord} alt="" />
    </div>
  );
};

export default SocialBar;
