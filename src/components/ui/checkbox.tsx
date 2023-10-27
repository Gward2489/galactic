import React from 'react';
import '../../styles/customUI.css';

type CustomCheckboxProps = {
  status: 'yes' | 'no' | 'no answer';
  onClick: () => void;
  key: number;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ status, onClick, key }) => {

  const getText = (status: string) => {
    return status === 'yes' ? 'Yes' :  status === 'no' ? 'No' : 'No Answer';
  }

  const getBoxClass = (status: string) => {
    return status === 'yes' ? 'green-box' :  status === 'no' ? 'red-box' : 'grey-box';

  }

  const getTextClass = (status: string) => {
    return status === 'yes' ? 'green-text' :  status === 'no' ? 'red-text' : 'grey-text';

  }

  return (
    <div className="box-container" key={key} onClick={onClick}>
      <div className={`box ${getBoxClass(status)}`}></div>
      <div className={`boxtext ${getTextClass(status)}`}>{getText(status)}</div>
    </div>
  );
};

export default CustomCheckbox;
