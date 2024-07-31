import '../../styles/Footer.css'
import footerLogo from '../../assets/footer-japanese-food.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faFacebookF,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'
import footerImage1 from '../../assets/footer-image-1.png'
import footerImage2 from '../../assets/footer-image-2.png'
import footerImage3 from '../../assets/footer-image-3.png'
import footerImage4 from '../../assets/footer-image-4.png'


const footerPageItems = ["Home", "About", "Menu", "Price", "Blog", "Contact", "Delivery"]
const footerUtilityPageItems = ["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Change Log", "View More"]


const Footer = () => {
  return (
    <>
    <section className='footer-section'>
        <div className="footer-section-1">
            <div className="footer-product">
                <img src={footerLogo} alt="" className="footer-product-image" />
                <div className="footer-company-name">Arewa Specials</div>
            </div>
            <div className="footer-campany-description">
            In the new era of technology we look a in the future with certainty and pride to for our company and.
            </div>
            <span className="social-list">
                    <li className="social-footer"><FontAwesomeIcon icon={faXTwitter} className='social-icons-footer'/></li>
                    <li className="social-footer"><FontAwesomeIcon icon={faFacebookF} className='social-icons-footer'/></li>
                    <li className="social-footer"><FontAwesomeIcon icon={faInstagram} className='social-icons-footer'/></li>
                    <li className="social-footer"><FontAwesomeIcon icon={faGithub} className='social-icons-footer'/></li>
            </span> 
        </div>
        {/* <div className="footer-pages-section"> */}
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
        {/* </div> */}
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
    </section>
    <footer className="footer-buttom-text">Copyright © 2023 Hashtag Developer. All Rights Reserved</footer>
    </>
  )
}

export default Footer
