// src/MultiInputRow.jsx
import React from 'react';

function TableRowNumber({ label, values, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <label style={{ marginRight: '10px', width: '100px' }}>{label}</label>
      {values.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          onChange={(e) => onChange(index, e.target.value)}
          style={{ marginRight: '10px', width: '100px' }}
        />
      ))}
    </div>
  );
}

export default TableRowNumber;
