import "./Dashboard.css";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header/Header";
import StatCard from "../../components/StatCard/StatCard";
import {
  totallikes,
  totalrevenue,
  totaltransactions,
  totalusers,
} from "../../assets";

const Dashboard = () => {
  const dummyStats = [
    {
      icon: totalrevenue,
      title: "Total Revenues",
      amount: "$2,129,430",
      change: 2.5,
      iconbag: "rgba(127, 205, 147, 1)",
    },
    {
      icon: totaltransactions,
      title: "Total Transactions",
      amount: "1,520",
      change: 1.7,
      iconbag: "rgba(222, 191, 133, 1)",
    },
    {
      icon: totallikes,
      title: "Total Likes",
      amount: "9,721",
      change: 1.4,
      iconbag: "rgba(222, 191, 133, 1)",
    },
    {
      icon: totalusers,
      title: "Total Revenues",
      amount: "9,721",
      change: 4.2,
      iconbag: "rgba(169, 176, 229, 1)",
    },
  ];

  return (
    <div className="dashboard">
      <div className="left">
        <Navigation />
      </div>

      <div className="right">
        <div className="right-container">
          <div>
            <Header />
          </div>
          <div className="statcard-renderer">
            {dummyStats.map((val, ind) => {
              return (
                <StatCard
                  title={val.title}
                  icon={val.icon}
                  amount={val.amount}
                  change={val.change}
                  iconbag={val.iconbag}
                />
              );
            })}
          </div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
