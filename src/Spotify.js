import './App.css';
import './CaseStudies.css';
import './utils/constants.css';
import GlobalFonts from './fonts/fonts';
import NavBar from './components/nav-bar/NavBar';
import Heading from './components/heading/Heading';
import star from './assets/star.svg';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Strip from './components/strip/Strip';
import CaseStudy from './components/heading/CaseStudy';
import Coaster from './components/coaster/Coaster';
import Instructions from './components/instructions/Instructions';

function Spotify() { 
    return (
        <>
            <GlobalFonts />
            <div className="App" style={{ '--page-bg': 'var(--pink-almond)' }}>
                <NavBar backgroundColor="var(--deep-puce)" itemColor="var(--almond)" />
                <div id='landing-section' className='Landing-section'>
                    <Heading>
                        <CaseStudy 
                            textColor="var(--dark-scarlet)"
                            h1Text="Spotify"
                            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                        />
                    </Heading>
                    <img src={star} alt="Star" id='star-left'/>
                    <img src={star} alt="Star" id='star-right'/>
                </div>
                <div className="Instructions-section">
                    <Instructions 
                        textColor="var(--dark-scarlet)"
                        numberColor="var(--antique-ruby)"
                        instructions={[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                        ]}
                    />
                    <div className="Image-gallery">
                        <Coaster
                            size={300}
                            outerBg="var(--deep-puce)"
                            ringBg="var(--dark-deep-puce)"
                            ringBorder="var(--almond)"
                            innerBg="var(--deep-puce)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                        <Coaster
                            size={300}
                            outerBg="var(--deep-puce)"
                            ringBg="var(--dark-deep-puce)"
                            ringBorder="var(--almond)"
                            innerBg="var(--deep-puce)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                        <Coaster
                            size={300}
                            outerBg="var(--deep-puce)"
                            ringBg="var(--dark-deep-puce)"
                            ringBorder="var(--almond)"
                            innerBg="var(--deep-puce)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                    </div>
                </div>
                <Strip textColor="var(--almond)" backgroundColor="var(--deep-puce)" />
                <Projects textColor="var(--dark-scarlet)" />
                <Footer backgroundColor="var(--dark-scarlet)" />
            </div>
        </>
    );
}

export default Spotify;