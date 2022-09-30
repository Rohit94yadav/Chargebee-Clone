import React from "react";
import { Link } from "react-router-dom";

import SimpleSlider from "../Components/Carousel";
import SimpleSliderHome from "../Components/CarouselHome";
import DesignToGoBeyondBulding from "../Components/DesignToGoBeyondBulding";
import HomeLast from "../Components/HomeLast";
import LearnMore from "../Components/LearnMore";
import SmoothSlider from "../Components/SmoothSlider";
export default function Home() {
  return (
    <div>
      
      

     
        <SimpleSlider/>

        <SimpleSliderHome/>
    
    <DesignToGoBeyondBulding/>

    <HomeLast/>
    
    <SmoothSlider/>

  



    </div>
  );
}
