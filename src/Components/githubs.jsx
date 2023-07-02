import React from "react";
import GitHubCalendar from "react-github-calendar";

const Githubs = () => {
  return (
    <div id="githubs" className="max-width">
      <div className="main-text">
        <h2>
          <span>GitHub </span>Statistics
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Shivampasvan&show_icons=true&locale=en&theme=github_dark&hide_border=true"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Shivampasvan&show_icons=true&locale=en&layout=compact&theme=github_dark&hide_border=true"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Shivampasvan&theme=github-dark&hide_border=true&date_format=j%20M%5B%20Y%5D"
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <img
          src="https://komarev.com/ghpvc/?username=Shivampasvan&label=Profile%20views&color=9130c2&style=flat"
          alt="count"
        />
      </div>
      <div
        className="react-activity-calendar"
        style={{ margin: "10px auto 20px auto" }}
      >
        <GitHubCalendar
          colorScheme={"light"}
          // year={2023}
          username="shivampasvan"
        />
      </div>
    </div>
  );
};

export default Githubs;
