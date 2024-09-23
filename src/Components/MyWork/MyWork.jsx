import React, { useState } from "react";
import "./MyWork.css";
import logo from "../../assets/logo.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow.svg";

const MyWork = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-tittle">
        <h1>My Work</h1>
        <img src={logo} alt="" />
      </div>
      <div className={`mywork-container ${isExpanded ? "expanded" : ""}`}>
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={handleShowMore}>
        <p>{isExpanded ? "Show Less" : "Show More"}</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
