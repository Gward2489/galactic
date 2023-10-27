// Question.tsx

import React, { useState, useCallback } from 'react';
import CustomCheckbox from './checkbox';
import '../../styles/customUI.css';

type Answer = {
    checkbox: 'yes' | 'no' | 'no answer';
    comment?: string;
};

type QuestionProps = {
    text: string;
    hasComment: boolean;
    style: 'question-white' | 'question-light-grey';
    answer: Answer | null;
    onUpdateAnswer: (newAnswer: Answer) => void;
    key: number;
};

const Question: React.FC<QuestionProps> = ({ text, hasComment, style, answer, onUpdateAnswer, key }) => {
    const [checkboxValue, setCheckboxValue] = useState(answer ? answer.checkbox : 'no answer');
    const [commentText, setCommentText] = useState(answer ? answer.comment : '');

    const handleCheckboxClick = useCallback(() => {
        const newValue = checkboxValue === 'yes' ? 'no' : 'yes';
        setCheckboxValue(newValue);
        onUpdateAnswer({ checkbox: newValue, comment: commentText });
    }, [checkboxValue, commentText, onUpdateAnswer]);

    const handleCommentChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newCommentText = event.target.value;
        setCommentText(newCommentText);
        onUpdateAnswer({ checkbox: checkboxValue, comment: newCommentText });
    }, [checkboxValue, onUpdateAnswer]);

    return (
        <div key={key} className={`question-row ${style} ml-2 mr-2 pl-2 pr-2`}>
            <div className="checkbox-cell">
                <CustomCheckbox key={key} status={checkboxValue} onClick={handleCheckboxClick} />
            </div>
            <div className="question-text">{text}</div>
            {hasComment && (
                <textarea
                    className={`comment-textarea ${style}`}
                    value={commentText}
                    onChange={handleCommentChange}
                    placeholder={style === 'question-white' ? 'Add comment...' : 'Add comment...'}
                />
            )}
        </div>
    );
};

export default Question;
