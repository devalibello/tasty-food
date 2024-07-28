import '../../styles/Footer.css'
import footerLogo from '../../assets/footer-japanese-food.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faFacebookF,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
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
      <div className="footer-section-2"></div>
      <div className="footer-section-3"></div>
      <div className="footer-section-4"></div>
    </section>
  )
}

export default Footer
