import React, { useEffect, useState } from 'react';
import Question from './question';
import Score from './score';
import Header from './Header';
import OverallScore from './overallScore';

type QuestionTemplate = {
  id: string;
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
      {id: '1', text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: true, style: 'question-white' },
      {id: '2', text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: true, style: 'question-light-grey' },
      {id: '3', text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-white' },
      {id: '4', text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-light-grey' },
      {id: '5', text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-white' },
      {id: '6', text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-light-grey' },
    
    
    ]
  },
  {
    title: 'Section Title',
    questions: [
      {id: '7', text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-white' },
      {id: '8', text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-light-grey' },
      {id: '9', text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-white' },
      {id: '10', text: 'Do you manage privileged accounts using a privileged access management software (PAM)?', hasComment: false, style: 'question-light-grey' },
      {id: '11', text: 'If a PAM solution is deployed, is accessible in a “check-in/out” model?', hasComment: false, style: 'question-white' },
      {id: '12', text: 'Do you use MFA to protect all local and remote access to privileged user accounts?', hasComment: false, style: 'question-light-grey' },
    
    
    ]
  }
]

const initialAnswers: Record<string, Answer | null> = Object.fromEntries(
  sections.flatMap(section =>
    section.questions.map(question => [question.id, null]) 
  )
);

const FormDemo: React.FC = () => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [score, setScore] = useState(0);

  const handleUpdateAnswer = (questionId: string, newAnswer: Answer) => { 
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: newAnswer,  
    }));
  };

  useEffect(() => {
    let totalQuestions = 0;
    sections.forEach(section => {
        totalQuestions += section.questions.length;
    });

    let yesCount = 0;
    Object.values(answers).forEach(answer => {
        if (answer && answer.checkbox === 'yes') {
            yesCount += 1;
        }
    });

    const percentage = Math.round((yesCount / totalQuestions) * 100);
    setScore(percentage);
}, [answers]);



  return (
    <div className="form-demo pt-10 pb-10 pl-20 pr-20">
        <Header
        clientName="Client Name"
        conductedOn="01/02/2023"
        approvedOn="03/04/2023"
        reviewerName="Jane Smith"
      />
      <OverallScore score={score} />

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          <h2 className="section-title">{section.title}</h2>
          {section.questions.map((question, questionIndex) => (
            <Question
              key={questionIndex}
              hasComment={question.hasComment}
              text={question.text}
              style={question.style}
              answer={answers[question.id]}
              onUpdateAnswer={(newAnswer) => handleUpdateAnswer(question.id, newAnswer)}
            />
          ))}
        { 
          (sectionIndex + 1  !== sections.length) &&
          <div className='section-spacer'></div>
        }
        </div>
      ))}
      <div className='page-break'></div>
      <OverallScore score={score} />
    </div>
  );
};

export default FormDemo;