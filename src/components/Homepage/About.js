import aboutPicture from '../../assets/about.png'
import '../../styles/About.css'

const About = () => (
    <section className="about-section">
        <div className="about-picture-section">
            {/* <div className="about-picture"></div> */}
            <img src={aboutPicture} alt="" className="about-picture" />
            <ul className="about-content">
                <li className="about-content-title">Come and visit us</li>
                <li className="about-content-phone">234</li>
                <li className="about-content-mail">alibelloimoukhuede@gmail</li>
                <li className="about-content-location">Yankaba</li>
            </ul>
        </div>
        <div className="placeholder"></div>
        <ul className="about-details-section">
            <li className="about-title">We provide healthy <br />food for your family</li>
            <li className="about-description-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos veniam aliquid autem sequi voluptatibus expedita impedit omnis quisquam doloribus.</li>
            <li className="about-description-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, corrupti aliquid harum expedita unde autem.</li>
            <li className="more-about-us">More About Us</li>
        </ul>
    </section>

);

export default About;