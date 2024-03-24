import React from "react";

const Progress = ({ fails }) => {
  const hangmanParts = [
    <line key={1} className="" x1="1%" y1="95%" x2="99%" y2="95%"></line>,
    <line key={2} className="" x1="30%" y1="95%" x2="30%" y2="5%"></line>,
    <line key={3} className="" x1="30%" y1="5%" x2="70%" y2="5%"></line>,
    <line key={4} className="" x1="70%" y1="5%" x2="70%" y2="25%"></line>,
    <circle key={5} className="" cx="70%" cy="30%" r="2%"></circle>,
    <line key={6} className="" x1="70%" y1="35%" x2="70%" y2="45%"></line>,
    <line key={7} className="" x1="70%" y1="45%" x2="68%" y2="55%"></line>,
    <line key={8} className="" x1="70%" y1="45%" x2="72%" y2="55%"></line>,
    <line key={9} className="" x1="70%" y1="38%" x2="68%" y2="46%"></line>,
    <line key={10} className="draw" x1="70%" y1="38%" x2="72%" y2="46%"></line>,
  ];

  const renderHangmanParts = () => {
    return hangmanParts.slice(0, fails);
  };

  return (
    <div className="hangman">
      <svg xmlns="http://www.w3.org/2000/svg">{renderHangmanParts()}</svg>
    </div>
  );
};

export default Progress;
