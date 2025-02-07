import realtimeTrack from  '../../assets/icons-1.png'
import detailedRepor from  '../../assets/icons-2.png'
import alerts from  '../../assets/icons-3.png'
import '../keyPoints/KeyPoints.scss'

export const KeyPoints = ()=>{

    const allPoints = [
        {
            id:1,
            icon:realtimeTrack ,
            title: "Real-Time Tracking",
            points: "Monitor Usage as it happens to stay updated with the latest data."
        },
        {
            id:2,
            icon:detailedRepor ,
            title: "Detailed Reporting",
            points: "Generate in-depth reports that provide insights into usage patterns and trends/"
        },
        {
            id:3,
            icon:alerts ,
            title: "Customizable Alerts",
            points: "Set up notification for specific usage thresholds or unusual activity"
        },
    ]
    return(
        <>
        <div className='container flex padding keypoints '>
            {
                allPoints.map((data)=>(
                    <div key={data.id} className='keyPoints-cotainer'>
                        <img src={data.icon} alt={data.title} />
                        <h3>{data.title}</h3>
                        <p>{data.points}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}