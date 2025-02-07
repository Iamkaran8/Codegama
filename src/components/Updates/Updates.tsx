import "../Updates/Updates.scss";
import img1 from "../../assets/image-section-one.png";
import img2 from "../../assets/image-section-two.png";
import img3 from "../../assets/image-section-three.png";

export const Updates = () => {
  const UpdatesData = [
    {
      id: 1,
      title: "Timely alerts & sync ups",
      details:
        "Pick winning stocks confidently with 130+ filters or create your own goal-based screensPick winning stocks confidently with 130+ filters or create your own goal-based screens",
      img: img1,
      width:"65%",
      height:"500px",
    },
    {
      id: 2,
      title: "Timely alerts",
      details:
        "Pick winning stocks confidently with 130+ filters or create your own goal-based screens",
      img: img2,
      width:"26%",
      height:"500px",
      
    },
    {
      id: 2,
      title: "imely alerts & sync ups",
      details:
        "Pick winning stocks confidently with 130+ filters or create your own goal-based screensPick winning stocks confidently",
      img: img3,
      width:"100%",
      height:"350px",
    },
  ];
  return (
    <>
      <div className="container updates padding">
        <h2>Blogs and newsroom updates</h2>
        <p className="para">
          A community for india's investors hang out and talk about investments,
          personal finance
        </p>
        <div className="img_updates flex">
            {
                UpdatesData.map((data)=>(
                    <div key={data.id} className="Update_img-Container" style={{width:`${data.width}`, height:`${data.height}` ,backgroundImage:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(32, 37, 34, 0.625) 31%, rgba(32, 37, 34, 1) 100%), url(${data.img})`}}>
                        
                        <h3>{data.title}</h3>
                        <p>{data.details}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
};
