import React from 'react';
import styles from "../AllStyles/HomeLast.module.css";

export default function HomeLast() {
  return (
    <div className={styles.main}>




      
      <div className={styles.main1}>
       <h1>Get a Demo Customized to Your Subscription Workflow</h1>
       <div style={{display:"flex"}} >
       <input type="text" placeholder='email@company.com'  /> 
        <button>Get a Demo</button>
       </div>
      </div>






      <div className={styles.main2}>

        <div className={styles.main2upper}>
            <img src="https://webstatic.chargebee.com/assets/web/529/images/footer/robin-lambert.png" alt="" />
            <p>Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.</p>
            <h3>Robin Lambert,</h3>
            <h4>Co-founder & CPO, Livestorm</h4>
       
        </div>

        <div className={styles.main2img}>
            <img src="https://www.amocrm.com/static/images/pages/integrations/logo/calendly.png" alt="" />
            <img src="https://pbs.twimg.com/media/FIhac7NVkAQ84Ua.jpg:large" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmPpwkmsxogH6mcvxn88q3-2XocrdTXltijIKhVq8keP6Uz6uckRaAq6FEfEwMP34bvU&usqp=CAU" alt="" />
            <img src="data:image/png;base64,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" alt="" />
        </div>

     </div>




    </div>
  )
}
