import React from 'react';

const Select = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="any">Any</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default Select; 