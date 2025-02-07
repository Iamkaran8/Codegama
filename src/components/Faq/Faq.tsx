import { useState } from "react";
import "../Faq/Faq.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiSnowflakeFill } from "react-icons/ri";

export const Faq = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);
  const handleToggle = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  const FAQs = [
    {
      id: 1,
      ques: "What is the conversion % of MetaForm?",
      ans: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
      id: 2,
      ques: "How do your quote pricing works and when can we get on call?",
      ans: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
      id: 3,
      ques: "Can you facelift my design?",
      ans: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
      id: 4,
      ques: "What is the conversion % of MetaForm?",
      ans: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
  ];
  return (
    <>
      <div className="container Faq padding">
        <i className="snow">
          <RiSnowflakeFill />
        </i>
        <h2>Frequently Asked Questions</h2>
        <p className="h-para">
          A Community for india's investors hang out and talk about investments,
          personal finance
        </p>

        <div className="Faq_cont">
          {FAQs.map((data) => (
            <div
              className="Faq_outline"
              key={data.id}
              onClick={() => handleToggle(data.id)}
            >
              <div className="flex justify-center align_center space_between">
                <h4>{data.ques}</h4>
                {isOpen === data.id ? (
                  <i style={{ fontSize: "20px" }}>
                    <IoIosArrowUp />
                  </i>
                ) : (
                  <i style={{ fontSize: "20px" }}>
                    <IoIosArrowDown />
                  </i>
                )}
              </div>

              {isOpen === data.id ? <p className="answer">{data.ans}</p> : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
