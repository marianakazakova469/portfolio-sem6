import { createGlobalStyle } from 'styled-components';
import GangitemOtf from './Gangitem.otf';
import GangitemTtf from './Gangitem.ttf';
import HalyardDisplayOtf from './HalyardDisplay.otf';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Gangitem';
    src: local('Gangitem'), local('Gangitem'),
         url(${GangitemOtf}) format('opentype'),
         url(${GangitemTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'HalyardDisplay';
    src: local('HalyardDisplay'), local('HalyardDisplay'),
         url(${HalyardDisplayOtf}) format('opentype')
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalFonts;
