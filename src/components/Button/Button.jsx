import "./Button.css";

const Button = ({ img, link, platform }) => {
  return (
    <div className="custom-button">
      <div className="custom-button-container">
        <img className="img" src={img} alt={platform} />
        <span>Sign in with {platform}</span>
      </div>
    </div>
  );
};

export default Button;
