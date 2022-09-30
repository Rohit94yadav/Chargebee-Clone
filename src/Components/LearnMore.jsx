import React from 'react'
import styles from "../AllStyles/LearnMore.module.css";

export default function LearnMore() {
    return (
        <div>



            <div>
                <div className={styles.layout}>
                    
                    <div className={styles.intro_content}>
                        <div className={styles.split_intro} reduce_width /><div></div></div>
                    <div className={styles.main_headings_and_button} >
                        <div><h1>Keep Subscription Management Uncomplicated as You Scale</h1></div>
                        <div><p>Get the flexibility to manage
                            subscription problems you have today. And the ones that will creep up a year from now.</p></div>
                        <div>
                            <button className={styles.blue_button}>Schedule a demo<span> 🡢</span></button>
                            <button className={styles.blue_border_button}>Sign up for free<span> 🡢</span></button>
                        </div>
                    </div>
                    <div className={styles.split_intro} reduce_width /><div>🡢</div></div>
                <div className={styles.responsive_tags}>
                    <div><p>Subscription <br />Management</p></div>
                    <div><p>Billing and<br />Invoice</p></div>
                    <div><p>Recurring <br />Payments</p></div>
                    <div><p>Accounting<br />and Taxes</p></div>
                    <div><p>Reporting<br />and Analytics</p></div>
                </div>
            </div>


</div>

)
    
  
}
