import './Menu.css';

function Menu({ h1FontSize, pFontSize, hrWidth}) {
  const style = {
    '--h1-font-size': `${h1FontSize}rem`,
    '--p-font-size': `${pFontSize}rem`,
    '--hr-width': `${hrWidth}px`
  };
  return (
    <div className="Menu" style={style}>
        <h1>Menu</h1>
        <p>Portfolio</p>
        <hr></hr>
    </div>
  );
}

export default Menu;