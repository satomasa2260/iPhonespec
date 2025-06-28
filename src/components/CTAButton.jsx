import React from 'react';
import AppleLogo from './AppleLogo';

const CTAButton = () => {
  const handleClick = () => {
    window.open('https://www.apple.com/jp/iphone/', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center px-8 py-4 bg-apple-blue text-white font-sf font-semibold text-lg rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <AppleLogo className="w-6 h-6 mr-3" />
      Apple公式で詳しく見る
    </button>
  );
};

export default CTAButton; 