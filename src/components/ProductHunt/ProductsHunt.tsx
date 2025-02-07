import "../ProductHunt/ProductsHunt.scss";
import rank from "../../assets/Ranking position.png";
import certificate from "../../assets/pro-certificate.png";
export const ProductHunt = () => {
  const images = [
    {
      id: 1,
      img: rank,
    },
    {
      id: 2,
      img: certificate,
    },
  ];
  return (
    <>
      <div className=" container ProductsHunt flex">
        <div className="left_side flex flex_col">
          {images.map((img) => (
            <img src={img.img} alt="img" />
          ))}
        </div>
        <div className="right_side">
          <div className="user_ti">
            <h2>40,00,000+</h2>
            <h6>USERS LOVE TICKERTAPE</h6>
          </div>
          <div className="rating-cont">
            <div className="google-play">
              <h2>4.6</h2>
              <h6>GOOGLE PLAY RATING</h6>
            </div>
            <div className="TRANSACTION">
              <h2>100CR+</h2>
              <h6>TRANSACTION VOLUME</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
