import HotSpotSign from '../../assets/hotspot.svg';
import './Footer.css';
import Heading from '../heading/Heading.js';
import Connect from './Connect.js';
import Menu from '../heading/Menu.js';

function Footer({ backgroundColor }) {
  return (
    <div className="background" style={{ backgroundColor: backgroundColor }}>
    <footer id='footer' className="Footer">
      <Heading noBorder>
      <Menu h1FontSize={5} pFontSize={1.25} hrWidth={120} />
      </Heading>
      <img src={HotSpotSign} alt="Hot Spot Sign" className="hotspot-sign" />
      <div className="contact-info">
        <Connect wayToConnect="LinkedIn" personalInfo="Mariana Kazakova" hrWidth={395} />
        <Connect wayToConnect="Phone" personalInfo="+359893348639" hrWidth={395} />
        <Connect wayToConnect="Email" personalInfo="marianakazakova49@gmail.com" hrWidth={824} />
      </div>
    </footer>
    </div>
  );
}

export default Footer;