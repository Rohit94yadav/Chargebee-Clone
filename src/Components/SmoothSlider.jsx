import React from "react";
import  styles  from "../AllStyles/SmoothSlider.module.css";
import SmoothSliderImages from "./SmoothSliderImages";

export default function SmoothSlider() {
  return (
    <div>
      <div className={styles.fifth}>
        <div >
          <ul className={styles.fifth1}>
            <h3>
              <a href="">How It Works</a>
            </h3>
            <h3>
              <a href="">FAQs</a>
            </h3>
            <h3>
              <a href="">Reviews</a>
            </h3>
          </ul>
        </div>
      </div>


      <div className={styles.fifth11}>
        <img src="https://i.postimg.cc/v8SyDphj/home-image-1.png" alt="" />
      </div>

      <div className={styles.fifth11}>
        <img src="https://i.postimg.cc/MTMCBGdF/home-image-2.png" alt="" />
      </div>

     
      
    </div>
  );
}
