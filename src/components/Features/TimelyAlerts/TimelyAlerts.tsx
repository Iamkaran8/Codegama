import "./TimelyAlerts.scss";

interface Props {
  title: string;
  content: string;
  image: any;
}
export const TimelyAlerts = ({ title, content, image }: Props) => {
  return (
    <>
      <div className="ct">
        <h3>{title}</h3>
        <p>{content}</p>
        <img src={image} alt="image" />
      </div>
    </>
  );
};
