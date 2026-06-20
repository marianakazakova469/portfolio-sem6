import './App.css';
import './utils/constants.css';
import GlobalFonts from './fonts/fonts';
import NavBar from './components/nav-bar/NavBar';
import Heading from './components/heading/Heading';
import star from './assets/star.svg';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Strip from './components/strip/Strip';
import CaseStudy from './components/heading/CaseStudy';
import Instructions from './components/instructions/Instructions';

function Dumpert() { 
    return (
        <>
            <GlobalFonts />
            <div className="App" style={{ '--page-bg': 'var(--almond)' }}>
                <NavBar backgroundColor="var(--pink-almond)" itemColor="var(--dark-scarlet)" />
                <div id='landing-section' className='Landing-section'>
                    <Heading>
                        <CaseStudy 
                            textColor="var(--dark-scarlet)"
                            h1Text="Dumpert"
                            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                        />
                    </Heading>
                    <img src={star} alt="Star" id='star-left'/>
                    <img src={star} alt="Star" id='star-right'/>
                </div>
                <Instructions 
                    textColor="var(--dark-scarlet)"
                    numberColor="var(--antique-ruby)"
                    instructions={[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. ",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. "
                    ]}
                />
                <Strip textColor="var(--dark-scarlet)" backgroundColor="var(--pink-almond)" />
                <Projects textColor="var(--dark-scarlet)" />
                <Footer backgroundColor="var(--dark-scarlet)" />
            </div>
        </>
    );
}

export default Dumpert;