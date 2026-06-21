import './App.css';
import './utils/constants.css';
import GlobalFonts from './fonts/fonts';
import NavBar from './components/nav-bar/NavBar';
import Heading from './components/heading/Heading';
import Footer from './components/footer/Footer';
import Coaster from './components/coaster/Coaster';
import Projects from './components/projects/Projects';
import marianaImageOne from './assets/mariana-image-one.png';
import marianaImageTwo from './assets/mariana-image-two.png';
import star from './assets/star.svg';
import Menu from './components/heading/Menu';

function HomePage() {
  return (
    <>
      <GlobalFonts />
      <div className="App" style={{ '--page-bg': 'var(--dark-scarlet)' }}>
        <NavBar backgroundColor="var(--almond)" itemColor="var(--gold)" />
        <main className="App-main">
          <div id='landing-section' className='Landing-section'>
            <Heading>
              <Menu h1FontSize={22} pFontSize={5.5} hrWidth={570}/>
            </Heading>
            <img src={star} alt="Star" id='star-left'/>
            <img src={star} alt="Star" id='star-right'/>
          </div>
          <div id='about-me' className='About-me'>
            <h2>Ab<span>ou</span>t M<span>e</span></h2>
            <Coaster id="mariana-image-one"
              size={300}
              outerBg="var(--pink-almond)"
              ringBg="var(--dark-pink-almond)"
              ringBorder="var(--dark-scarlet)"
              innerBg="var(--gold)"
              imageUrl={marianaImageOne}
              position= {'absolute'}
              topPosition={37}
              leftPosition={0}
            />
            <p>In my first 3 semester I studied Media Design where I learned about design patterns, usability heuristic and applied my knowledge to real-life group projects for clients partnering with university. 
In my fourth semester during my Smart Mobile specialization, I found my passion for Mobile Development. 
In my fifth semester I did an internship at Livewall as a iOS Mobile Developer, where I worked on Dumpert - an Dutch media platform, where users can watch and share funny videos or images.</p>
            <Coaster id="mariana-image-two"
              size={340}
              outerBg="var(--almond)"
              ringBg="var(--dark-almond)"
              ringBorder="var(--gold)"
              innerBg="var(--gold)"
              imageUrl={marianaImageTwo}
              position= {'absolute'}
              topPosition={6}
              rightPosition={0}
            />
            <h3>Mar<span>ian</span>a K<span>aza</span>kova</h3>
          </div>
          <Projects textColor="var(--almond)" />
        </main>
        <Footer backgroundColor="var(--dark-scarlet)" />
      </div>
    </>
  );
}

export default HomePage; 