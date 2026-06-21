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

function ArtDetective() { 
    return (
        <>
            <GlobalFonts />
            <div className="App" style={{ '--page-bg': 'var(--antique-ruby)' }}>
                <NavBar backgroundColor="var(--almond)" itemColor="var(--dark-scarlet)" />
                <div id='landing-section' className='Landing-section'>
                    <Heading>
                        <CaseStudy 
                            textColor="var(--almond)"
                            h1Text="Art Detective"
                            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                        />
                    </Heading>
                    <img src={star} alt="Star" id='star-left'/>
                    <img src={star} alt="Star" id='star-right'/>
                </div>
                <div className="Instructions-section">
                    <Instructions 
                        textColor="var(--almond)"
                        numberColor="var(--pink-almond)"
                        instructions={[
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                        ]}
                    />
                    <div className="Image-gallery">
                        <Coaster
                            size={300}
                            outerBg="var(--almond)"
                            ringBg="var(--dark-almond)"
                            ringBorder="var(--dark-scarlet)"
                            innerBg="var(--almond)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                        <Coaster
                            size={300}
                            outerBg="var(--almond)"
                            ringBg="var(--dark-almond)"
                            ringBorder="var(--dark-scarlet)"
                            innerBg="var(--almond)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                        <Coaster
                            size={300}
                            outerBg="var(--almond)"
                            ringBg="var(--dark-almond)"
                            ringBorder="var(--dark-scarlet)"
                            innerBg="var(--almond)"
                            position= {'absolute'}
                            topPosition={37}
                            leftPosition={0}
                        />
                    </div>
                </div>
                <Strip textColor="var(--dark-scarlet)" backgroundColor="var(--almond)" />
                <Projects textColor="var(--almond)" />
                <Footer backgroundColor="var(--dark-scarlet)" />
            </div>
        </>
    );
}

export default ArtDetective;