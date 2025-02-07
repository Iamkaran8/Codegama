import "../TableContents/Table.scss";
import { GoDeviceCameraVideo } from "react-icons/go";
import { CgClose } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";


export const Table = () => {

  return (
    <>
      <div className="container Table">
        <h2>Focus On What Matters</h2>
        <div className="Table-Cont padding">
          <div className="table-topics">
            {/* <p>Dynamic Copyes for Questions</p> */}
            <p style={{visibility:'hidden'}}>Dynamic Copyes for Questions</p>
            
            <p>Dynamic Copyes for Questions</p>
            <p>Auto-Sequence of questions</p>
            <p>Folloup questios on the basis</p>
            <p>ALi thank you and start screen</p>
            <p>Al report generation with all important</p>
          </div>
          <div className="table-metaforms">
            <p className="t-h">Metaforms</p>
            <p className="close-icon"><FaRegCheckCircle /></p>
            <p className="close-icon"><FaRegCheckCircle /></p>
            <p className="close-icon"><FaRegCheckCircle /></p>
            <p className="close-icon"><FaRegCheckCircle /></p>
            <p className="close-icon"><FaRegCheckCircle /></p>
          </div>
          <div className="table-typeforms">
            <p className="t-h">
              <i>
                <GoDeviceCameraVideo />
              </i>
              Typeforms
            </p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
          </div>
          <div className="table-typeforms">
            <p className="t-h">
              <i>
                <GoDeviceCameraVideo />
              </i>
              Typeforms
            </p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
          </div>
          <div className="table-typeforms">
            <p className="t-h">
              <i>
                <GoDeviceCameraVideo />
              </i>
              Typeforms
            </p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
            <p className="close-icon"><CgClose /></p>
          </div>
        </div>
      </div>
    </>
  );
};
