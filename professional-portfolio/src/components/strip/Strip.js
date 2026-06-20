import './Strip.css';

function StarIcon(props) {
  return (
    <svg
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5 0C16.5 0 17.4104 8.4974 20.9565 12.0435C24.5026 15.5896 33 16.5 33 16.5C33 16.5 24.5026 17.4104 20.9565 20.9565C17.4104 24.5026 16.5 33 16.5 33C16.5 33 15.5896 24.5026 12.0435 20.9565C8.4974 17.4104 0 16.5 0 16.5C0 16.5 8.4974 15.5896 12.0435 12.0435C15.5896 8.4974 16.5 0 16.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Strip({ textColor, backgroundColor }) {
  const style = {
    '--color': textColor,
    '--background-color': backgroundColor
  };

  return (
    <div className="strip" style={style}>
      <div className="strip-track">
        <span>WANT TO SEE MORE?</span>
        <StarIcon className='strip-star' aria-label='Star' />
        <span>WANT TO SEE MORE?</span>
        <StarIcon className='strip-star' aria-label='Star' />
        <span>WANT TO SEE MORE?</span>
        <StarIcon className='strip-star' aria-label='Star' />
        <span>WANT TO SEE MORE?</span>
        <StarIcon className='strip-star' aria-label='Star' />
        <span>WANT TO SEE MORE?</span>
        <StarIcon className='strip-star' aria-label='Star' />
        <span>WANT TO SEE MORE?</span>
      </div>
    </div>
  );
}

export default Strip;