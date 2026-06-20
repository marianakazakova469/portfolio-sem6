import HotSpotSign from '../../assets/hotspot.svg';
import './Footer.css';
import Heading from '../heading/Heading.js';
import Connect from './Connect.js';

function Footer({ backgroundColor, itemColor }) {
  return (
    <footer id='footer' className="Footer">
      <Heading h1FontSize={5} pFontSize={1.25} hrWidth={120} noBorder />
      <img src={HotSpotSign} alt="Hot Spot Sign" className="hotspot-sign" />
      <div className="contact-info">
        <Connect wayToConnect="LinkedIn" personalInfo="Mariana Kazakova" hrWidth={395} />
        <Connect wayToConnect="Phone" personalInfo="+359893348639" hrWidth={395} />
        <Connect wayToConnect="Email" personalInfo="marianakazakova49@gmail.com" hrWidth={824} />
      </div>
    </footer>
  );
}

export default Footer;