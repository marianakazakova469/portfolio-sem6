import './Coaster.css';

function Coaster({
  size,
  outerBg = 'var(--coaster-outer, #ffffff)',
  ringBg = 'var(--coaster-ring, #f5f5f5)',
  ringBorder = 'var(--coaster-border, #e0e0e0)',
  innerBg = 'var(--coaster-inner, #dddddd)',
  imageUrl = '',
  position,
  topPosition,
  bottomPosition,
  rightPosition,
  leftPosition,
  text = '',
  textColor = 'var(--coaster-text, #000000)'
}) {
  const style = {
    '--size': `${size}px`,
    '--outer-bg': outerBg,
    '--ring-bg': ringBg,
    '--ring-border': ringBorder,
    '--inner-bg': innerBg,
    '--inner-image': imageUrl ? `url(${imageUrl})` : 'none',
    '--position': `${position}`,
    '--top': `${topPosition}%`,
    '--bottom': `${bottomPosition}%`,
    '--right': `${rightPosition}%`,
    '--left': `${leftPosition}%`,
    '--text-color': textColor
  };

  return (
    <div className="coaster" style={style} aria-hidden="true">
      <div className="coaster-ring">
        <div className="coaster-inner">
            <p className="coaster-text" style={{ fontFamily: 'HalyardDisplay, sans-serif', color: textColor }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Coaster;
