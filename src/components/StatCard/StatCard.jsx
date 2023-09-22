import "./StatCard.css";

const StatCard = (props) => {
  const { title, icon, change, amount, iconbag } = props;
  return (
    <div className="statcard">
      <div className="statcard-icon" style={{ backgroundColor: iconbag }}>
        <img src={icon} alt={title} />
      </div>
      <div className="statcard-revenue">
        <span>{title}</span>
      </div>
      <div className="amountchanges">
        <div className="stat-amount">
          <span>{amount}</span>
        </div>
        <div className="stat-change">
          <span>+{change}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
