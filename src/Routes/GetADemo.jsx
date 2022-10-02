import React, { useState } from "react";
import styles from "../AllStyles/GetADemo.module.css";
import {
  Button,
  ChakraProvider,
  Input,
  InputGroup,
  InputLeftAddon,
  Center,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function GetADemo() {
  const [text, setText] = useState("Shedule a Demo");

  const handleText = () => {
    setText("Requset Sent");
  };

  return (
    <ChakraProvider>
      <div className={styles.top}>
        <div className={styles.top1}>
          <h1>Elevate Your Subscription Experience with Chargebee</h1>
          <p>
            Get a demo that's customized around your unique subscription
            workflows and pain-points.
          </p>
        </div>

        <div className={styles.top2}>
          <div className={styles.top21}>
            <Link to={"/"}>

            <img style={{width:"130px",marginBottom:"20px"}}
              src="https://www.chargebee.com/static/resources/brand/chargebee-logo-white.svg"
              alt=""
              />
              </Link>
          </div>

          <div className={styles.top22}>
            <Input
              type="text"
              variant="flushed"
              placeholder="First Name"
              size="md"
              width="300px"
            />
            <Input
              variant="flushed"
              placeholder="Business Email"
              size="md"
              width="300px"
            />
            <InputGroup>
              <InputLeftAddon children="India (भारत)  +91" />
              <Input
                variant="flushed"
                type="tel"
                placeholder="phone number"
                size="md"
                width="154px"
              />
            </InputGroup>
            <Input
              variant="flushed"
              placeholder="Your Website"
              size="md"
              width="300px"
            />

            <Text>Is your company headquartered in India?</Text>
      <div>

            <input type="radio" name="fav_language" value="Yes" />{"  "}
            <label for="html">Yes</label>
            <br />
            <br />
            <input type="radio" name="fav_language" value="No" />{"  "}
            <label for="css">No</label>
      </div>
            <br />

            <Text>What problem can Chargebee solve for you?</Text>
            <Input width="300px" size="lg" />
            <Button onClick={handleText} colorScheme="facebook" width="200px">
              {" "}
              {text} <ArrowForwardIcon />
            </Button>
            <Text width="80%">
              By clicking on Schedule a Demo, you acknowledge having read our
              Privacy Notice
            </Text>
          </div>
        </div>
      </div>

      <div style={{display:"flex", justifyContent:"center"}}>
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/okta.svg" alt="" />
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/calendly.svg" alt="" />
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/freshworks.svg" alt="" />
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/study-com.svg" alt="" />
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/doodle.svg" alt="" />
        <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/logos/envoy.svg" alt="" />
      
      </div>

        <div className={styles.secondlast}>
            <div className={styles.secondlast1}>
                <p>Chargebee is a fantastic solution that really meets the needs of any online business from Saas to e-commerce. I have had experience with many platforms both as a leader and as a consultant, and Chargebee is the platform I have liked the most.</p>
                <h1>Dailius Wilson
                    <br />
                    VP Sales & Growth, GetAccept
                </h1>
            </div>

            <div className={styles.secondlast2}>
                <img src="https://webstatic.chargebee.com/assets/web/529/images/schedule-a-demo/dailius-wilson.png" alt="" />
            </div>

        </div>

        <div className={styles.last}></div>


        <div style={{display:"flex",marginLeft:"10%", justifyContent:"flex-start"}}>
            <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/g2-badge-collection/chargebee-top-100-fastest-growing-products-g2.svg" alt="" />
            <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/g2-badge-collection/chargebee-best-results-subscription-management-g2-spring.svg" alt="" />
            <img style={{width:"110px"}} src="https://webstatic.chargebee.com/assets/web/529/images/g2-badge-collection/chargebee-leader-subscription-management-g2-spring.svg" alt="" />
        </div>

    </ChakraProvider>
  );
}
