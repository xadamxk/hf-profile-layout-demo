import React from 'react';
import './RecentContracts.css';

const RecentContracts = ({ contracts }) => {
  return (
    <div className="contracts-list">
      {contracts.map((contract, index) => (
        <div key={index} className={`contract-item status-${contract.statusType}`}>
          <div className="contract-header">
            <div className="contract-status-icon">
              {contract.statusType === 'positive' && <i className="fas fa-check-circle"></i>}
              {contract.statusType === 'neutral' && <i className="fas fa-clock"></i>}
              {contract.statusType === 'negative' && <i className="fas fa-exclamation-circle"></i>}
            </div>
            <span className="contract-member">{contract.member}</span>
            <span className="contract-amount">{contract.amount}</span>
          </div>
          <div className="contract-description">{contract.description}</div>
          <div className="contract-date">{contract.date}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentContracts;
