import "./Navigation.css";

import { dashboard, schedule, transaction, setting, user } from "../../assets";
const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="top">
          <div className="heading">
            <h1>Board.</h1>
          </div>
          <div className="list">
            <div className="active">
              <img src={dashboard} alt="dashboard-icon" />
              <span>Dashboard</span>
            </div>
            <div>
              <img src={transaction} alt="transaction icon" />
              <span>Transactions</span>
            </div>

            <div>
              <img src={schedule} alt="schedule icon" />
              <span>Schedules</span>
            </div>

            <div>
              <img src={user} alt="user icon" />
              <span>Users</span>
            </div>
            <div>
              <img src={setting} alt="settings icon" />
              <span>Settings</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <a>Help</a>
          </div>
          <div>
            <a>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
