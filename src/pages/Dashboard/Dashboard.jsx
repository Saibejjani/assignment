import "./Dashboard.css";
import Navigation from "../../components/Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <Navigation />
      </div>

      <div className="right">
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
