
import { Button } from "../Banner/Button";
import { Dashboard } from "../Dashboard/Dashboard";
import "../HomeHero/Hero.scss";

export const Hero = () => {
  return (
    <>
      <div className="container Hero flex flex_col">
        <div className="heading_cont">
          <span className="fund">
            Raised $1.5 Million funding <small>ReadMore {">"}</small>
          </span>
          <h1>
            Manage Your Sales And <br />
            analytics at one place
          </h1>
          <p>
            The page you are loking for does not exist. <br />
            Sign up for Framer to punlish your own website.
          </p>
          <div className="tw-btn flex ">
            <Button name={"Buy Template"} color="white" textColor="black" />
            <Button name={"Book Demo"} color="#131312b0" textColor="white" />
          </div>
          <Dashboard/>
        </div>
      </div>
    </>
  );
};
