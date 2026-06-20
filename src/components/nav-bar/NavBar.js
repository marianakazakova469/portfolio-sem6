import './NavBar.css';

function NavBar({ backgroundColor, itemColor }) {
  const navStyle = { backgroundColor };
  const linkStyle = { color: itemColor };

  return (
    <nav className="nav-bar" style={{ ...navStyle, fontFamily: 'HalyardDisplay, sans-serif' }} aria-label="Main navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="/" style={linkStyle}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me" style={linkStyle}>
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer" style={linkStyle}>
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
