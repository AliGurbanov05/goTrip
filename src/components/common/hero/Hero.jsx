import React from "react";
import style from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.txt}>
        <h1 className={style.title}>
          Find Your <span className={style.underlined}>Next Tour</span>
        </h1>
        <p>Where would you like to go</p>
        <div className={style.inputs}>
          <input type="text" placeholder="Where would you like to go ?" />
          <select className={style.select}>
            <option value="volvo">Section 1</option>
            <option value="saab">Section 2</option>
            <option value="opel">Section 3</option>
            <option value="audi">Section 4</option>
          </select>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
