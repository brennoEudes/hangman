const Popup = ({ status, word, reset }) => {
  if (!status) {
    return null;
  } else {
    return (
      <div className="popup-wrapper">
        <div className="popup">
          <p>{status}!</p>
          <p>The word was: {word}.</p>

          <button id="reset-button" onClick={reset}>
            Play Again
          </button>
        </div>
      </div>
    );
  }
};

export default Popup;
