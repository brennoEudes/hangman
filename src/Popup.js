const Popup = ({ status, word, reset }) => {
  if (!status) {
    return null;
  } else {
    return (
      <div className="popup">
        <p>You are {status}!</p>
        <p>The word was: {word}.</p>
        <button onClick={reset}>Play Again</button>
      </div>
    );
  }
};

export default Popup;