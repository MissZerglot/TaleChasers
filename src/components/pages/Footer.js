import React from 'react'
import {Link} from 'react-router-dom';
import {Button} from '../Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-newsletter'>
                <p className='footer-newsletter-heading'>
                    Sign up for the Talechasers newsletter to receive our best deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="E-mail Adress" className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            About Us
                        </h2>
                        <Link to='/'> Who Are We? </Link>
                        <Link to='/'> Terms of Service </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>
                            Contact Us
                        </h2>
                        <Link to='/'> Contact </Link>
                        <Link to='/'> Support</Link>
                        <Link to='/'> Shipping</Link>
                        <Link to='/'> Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                            Socials
                        </h2>
                        <Link to='/'> Instagram </Link>
                        <Link to='/'>TikTok</Link>
                        <Link to='/'> Twitch </Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'> Youtube </Link>
                    </div>
                </div>
                
            </div>
            <section className="social-media">
                <div className="social-media wrap">
                    <div className="footer-logo">
                      {/*   <Link to='/' className="social-logo">
                            TALECHASERS <i className='fab fa-typo3'/> 
                        </Link> */}
                    </div>
                   
                    
                    <div className="social-icons">
                        
                        <Link className="social-icon-link youtube" to='/' target='_blank' aria-label='Youtube'>
                            <i className="fab fa-youtube">
                            </i>
                        </Link>
                        <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='Twitter'>
                            <i className="fab fa-twitter">
                            </i>
                        </Link>
                        <Link className="social-icon-link facebook" to='/' target='_blank' aria-label='Facebook'>
                            <i className="fab fa-facebook-f">
                            </i>
                        </Link>
                        
                    </div>
                    
                </div>
                
            </section>
            {/* Keep the current year up to date, because I'm too lazy to change it every year */ }
            <small class='website-rights'>TaleChasers©{new Date().getFullYear()}</small>
            
        </div>
    );
}

export default Footer;
