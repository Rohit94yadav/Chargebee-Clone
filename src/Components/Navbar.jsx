import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <div className={styles.dropdown}>
                    <div>
                        <Link to="/">
                            <img style={{marginLeft:"20px"}}
                                className={styles.navlogo}
                                src="https://financialit.net/sites/default/files/chargebee_1.png"
                                alt="navlogo"
                            />
                        </Link>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Product</button>
                    <div className={styles.dropdowncontent}>
                        <div className={styles.dropdowncontent0}>
                        <div className={styles.dropdowncontent1}>
                            <div>
                                <h3>Subscription Management</h3>
                                <a>Overview</a>
                                <a>Create & Manage Plans</a>
                                <a>Entitlements</a>
                                <a>Pricing Management </a>
                                <a>Retention</a>
                                <a>Handle Trial Subscriptions</a>
                                <a>Customer Self-service Portal</a>
                                <a>Mobile Solutions</a>
                            </div>

                            <div>
                                <h3>Billing Automation</h3>
                                <a>Overview</a>
                                <a>Usage Based Billing</a>
                                <a>Invoicing Automation</a>
                                <a>Quotes</a>
                                <a>Proration</a>
                            </div>

                            <div>
                                <h3>Recurring Payments</h3>
                                <a>Overview</a>
                                <a>Multiple Payment Methods</a>
                                <a>Multiple Payment Gateways</a>
                                <a>Smart Dunning</a>
                                <a>Chargeback Management</a>
                                <a>Checkout Experience</a>
                                <a>Customer Self-service Portal</a>
                                <a>Receivables</a>
                            </div>

                            <div>
                                <h3>Accounting & Taxes</h3>
                                <a>Overview</a>
                                <a>Revenue Recognition</a>
                                <a>Manage Sales Tax</a>
                                <a>One-Click Reconciliation</a>
                                <a>Chargeback Management</a>
                            </div>

                            <div>
                                <h3>Reporting & Analytics</h3>
                                <a>Overview</a>
                                <a>Deferred Revenue Reporting</a>
                            </div>
                        </div>

                        <div className={styles.dropdowncontent2}>
                            <div>
                                <p>
                                    Supports: <br />
                                    Preferred Partners <br />
                                    Stripe, Paypal, Braintree, Checkout.com, GoCardless, and 27
                                    other payment gateways. <br />
                                    Seamless integration with Xero, QuickBooks, Zendesk,
                                    Salesforce + 18 more. <br />
                                </p>
                                <button>expolore all features {">"} </button>
                            </div>
                        </div>
                        </div>
                    </div>


                    

                </div>



                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Pricing</button>
                </div>
                   


                    
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Product</button>
                    <div className={styles.dropdowncontent}>
                        <div className={styles.dropdowncontent0}>
                        <div className={styles.dropdowncontent1}>
                            <div>
                                <h3>By Role</h3>
                                <a>Finance</a>
                                <a>Sales</a>
                                <a>RevOps</a>
                               
                            </div>

                            <div>
                                <h3>By Industry</h3>
                                <a>B2B SaaS</a>
                                <a>eCommerce</a>
                                <a>E-learning</a>
                                <a>Publishing</a>
                                <a>Video & OTT</a>
                            </div>

                            <div>
                                <h3>By Strategy</h3>
                                <a>Roll Out New Pricing</a>
                                <a>Expand Globally</a>
                                <a>Move Upmarket</a>
                                <a>Shift to Subscriptions</a>
                                
                            </div>

                            <div>
                                <h3>By Business Size</h3>
                                <a>Startup</a>
                                <a>ScaleUp</a>
                                <a>Enterprise</a>
                               
                            </div>

                            <div>
                                <h3>By Business Model</h3>
                                <a>Self-serve</a>
                                <a>Sales-driven</a>
                            </div>

                            <div>
                                <h3>By Geography</h3>
                                <a>Europe</a>
                                <a>Australia</a>
                                <a>India</a>
                            </div>
                        </div>

                       
                        </div>
                    </div>


                    

                </div>


                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Customers</button>
                </div>


                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Resources</button>
                    <div className={styles.dropdowncontent}>
                        <div className={styles.dropdowncontent0}>
                        <div className={styles.dropdowncontent1}>
                            <div>
                                <h3>Subscription Management</h3>
                                <a>Overview</a>
                                <a>Create & Manage Plans</a>
                                <a>Entitlements</a>
                                <a>Pricing Management </a>
                                <a>Retention</a>
                                <a>Handle Trial Subscriptions</a>
                                <a>Customer Self-service Portal</a>
                                <a>Mobile Solutions</a>
                            </div>

                            <div>
                                <h3>Billing Automation</h3>
                                <a>Overview</a>
                                <a>Usage Based Billing</a>
                                <a>Invoicing Automation</a>
                                <a>Quotes</a>
                                <a>Proration</a>
                            </div>

                            <div>
                                <h3>Recurring Payments</h3>
                                <a>Overview</a>
                                <a>Multiple Payment Methods</a>
                                <a>Multiple Payment Gateways</a>
                                <a>Smart Dunning</a>
                                <a>Chargeback Management</a>
                                <a>Checkout Experience</a>
                                <a>Customer Self-service Portal</a>
                                <a>Receivables</a>
                            </div>

                            <div>
                                <h3>Accounting & Taxes</h3>
                                <a>Overview</a>
                                <a>Revenue Recognition</a>
                                <a>Manage Sales Tax</a>
                                <a>One-Click Reconciliation</a>
                                <a>Chargeback Management</a>
                            </div>

                            <div>
                                <h3>Reporting & Analytics</h3>
                                <a>Overview</a>
                                <a>Deferred Revenue Reporting</a>
                            </div>
                        </div>

                        <div className={styles.dropdowncontent2}>
                            <div>
                                <p>
                                    Supports: <br />
                                    Preferred Partners <br />
                                    Stripe, Paypal, Braintree, Checkout.com, GoCardless, and 27
                                    other payment gateways. <br />
                                    Seamless integration with Xero, QuickBooks, Zendesk,
                                    Salesforce + 18 more. <br />
                                </p>
                                <button>expolore all features {">"} </button>
                            </div>
                        </div>
                        </div>
                    </div>


                    

                </div>


                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Partners</button>
                </div>




                
                <div className={styles.dropdown}>
                    
                    <button style={{display : "flex", justifyContent :"center", alignItems: "center", gap:"5px",marginLeft:"100px"}} className={styles.dropbtn}> <img style={{width:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBxsO2oPph0sPfQgsa7S6ZWcwL43E6N0H_tP0Jyk&s" alt="" /> English</button>
                    <div style={{width:"100px",marginLeft:"300px",height:"50px",backgroundColor:"white",borderRadius:"13px"}}  className={styles.dropdowncontent}>
                        <div className={styles.dropdowncontent0}>
                        <div  className={styles.dropdowncontent1}>
                            <div>
                                <a >Dutch</a>
                                <a>English</a>
                            </div>

                           
                        </div>

                        </div>
                    </div>


                    

                </div>



                <div>
                    <Link to={"/Login"}>
                    <button style={{display : "flex", justifyContent :"center", alignItems: "center", gap:"5px",border:"none",backgroundColor:"white",fontSize:"16px",fontWeight:"bold",width:"100px"}} className={styles.dropbtn}> <img style={{width:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1f3BsAbEkXuojvWiXQQ17_AriZXEGirgjGsxmRdLGA&s" alt="" /> Login {">"}</button>
                    </Link>
                    <div style={{width:"100px",marginLeft:"250px",height:"50px",backgroundColor:"white",borderRadius:"13px"}}  className={styles.dropdowncontent}>
                        
                    </div>

                    

                </div>

                <div >
                    <Link to={"/GetADemo"}>

                    <button style={{display : "flex",width:"120px", justifyContent :"center", alignItems: "center", gap:"5px",border:"none",fontWeight:"bold",backgroundColor:"darkorange",color:"white",fontSize:"15px",padding:"9px",marginLeft:"20px",marginRight:"20px", borderRadius:"3px"}} className={styles.dropbtn}> Get a Demo {">"}</button>
                    </Link>
                    <div style={{width:"100px",marginLeft:"300px",height:"50px",backgroundColor:"white",borderRadius:"13px"}}  className={styles.dropdowncontent}>
                        
                    </div>


                    

                </div>





            </div>
        </div>
    );
}
