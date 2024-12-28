import React from 'react';

const CompanyFilter = ({ setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by company"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default CompanyFilter;