const Progress = ({ fails }) => {
  return (
    <>
      <div className="hangman">{fails}</div>
    </>
  );
};

export default Progress;