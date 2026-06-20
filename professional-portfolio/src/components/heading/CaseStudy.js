import './CaseStudy.css';

function CaseStudy({ textColor, h1Text = '', pText = '' }) {
  const style = {
    '--text-color': textColor
  };
  return (
    <div className="CaseStudy" style={style}>
        <h1>{h1Text}</h1>
        <p>{pText}</p>
    </div>
  );
}

export default CaseStudy;