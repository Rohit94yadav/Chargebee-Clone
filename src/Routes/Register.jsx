import React from "react";
import { Link } from "react-router-dom";
import styles from "../AllStyles/Register.module.css";
import RegisterCarousel from "../Components/RegisterCarousel";

export default function () {
  return (
    <div className={styles.top}>
      <div className={styles.top1}>
        <div className={styles.top11}>
          <RegisterCarousel />
        </div>

        <div className={styles.top21}>
          <div className={styles.top211}>
            <Link to={"/"}>
              <img
                style={{ width: "100px" }}
                src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
                alt=""
              />
            </Link>
            <Link to={"/Login"}>
              <button style={{ border: "none", backgroundColor: "white" }}>
                Login →
              </button>
            </Link>
          </div>

          <h1 className={styles.topheading}>Create Your Sandbox Account</h1>

          <div className={styles.top212}>
            <label
              style={{ color: "rgb(100, 98, 98)", fontWeight: "520" }}
              htmlFor=""
            >
              work email
            </label>
            <input type="text" placeholder="(eg) john.m@company.com" />
            <label
              style={{ color: "rgb(100, 98, 98)", fontWeight: "520", marginTop:"25px" }}
              htmlFor=""
            >
              phone number
            </label>
            <div className={styles.top221}>
              <button>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX/mTMSiAf/////kAsAfQAAAIgAAIUAAH0AAIL29vro6PIAAIDj4+8AAHMAAHby8veoqMu9vdiGhrlTU6HJyd/T0+WMjLwAAHRFRZudnca4uNWsrM6ystKUlMFMTJ5ubq0qKpEiIo9YWKRmZqnZ2egpKZF9fbU6OpfFxd0yMpSbm8USEow/P5mJibseHo47O5fLhzNOAAAEYElEQVR4nO3bWXfqNhSGYapWg+VBxlPMHGMIhoTT///vumUytNlc9NxYrJXvWYuZC/HGlo1xZjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgN/0J3w3E/AdmnBowqEJhyYcmnCP0MTOm7597p7bfjO3oQcjHqCJ3XTaGKWklEoZo7tN8CyBm9SlNj6GVHEcK39HGl3WYQcVtIkttY9g+hddusSV+qU3PpEugy4rIZssqIgy8UVEYnDiINxA9y6xoWf1IuC4AjbZx/TZi9XJiXFdGfxVLdxpVVCreB9uYMGaRB0tDq2N/P2lv1p93ovsll7rolBDC9UkounU0BpS+QdDQlcNXZJxYalorTI034aKEqoJLSV6XTgh1vQg2tDVji4bn4GeccWaVqwu0NgCNSlpxhiXCZH7TUxJl/b91ubj8wNFKcMMLkyTRSzN+jarij1degrzSjn698d+xl0bGYfZ+gRpYjVtcWj+8KuMyGlyzenDa0pFi8hqXEwuNL/Q1kcH2U8J0mSr1PZCc4nwy4WgufTwLEQqxPOB5l7x/ry7+LeFGF6IJpX+WACis59l6YOnLkojR1m2NMNGp9sWhxYnXQUYX4gmrVJNdPuwTlEcMxfn3D25/CzmhlIoN75WRY1SbYDxBWiSaGlo32w17qQl2UEstSjebGbfCqGX4pD5vZXx5aWROpl+gAGaXGmD4v/8tvT7JnU6CLWrMmqSVTslhtTv6a/Hb4EtbZ6u0w8wQBPagV3c1o5c0vIyT1d1anWSJdqm9Sqd0/Ihb/sobmGkmX6A0zehVUd93Hetmos8rV6Kpuqqa/FSpbmYq9Z9vEGFWHmmb7I2ahfVy+q2bVnq13p4ssckv+bJ0T4N9asevwiKqFrW0U6Z9eQjnL5JoVRBN8mm7PMD3enTwnb22r61V7otUr9vcsh35ebw9eZpTd9kr2R22xDbS5eei8oWR7v1B5LM1h4LWxXn9Nfltv9SZVLtJx/h9E3OSpWfRwFc/pbpJqFNkWeuSaOzv/PP6SQqlTpPPsLpm0ip/3VgxDmbVHmrxiaqzavEOvf1eqSlnHyE0zdRMrbJsNrstlJn6VOWZb+uJ3lzao70OEuzTG77Jh8ONv7aSE0GywmH+YR7xO3O6cdtd/7v/knzg/ZPsB/L4fvOHb/3vfh1+gHi+AmH42wcjsdyOG7PPcjvO8fx953jz/19B78D3oPfi+/AeQV34PwTDucp3XE7ny3B+Wz/gfMe78hxfiyH86jvwfn29+D/Mu5y803fHrsj/n/ncaEJhyYcmnBowqEJN/sLvpv9Ad+hCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpw/wA1JRlXh9jshwAAAABJRU5ErkJggg=="
                  alt=""
                />{" "}
                +91
              </button>
              <input type="text" placeholder="8134567896" />
            </div>

            <button
              style={{
                width: "160px",
                height: "36px",
                backgroundColor: "rgb(111, 111, 126)",
                color: "white",
                fontSize: "medium",
                fontWeight: "550",
                padding: "10px",
                border: "none",
              }}
            >
              Complete Signup →
            </button>

            <p>
              By clicking on Complete Signup, you agree to our Terms and you
              acknowledge having read our Privacy Notice
            </p>
            <p>
              *This includes periodic newsletters, emails about usage tips,
              billing practices, and other communications. You can opt out
              anytime within the app.
            </p>
            <p>Your data hosting is US region</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center",marginTop:"40px" }}>
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/okta.svg"
              alt=""
            />
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/calendly.svg"
              alt=""
            />
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/freshworks.svg"
              alt=""
            />
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/study-com.svg"
              alt=""
            />
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/doodle.svg"
              alt=""
            />
            <img
              style={{ width: "110px" }}
              src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/envoy.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
