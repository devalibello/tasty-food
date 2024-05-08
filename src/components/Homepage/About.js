import aboutPicture from '../../assets/about.png'
import '../../styles/About.css'

const About = () => (
    <section className="about-section">
        <div className="about-picture-section">
            <img src={aboutPicture} alt="" className="about-picture" />
        </div>
        <div className="about-details-section">
        </div>
    </section>

);

export default About;