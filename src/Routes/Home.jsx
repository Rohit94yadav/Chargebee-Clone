import React from "react";


import SimpleSlider from "../Components/Carousel";
import SimpleSliderHome from "../Components/CarouselHome";
import DesignToGoBeyondBulding from "../Components/DesignToGoBeyondBulding";
import HomeLast from "../Components/HomeLast";

import SmoothSlider from "../Components/SmoothSlider";
export default function Home() {
  return (
    <div style={{display:"flex",flexDirection:"column",margin:"auto",justifyContent:"center",alignItems:"center"}}>
      
     
     
        <SimpleSlider/>

        <SimpleSliderHome/>
    
    <DesignToGoBeyondBulding/>

    <SmoothSlider/>
    <HomeLast/>
    

  



    </div>
  );
}
