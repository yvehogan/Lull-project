import React from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Homepage.css';

import picture1 from '../Images/Image1.jpg';
import picture2 from '../Images/Image2.png';
import schedule from '../Images/schedule-meeting.png';
import progress from '../Images/progress.png';
import articles from '../Images/write-articles.png';
import tips from '../Images/daily-tips.png';
import community  from '../Images/community.png';



const Homepage = () => {
    return (
        <>
            <Navbar />
            
            <div id="Homepage">

                <div className="hero-section">
                    <div className="hero-text">
                    <h1>Your Mental Health Is Our Priority</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate provident! Vero nam quae modi suscipit rerum itaque molestias nesciunt eius omnis nulla et, soluta natus doloremque saepe deleniti optio.</p>
                    <button className="get-started"> Get Started </button>
                    </div>
                       
                    <div>
                    <img className="picture1" src={picture1} alt="A meditating lady" />
                    </div>

                    <section id="product">
                            <div className="container">

                                    <div className="make-appointments">
                                    <div className="appoinment-img">
                                    <img className="appointments" src={schedule} alt="Book consultation"/>
                                    <p>Book Consultation With An Expert</p>
                                    </div>

                                    <div className="appoinment-img">
                                    <img className="appointments" src={progress} alt="Track your progress"/>
                                <p>Manage And Track Your Progress</p>
                                    </div>
                                </div>
                          
                                <div className="make-appointments">
                                <div className="appoinment-img">
                                {/* <img className="appointments" src={schedule} alt="Book consultation"/> */}
                                <img className="appointments" src={articles} alt="Read and write articles"/>
                                <p>Read And Write Insightful Articles</p>
                                </div>

                                <div className="appoinment-img">
                                <img className="appointments" src={tips} alt="Get daily tips"/>
                                <p>Get Daily Tips That Will Keep You Motivated</p>
                                </div>
                                </div>

                            <div className="make-appointments">
                            <div className="appoinment-img">
                            <img className="appointments" src={community} alt="Be a part of our community"/>
                            <p>Become Part Of Our Community</p>
                            </div>
                            </div>

                            </div>
                      
                
                       

                            <div className="product-section">
                            <div className="product-details">
                            <h1>Your Mental Health Is Our Priority</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptate provident! Vero nam quae modi suscipit rerum itaque molestias nesciunt eius omnis nulla et, soluta natus doloremque saepe deleniti optio.</p>
                           <button className="get-started2"> Get Started </button>
                            </div>
                      
                        </div>
                    </section>
                   

                </div>
                    <div className="how-it-works-header">
                        <h2> How it works </h2></div>
                
                <div id="how-it-works">
                            
                        <div className="how-it-works-img">
                        <img src={picture2} alt="A meditating lady"/>
                        <p>Take An Assessment</p>
                        </div>

        <div className="how-it-works-img">
        <img src={picture2} alt="A meditating lady"/>
        <p>Find Your Therapist</p>
        </div>

        <div className="how-it-works-img">
        <img src={picture2} alt="A meditating lady"/>
        <p>Pick Level Of Support</p>
        </div>

        <div className="how-it-works-img">
        <img src={picture2} alt="A meditating lady"/>
        <p>Start Therapy</p>
        </div>
        </div>

        <div className="analysis-section">
            <div className="inner">
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, maiores!</p> */}
            </div>

        </div>

        <div id="blog">
            <h2> Blog </h2>

            <div className="blog-section">

                <div className="blog-section-img">
                    <h3>How To Handle Stress Better</h3>
                <img src={picture1} alt="A meditating lady"/>
                <div className="blog-author">
                <p>Author: Kida Maji</p>
                <p>Date Published: 11-02-2021</p>
                </div>
                
                </div>

                <div className="blog-section-img">
                    <h3>How To Handle Stress Better</h3>
                <img src={picture1} alt="A meditating lady"/>
                <div className="blog-author">
                <p>Author: Kida Maji</p>
                <p>Date Published: 11-02-2021</p>
                </div>
                
                </div>
            </div>
        </div>


        
        <div id="contact">
            <div className="contact-image"> 
            <form action="" className="contact-form">
                <label htmlFor="subject">Subject</label>
                <input type="text" value="" />

                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" />
                
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="get-started2"> Send </button>
            </form>  
            <div className="overlay">
            </div>
            </div>
          
            </div>
           
                <footer className="homepage-footer">
                    <div className="footer-logo">
                        <h3>LOGO</h3>
                    </div>

                    <div className="resources">
                        <h4>RESOURCES</h4>
                        <h5>Blog</h5>
                        <h5>FAQ</h5>
                    </div>

                    <div className="company">
                        <h4>COMPANY</h4>
                        <h5>About Us</h5>
                        <h5>Our Team</h5>
                        <h5>legal</h5>
                    </div>

                    <div className="follow-us">
                        <h4>FOLLOW US</h4>
                        <h5>LinkedIn</h5>
                        <h5>Facebook</h5>
                        <h5>Twitter</h5>
                        <h5>Instagram</h5>
                    </div>

                </footer>

            </div>
            
        </>
    )
}

export default Homepage;
