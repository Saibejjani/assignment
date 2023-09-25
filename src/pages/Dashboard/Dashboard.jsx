import { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import {
  totallikes,
  totalrevenue,
  totaltransactions,
  totalusers,
} from "../../assets";
import {
  Navigation,
  ProductsCard,
  MainChart,
  ProfileCard,
  Header,
  StatCard,
  Modal,
} from "../../components";

const Dashboard = ({ user, userData }) => {
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

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const navRef = useRef();

  useEffect(() => {
    if (isNavOpen) {
      navRef.current.classList.add("mobile-open");
    } else {
      navRef.current.classList.remove("mobile-open");
    }
  }, [isNavOpen]);

  return (
    <div className="dashboard">
      <div className="left" ref={navRef}>
        <Navigation isNavOpen={isNavOpen} />
      </div>

      <div className="right">
        <div className="right-container">
          <div>
            <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
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
                  key={ind}
                />
              );
            })}
          </div>
          <div className="graph-renderer">
            <MainChart />
          </div>
          <div className="bottomcard-rendrer">
            <ProductsCard />

            <ProfileCard modalOpen={setIsModalOpen} userData={userData} />
            {isModalOpen && (
              <Modal
                closeModal={setIsModalOpen}
                formData={formData}
                setFormData={setFormData}
                user={user}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
