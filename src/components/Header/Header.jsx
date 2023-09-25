import { auth, signOut } from "../../utils/firebase";
import { profilepic, searchicon, notification } from "../../assets";
import "./Header.css";

const Header = ({ isNavOpen, setIsNavOpen }) => {
  const logOut = async () => {
    try {
      await signOut(auth);
      alert("signed out");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="dash-header">
      <div
        className="hamburgernav"
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
      >
        {isNavOpen ? "⚟" : "꠵"}
      </div>
      <div className="dash-header-left">
        <h3 className="dash-heading">Dashboard</h3>
      </div>
      <div className="dash-header-right">
        <div className="search">
          <input type="text" placeholder="search..." />
          <img src={searchicon} alt="" />
        </div>
        <div className="notification">
          <img src={notification} alt="" />
        </div>
        <div className="profile">
          <img src={profilepic} alt="" onClick={logOut} />
        </div>
      </div>
    </div>
  );
};

export default Header;
