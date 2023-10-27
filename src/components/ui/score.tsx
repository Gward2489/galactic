import React from 'react';
import '../../styles/customUI.css';

type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {

  const getBackgroundColorClass = () => {
    if (score > 80) {
      return 'score-background-green';
    } else if (score > 35) {
      return 'score-background-yellow';
    } else {
      return 'score-background-red';
    }
  };

  return (
    <div className={`score-background ${getBackgroundColorClass()} score`}>
      <div className="score-text">{score}%</div>
    </div>
  );
}

export default Score;