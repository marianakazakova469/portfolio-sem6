import './Instructions.css';

function Instructions({ textColor, numberColor, instructions = '' }) {
  const style = {
    '--text-color': textColor,
    '--number-color': numberColor,
  };

  // Allow `instructions` to be an array of strings or a single
  // multiline string separated by newlines. Split and trim into items.
  const items = Array.isArray(instructions)
    ? instructions.map(String).map(s => s.trim()).filter(Boolean)
    : String(instructions)
        .split(/\r?\n+/)
        .map(s => s.trim())
        .filter(Boolean);

  return (
    <div className="Instructions" style={style}>
      <div className="Heading">
        <h1>Instructions</h1>
        <hr />
      </div>

      {items.length === 0 ? null : (
        <div className="Instructions-list">
          {items.map((item, idx) => (
            <div className="Content" key={idx}>
              <p className="Instruction-number">{idx + 1}.</p>
              <p className="Instruction-text">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Instructions;