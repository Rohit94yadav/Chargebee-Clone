import React from "react";
import { Link } from "react-router-dom";

import styles from "../AllStyles/Home.module.css";
import SimpleSlider from "../Components/Carousel";
import SimpleSliderHome from "../Components/CarouselHome";
import DesignToGoBeyondBulding from "../Components/DesignToGoBeyondBulding";
export default function Home() {
  return (
    <div>
      
      

     
        <SimpleSlider/>

        <SimpleSliderHome/>
    
    <DesignToGoBeyondBulding/>



    </div>
  );
}
