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
          {/* <a href="https://wa.me/?text=I%20liked%20Hangman%20Nature%20game%20and%20I%20invite%20you!%20Try%20it%20now!" alt="What App link invite"></a> */}
        </div>
      </div>
    );
  }
};

export default Popup;
