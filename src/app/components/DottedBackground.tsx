import React from 'react';

const DottedBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1]" 
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: 'white',
      }}
      aria-hidden="true"
    />
  );
};

export default DottedBackground;
