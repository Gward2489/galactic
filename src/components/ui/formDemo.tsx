import React, { useState } from 'react';
import Question from './question';
import Score from './score';
import Header from './Header';
import OverallScore from './overallScore';

type QuestionTemplate = {
  text: string;
  hasComment: boolean;
  style: 'question-white' | 'question-light-grey';
};

type Answer = {
  checkbox: 'yes' | 'no' | 'no answer';
  comment?: string;
};

type Section = {
  title: string;
  questions: QuestionTemplate[];
};

const sections: Section[] = [
  {
    title: 'Section Title',
    questions: [
      { text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: true, style: 'question-white' },
      { text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: true, style: 'question-light-grey' },
      { text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-white' },
      { text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-light-grey' },
      { text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-white' },
      { text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-light-grey' },
    
    
    ]
  },
  {
    title: 'Section Title',
    questions: [
      { text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-white' },
      { text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-light-grey' },
      { text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-white' },
      { text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-light-grey' },
      { text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-white' },
      { text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-light-grey' },
    
    
    ]
  }
]

const initialAnswers: Record<string, Answer | null> = {
  'Question 1': null,
  'Question 2': null,
  // ...other questions
};


const FormDemo: React.FC = () => {
  const [answers, setAnswers] = useState(initialAnswers);

  const handleUpdateAnswer = (questionText: string, newAnswer: Answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionText]: newAnswer,
    }));
  };

  const calculateScore = () => {
    // Placeholder for server call to calculate score
    // For now, return a default score of 17
    return 17;
  };

  return (
    <div className="form-demo pt-10 pb-10 pl-20 pr-20">
        <Header
        clientName="Client Name"
        conductedOn="01/02/2023"
        approvedOn="03/04/2023"
        reviewerName="Jane Smith"
      />
      <OverallScore score={calculateScore()} />

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          <h2 className="section-title">{section.title}</h2>
          {section.questions.map((question, questionIndex) => (
            <Question
              key={questionIndex}
              hasComment={question.hasComment}
              text={question.text}
              style={question.style}
              answer={answers[question.text]}
              onUpdateAnswer={(newAnswer) => handleUpdateAnswer(question.text, newAnswer)}
            />
          ))}
        { 
          (sectionIndex + 1  !== sections.length) &&
          <div className='section-spacer'></div>
        }
        </div>
      ))}
      <div className='page-break'></div>
      <OverallScore score={calculateScore()} />
    </div>
  );
};

export default FormDemo;