import '../Banner/Button.scss'

interface Props {
  name: string;
  color: string;
  textColor : string
}
export const Button = ({ name, color ,textColor}: Props) => {
  return <button className='sty-button' style={{ background: `${color}`,color:`${textColor}` }}>{name}</button>;
};
