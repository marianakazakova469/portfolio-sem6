import './Heading.css';

function Heading({ h1FontSize, pFontSize, hrWidth, noBorder = false }) {
  const style = {
    '--h1-font-size': `${h1FontSize}rem`,
    '--p-font-size': `${pFontSize}rem`,
    '--hr-width': `${hrWidth}px`
  };
  return (
    <div className={`Heading${noBorder ? ' no-border' : ''}`} style={style}>
        <h1>Menu</h1>
        <p>Portfolio</p>
        <hr></hr>
    </div>
  );
}

export default Heading;