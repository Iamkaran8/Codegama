import "../TrackMatters/TrackMatters.scss";
import '../../Styles/Styles.scss'
import History_card from '../../assets/history-card.png'
import combine_card from '../../assets/combine-card.png'
import date_card from '../../assets/date-card.png'

export const TrackMatters = () => {
    const AllDetails = [
        {
            id:1,
            title:"Transactions",
            description:"Pick winning stocks confidently with 130+ filters or create your",
            img:History_card,
            color: " linear-gradient(90deg, rgba(0,97,61,1) 0%, rgba(139,172,149,1) 53%, rgba(58,110,83,1) 100%)"

        },
        {
            id:2,
            title:"Friends and family",
            description:"Pick winning stocks confidently with 130+ filters or create your",
            img:combine_card,
            color: " linear-gradient(180deg, rgba(29,7,81,1) 0%, rgba(50,35,122,1) 18%, rgba(77,51,171,1) 40%, rgba(85,59,192,1) 70%, rgba(57,29,221,1) 81%, rgba(81,29,105,1) 100%)"
        },
        {
            id:1,
            title:"Timely reminders",
            description:"Pick winning stocks confidently with 130+ filters or create your",
            img:date_card,
            color: " linear-gradient(180deg, rgba(67,41,7,1) 0%, rgba(77,52,12,1) 18%, rgba(82,53,7,1) 31%, rgba(138,98,39,1) 67%, rgba(104,71,25,1) 100%)"
        },
    ]
  return (
    <>
      <div className="container padding TrackMatters">
        <h2>
          Track What
          <br /> Matters to You
        </h2>
    <div className="flex justify_center data_cards_container">
        {
            AllDetails.map((data)=>(
                <div className="data_cards" key={data.id}style={{background:`${data.color}`}} >
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <img  src={data.img} alt={data.title} />
                </div>
            ))
        }
        </div>
      </div>
    </>
  );
};
