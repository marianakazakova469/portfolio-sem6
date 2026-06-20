import Coaster from '../coaster/Coaster';
import './Projects.css';

function Projects({textColor}) {
  const style = {
    '--color': textColor
  };
  return (
    <div id='projects' className='Projects' style={style}>
      <h2>P<span>roj</span>ects</h2>
      <div className='coasters-container'>
        <Coaster id="dumpert"
          size={340}
          href="/dumpert"
          outerBg="var(--almond)"
          ringBg="var(--dark-almond)"
          ringBorder="var(--dark-scarlet)"
          innerBg="var(--almond)"
          text='dumpert'
          textColor='var(--gold)'
          bottomPosition={0}
        />
        <Coaster id="spotify"
          size={340}
          href="spotify.js"
          outerBg="var(--pink-almond)"
          ringBg="var(--dark-pink-almond)"
          ringBorder="var(--dark-scarlet)"
          innerBg="var(--pink-almond)"
          text='spotify'
          textColor='var(--gold)'
          bottomPosition={0}
        />
        <Coaster id="blind-dating"
          href="blind-dating.js"
          size={340}
          outerBg="var(--deep-puce)"
          ringBg="var(--dark-deep-puce)"
          ringBorder="var(--almond)"
          innerBg="var(--deep-puce)"
          text='blind dating'
          textColor='var(--light-gold)'
          bottomPosition={0}
        />
        <Coaster id="art-detective"
          size={340}
          href="art-detective.js"
          outerBg="var(--antique-ruby)"
          ringBg="var(--dark-antique-ruby)"
          ringBorder="var(--almond)"
          innerBg="var(--antique-ruby)"
          text='art detective'
          textColor='var(--gold)'
          bottomPosition={0}
        />
      </div>
    </div>
  );
}

export default Projects;
