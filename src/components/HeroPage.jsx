import { useState } from "react";
import AboutME from "./AboutMe/AboutMe";

function   ImageDiv()
{
    return <div id="imageDiv">
           <img src="src/assets/mine.jpg" id="image"></img>
      </div>;
}

function    IntroSection()
{
    return  <div class="HeroPage" id="HeroPage">
      <ImageDiv />
        <div class="divIntroduction">
          <p class="fw-bold" id="le-moi">
          SOUFIANE BAGHDADI
          </p>
          <p class="fw-normal" id="InfoAboutMe">
          Hello there, my name is SOUFAINE BAGHDADI and this is my portfolio.
          </p>
          <div class="buttonDiv">
            <button type="button" onClick={HeroPage(1)} id="myButton" class="btn btn-secondary">SHOW MORE</button>
          </div>
        </div>
      </div>;
}

export default function HeroPage()
{
  return <IntroSection />;
}
