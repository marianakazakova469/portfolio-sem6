import './Coaster.css';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import Top from '../../assets/top.svg';
import Bottom from '../../assets/bottom.svg';

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
  textColor = 'var(--coaster-text, #000000)',
  href = null,
  spinOnHover = false
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

  const Tag = href ? 'a' : 'div';
  const tagProps = href ? { href } : {};
  const coasterClassName = `coaster${spinOnHover ? ' coaster--spin' : ''}`;

  return (
    <Tag className={coasterClassName} style={style} aria-hidden="true" {...tagProps}>
      <div className="coaster-flip">
        <div className="coaster-face coaster-front">
          <div className="coaster-ring">
            <div className="coaster-inner">
              <p className="coaster-text" style={{ fontFamily: 'HalyardDisplay, sans-serif', color: textColor }}>{text}</p>
            </div>
          </div>
        </div>

        <div className="coaster-face coaster-back">
          <div className="coaster-ring">
            <div className="coaster-inner" id="coaster-back-inner">
              <img src={Top} alt="Top Arrow" id="top-arrow" />
              <div className="arrows-and-text">
                <img src={Left} alt="Left Arrow" id="left-arrow" />
                <p className="coaster-back-text" style={{ fontFamily: 'HalyardDisplay, sans-serif', color: textColor }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src={Right} alt="Right Arrow" id="right-arrow" />
              </div>
              <img src={Bottom} alt="Bottom Arrow" id="bottom-arrow" />
            </div>
          </div>
        </div>
      </div>
    </Tag>
  );
}

export default Coaster;
