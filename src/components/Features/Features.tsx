import "../Features/Features.scss";
import { TimelyAlerts } from "./TimelyAlerts/TimelyAlerts";
import barcode_img from "../../assets/bar-code-scan.png";
import notify_img from "../../assets/notification.png";
import listofmedia_img from "../../assets/list-of-media.png";

export const Features = () => {
  return (
    <>
      <div className="container padding Features flex ">
        <div className="left-fut">
          <div className="left-insidecont">
            <TimelyAlerts
              title="Timely alerts & sync ups"
              content="Pick winning stocks confidentily with 130+ filters or create your own goal-based screens"
              image={notify_img}
            /> 
            <TimelyAlerts
              title="Timely alerts & sync ups"
              content="Pick winning stocks confidentily with 130+ filters or create your own goal-based screens"
              image={barcode_img}
            />
          </div>
        </div>
        <div className="right-fut">
          <TimelyAlerts
            title="Timely alerts & sync ups"
            content="Pick winning stocks confidentily with 130+ filters or create your own goal-based screens"
            image={listofmedia_img}
          />
        </div>
      </div>
    </>
  );
};
