import NetFlix from "../../assets/Item -6.png";
import AirBnb from "../../assets/Item -2.png";
import MicroSoft from "../../assets/Item -3.png";
import Disnep from "../../assets/Item -4.png";
import DuoLingo from "../../assets/Item-1.png";
import "../../Styles/Styles.scss";
import '../../components/Brands/Brands.scss'

export const Brands = () => {
  const BrandImages = [NetFlix, AirBnb, MicroSoft, Disnep, DuoLingo,NetFlix];
  return (
    <>
      
        <div className="Brands container flex justify_center space_around padding">
          {BrandImages.map((img) => (
            <>
              <img key={img} src={img} alt="img" />
            </>
          ))}
        </div>
      
    </>
  );
};
