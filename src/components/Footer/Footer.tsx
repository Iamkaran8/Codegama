import "../Footer/Footer.scss";
import Arrow from "../../assets/arrow.png";
import linkedin from "../../assets/LIND-MEDIA.png";
import x from "../../assets/X-MEDIA.png";
import insta from "../../assets/LIND-MEDIA.png";
import appstore from "../../assets/app-store.png";
import playstore from "../../assets/play-store.png";

export const Footer = () => {
  const socialMedia = [linkedin, x, insta];
  const app_logos = [appstore,playstore]
  return (
    <>
      <footer className="footer">
        <div className="container padding">
          <div>
            <h2>
              Manage ypur Sales
              <br />
              and analytics at one
              <br />
              place
            </h2>
          </div>
          <div className="footer-content flex">
            <div className="footer-dec">
              <img src={Arrow} alt="logo_img" />
              <p>
                Empowering your Projects,
                <br />
                Enhancing Your Sucess, Every
                <br />
                step of the way.
              </p>
              <div className="social-cont">
                {socialMedia.map((data) => (
                  <img className="social_icon" src={data} alt={data} />
                ))}
              </div>
            </div>
            <div className="footer-app">
                <p>Download our App</p>
                <div className="app_logo flex flex_col">
                    {
                        app_logos.map((img)=>(
                            <img key={img} src={img} alt="app_logos" />
                        ))
                    }
                </div>
            </div>

          </div>
          <div className="copy_right flex space_between ">
                <p>@karans</p>
                <p>Privacy Policy</p>
            </div>
        </div>
      </footer>
    </>
  );
};
