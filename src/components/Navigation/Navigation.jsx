import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="top">
          <div className="heading">
            <h1>board</h1>
          </div>
          <div className="list">
            <a href="/">
              <span></span>
              Dashboard
            </a>
            <a href="/">
              <span></span>
              Transactions
            </a>

            <a href="/">
              <span></span>
              Schedules
            </a>

            <a href="/">
              <span></span>
              Users
            </a>
            <a href="/">
              <span></span>
              Settings
            </a>
          </div>
        </div>
        <div className="bottom">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
