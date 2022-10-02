import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../AllStyles/Register.module.css";

export default function RegisterCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className={styles.firsthometop} {...settings}>
      <div className={styles.firsthometop1}>
        <div className={styles.firsthometop11}>
          <img 
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/dailius-wilson-getaccept.png"
            alt=""
          />
        </div>

        <div className={styles.firsthometop12}>
          <h1>Dailius Wilson</h1>
          <h3 style={{fontSize:"14px"}}>VP Sales & Growth</h3>
        </div>

        <div className={styles.firsthometop13}>
          <p style={{fontSize:"18px"}}>
            Chargebee is a fantastic solution that really meets the needs of any
            SaaS business. Our revenue grew 4x in 12 months, using Chargebee.
          </p>
          <img style={{width:"140px"}}
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/get-accept-logo.svg"
            alt=""
          />

            <p style={{fontSize:"14px",marginTop:"60px"}}>CUSTOMER-CENTRIC APPROACH</p>

        </div>
      </div>




      <div className={styles.firsthometop1}>
        <div className={styles.firsthometop11}>
          <img 
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/gilles-bertaux-livestorm.png"
            alt=""
          />
        </div>

        <div className={styles.firsthometop12}>
          <h1>Gilles Bertaux</h1>
          <h3 style={{fontSize:"14px"}}>Co-founder & CEO</h3>
        </div>

        <div className={styles.firsthometop13}>
          <p style={{fontSize:"18px"}}>
          Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not any situations that'll come up in the future.
          </p>
          <img style={{width:"140px"}}
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/livestorm-logo.svg"
            alt=""
          />

            <p style={{fontSize:"14px",marginTop:"60px"}}>CUSTOMER-CENTRIC APPROACH</p>

        </div>
      </div>








      <div className={styles.firsthometop1}>
        <div className={styles.firsthometop11}>
          <img 
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/justin-garcia-inspirecio.png"
            alt=""
          />
        </div>

        <div className={styles.firsthometop12}>
          <h1>Justin Garcia</h1>
          <h3 style={{fontSize:"14px"}}>Dir. of Technology</h3>
        </div>

        <div className={styles.firsthometop13}>
          <p style={{fontSize:"18px"}}>
          Our org went live with Chargebee a week ago and man, I cannot say enough good things about their system and their support. Well worth the price.
          </p>
          <img style={{width:"140px"}}
            src="https://webstatic.chargebee.com/assets/web/529/images/signup/customers/inspirecio-logo.svg"
            alt=""
          />

            <p style={{fontSize:"14px",marginTop:"60px"}}>CUSTOMER-CENTRIC APPROACH</p>

        </div>
      </div>




      



      


    </Slider>
  );
}
