import "./Button.css";

const Button = ({ img, link, platform, onClick }) => {
  return (
    <div className="custom-button" onClick={onClick}>
      <div className="custom-button-container">
        <img className="img" src={img} alt={platform} />
        <span>Sign in with {platform}</span>
      </div>
    </div>
  );
};

export default Button;
