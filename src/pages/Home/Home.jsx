import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img src={hero_banner} className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" />
          <p>
            "The Guardian" is about a young man who inherits ancient powers and
            must protect his city from dark forces, embarking on a thrilling
            adventure of danger and self-discovery.{" "}
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top picks for you"} />
      </div>
    </div>
  );
};

export default Home;
