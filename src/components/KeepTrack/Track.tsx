import "../KeepTrack/Track.scss";
import "../../Styles/Styles.scss";
import Track_dashboard_img from "../../assets/manage-dashboard.png";
import { TbRecharging } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

export const Track = () => {
  const list_datas = [
    {
      id: 1,
      icon: <TbRecharging />,
      list: "Comprehensive usage Monitoring",
    },
    {
      id: 2,
      icon: <MdOutlineManageAccounts />,
      list: "Efficient Management",
    },
    {
      id: 1,
      icon: <RiNewspaperLine />,
      list: "Enhanced oversight",
    },
  ];
  return (
    <>
      <div className="container flex Track padding">
        <div className="left">
          <h2>Keep track of all usage</h2>
          <p>
            Tracking All Usages for Efficient <br /> Management and
            Comprehensive Oversight
          </p>
          <div className="list-cont ">
          {list_datas.map((datas) => (
            <div key={datas.id} className="flex list">
              <i className="flex align_center">{datas.icon}</i>
              <p>{datas.list}</p>
            </div>
          ))}
          </div>
          <div className="btn-cont" style={{marginTop:'50px'}}>
            <button className="button">
              Got To Watch List <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="right">
          <img src={Track_dashboard_img} />
        </div>
      </div>
    </>
  );
};
