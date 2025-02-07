import "../Focus/Focus.scss";
import { FaCreativeCommonsSampling } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";
import tab_img from "../../assets/lapbanner.png";
import tab_imgs from "../../assets/lapbanner 1.png";
import { useState } from "react";

export const Focus = () => {
  interface activetype {
    creator: boolean;
    user: boolean;
  }
  
  const [active, setActive] = useState<activetype>({
    creator: true,
    user: false,
  });

  const handleTab = (tab: string) => {
    if (tab === "creator") {
      setActive({
        creator: true,
        user: false,
      });
    } else if (tab === "user") {
      setActive({
        creator: false,
        user: true,
      });
    }
  };

  return (
    <>
      <div className="container focus flex flex_col padding">
        <h2>Keep track of all usage</h2>
        <p>Checkout how both ends of forms look like for our users</p>
        <div className="tab">
          <div className="tab-inside">
            <button
              className={`${active.creator ? "active" : ""}`}
              onClick={() => handleTab("creator")}
            >
              <i>
                <FaCreativeCommonsSampling />
              </i>
              Creator View
            </button>
            <button
              className={`${active.user ? "active" : ""}`}
              onClick={() => handleTab("user")}
            >
              <i>
                <FaGalacticRepublic />
              </i>
              End User View
            </button>
          </div>
        </div>
        <div className="tab-content">
            {
                active.user ? (
                    <img
                    src={tab_img}
                    alt="tabimage"
                    className={`${active.creator || active.user ? "fadeIn" : ""}`}
                  />
                ) : (
                    <img
                    src={tab_imgs}
                    alt="tabimage"
                    className={`${active.creator || active.user ? "fadeIn" : ""}`}
                  />
                )
            }
        </div>
      </div>
    </>
  );
};
