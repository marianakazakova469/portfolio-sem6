import './Connect.css';
import Link from '../../assets/link.svg';

function Connect({ wayToConnect, personalInfo, hrWidth }) {
  return (
    <div className="Connect" style={{ fontFamily: 'HalyardDisplay, sans-serif' }}>
      <div className='Top'>
        <h2>{wayToConnect}</h2>
        <p>{personalInfo}</p>
        <img src={Link} alt="Link Icon" className="link-icon" />
      </div>
      
      <hr style={{ width: `${hrWidth}px` }}></hr>
      
    </div>
  );
}

export default Connect;