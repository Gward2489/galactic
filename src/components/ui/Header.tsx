import React from 'react';

type HeaderProps = {
  clientName: string;
  conductedOn: string;
  approvedOn: string;
  reviewerName: string;
};

const Header: React.FC<HeaderProps> = ({ clientName, conductedOn, approvedOn, reviewerName }) => {
  return (
    <div className="header-section mb-3">
      <div className='doc-title'>Insurance Assessment</div>
      <div className="client-name">{clientName}</div>
      <p>Conducted on: {conductedOn}</p>
      <p>Approved on: {approvedOn}</p>
      <p>Reviewer Name: {reviewerName}</p>
    </div>
  );
};

export default Header;
