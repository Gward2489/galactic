import React from 'react';
import '../../styles/customUI.css';

type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score-background score">
      <div className="score-text">{score}%</div>
    </div>
  );
}

export default Score;