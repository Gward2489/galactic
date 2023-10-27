// OverallScore.tsx
import React from 'react';
import Score from './score';
import '../../styles/customUI.css';

type OverallScoreProps = {
  score: number;
};

const OverallScore: React.FC<OverallScoreProps> = ({ score }) => {
  return (
    <div className="overall-score-row">
        <div className="ml-3">
            <Score score={score} />
        </div>
      <div className="score-description">Overall Cyber Insurability Score: <span className='score-print'>{score}% {score < 35 ? 'Low' : score < 80 ? 'Medium' : 'High'}</span> </div>
    </div>
  );
}

export default OverallScore;
