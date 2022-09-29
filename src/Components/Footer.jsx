import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>


        <div className={styles.footer1}>
            <div>
                <h3>Product {">"}</h3>
                <p>Subscription Management</p>
                <p>Recurring Billing and Invoicing</p>
                <p>Recurring Payments</p>
                <p>Accounting and Taxes</p>
                <p>SaaS Reporting</p>
                <p>Enterprise Billing</p>
                <p>Integrations</p>
               

            </div>
           
        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Help & Support {">"}</h3>
                <p>FAQs</p>
                <p>Securuty</p>
                <p>Status</p>
                <p>Product Documentation</p>
                <p>API Documentation</p>
                <p>Supported Payment Gateways</p>
                <p>Sitemap</p>
            </div>

           
        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Resources {">"}</h3>
                <p>Blog</p>
                <p>Compare Payment Gateways</p>
                <p>Tracking Payment Features</p>
                <p>Enterprise Billing Guide</p>
                <p>Webinars</p>
                <p>Events</p>
                <p>Glossaries</p>
                <p>Subscription Academy</p>

            </div>
           
        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Company</h3>
                <p>Customers</p>
                <p>Partners</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Brand Guidelines</p>
                <p>Terms od Services</p>
                <p>Privacy Policy</p>
            </div>
            

            <div className={styles.avatar2}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9AGXLVQ5YcZYJC5D4dyk0mYNTKGWh0R38VL5_ViQ&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQXBxYVFwdLbjcd_tCUvuC6_87riwWChApTQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RIdKMdikY5fo19Ca1eKwmBNTqMlNlzcsFCARao3ncw&s" alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/38/38669.png" alt="" />
            </div>
        </div>


      </div>
    </div>
  )
}
