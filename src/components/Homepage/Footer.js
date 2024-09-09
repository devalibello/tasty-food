import '../../styles/Footer.css'
import footerLogo from '../../assets/footer-japanese-food.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faFacebookF,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'
import footerImage1 from '../../assets/footer-image-1.webp'
import footerImage2 from '../../assets/footer-image-2.webp'
import footerImage3 from '../../assets/footer-image-3.webp'
import footerImage4 from '../../assets/footer-image-4.webp'


const footerPageItems = ["Home", "About", "Menu", "Price", "Blog", "Contact", "Delivery"]
const footerUtilityPageItems = ["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Change Log", "View More"]


const Footer = () => {
  return (
    <section className="footer">
        <footer>
            <div className="footer-wrapper">
                <div className='footer-section'>
                    <div className="footer-section-1">
                        <div className="footer-product">
                            <img src={footerLogo} alt="" className="footer-product-image" />
                            <div className="footer-company-name">Arewa Specials</div>
                        </div>
                        <div className="footer-campany-description">
                        In this new era of innovation, we look to the future of our restaurant with pride and confidence, committed to serving you with excellence                </div>
                        <span className="social-list">
                                <li className="social-footer"><FontAwesomeIcon icon={faXTwitter} className='social-icons-footer'/></li>
                                <li className="social-footer"><FontAwesomeIcon icon={faFacebookF} className='social-icons-footer'/></li>
                                <li className="social-footer"><FontAwesomeIcon icon={faInstagram} className='social-icons-footer'/></li>
                                <li className="social-footer"><FontAwesomeIcon icon={faGithub} className='social-icons-footer'/></li>
                        </span> 
                    </div>
                    <div className="footer-section-2">
                        <div className="footer-section-page">
                            <div className="page-text">Pages</div>
                            <ul className="footer-page">
                            {footerPageItems.map((item) => 
                            <li className='page-items'>{item}</li>
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section-3">
                        <div className="footer-section-page">
                            <div className="page-text">Utility Pages</div>
                            <ul className="footer-page">
                            {footerUtilityPageItems.map((item) => 
                            <li className='page-items'>{item}</li>
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section-4">
                        <div className="page-text">Follow us on Instagram</div>
                        <div className="footer-image-section">
                            <div className="footer-images">
                                <img src={footerImage1} alt="" />
                                <img src={footerImage2} alt="" />
                            </div>
                            <div className="footer-images">
                                <img src={footerImage3} alt="" />
                                <img src={footerImage4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="footer-buttom-text">Copyright © 2023 Hashtag Developer. All Rights Reserved</h4>
            </div>
        </footer>
    </section>
  )
}

export default Footer
