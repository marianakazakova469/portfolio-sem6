import './Heading.css';

function Heading({ noBorder = false, children }) {
  return (
    <div className={`Heading${noBorder ? ' no-border' : ''}`} >
      {children}
    </div>
  );
}

export default Heading;