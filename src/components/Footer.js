import '../css/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="footer-container">
            <div className="social-media-container">
                <a href="https://github.com/NaviUy">
                    <FontAwesomeIcon className="social-icon" icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/ivan-yu-bb9215149/">
                    <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://www.npmjs.com/~naviuy">
                    <FontAwesomeIcon className="social-icon" icon={faNpm} size="2x" />
                </a>
            </div>
            <p className="footer-note">Made with love.</p>
        </div>
    )
}

export default Footer;
