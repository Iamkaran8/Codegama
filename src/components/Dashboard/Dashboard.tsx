import Dash_img from "../../assets/main-dashboard.png";
import '../Dashboard/Dashboard.scss'
export const Dashboard = () => {
  return (
    <>
      <div className="container Dashboard">
        <img src={Dash_img} alt="Dashboard" />
      </div>
    </>
  );
};
