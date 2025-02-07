import "../Reviews/Reviews.scss";

export const Reviews = () => {
  const All_Reviews = [
    {
      id: 1,
      name: "Rohin Singh",
      position: "Cheif Integrating officer",
      review:
        "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future.",
    },
    {
      id: 2,
      name: "Rohin Singh",
      position: "Cheif Integrating officer",
      review:
        "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future.",
    },
    {
      id: 3,
      name: "Rohin Singh",
      position: "Cheif Integrating officer",
      review:
        "We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future.",
    },
  ];
  return (
    <>
      <div className="container flex Reviews padding">
        {All_Reviews.map((data) => (
          <div key={data.id} className="Reviews_container">
            <p>"{data.review}"</p>
            <h6 className="r-name">{data.name}</h6>
            <h6 className="r-position">{data.position}</h6>
          </div>
        ))}
      </div>
    </>
  );
};
