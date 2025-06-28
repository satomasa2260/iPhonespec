import React from 'react';

const CTAButton = () => {
  const handleClick = () => {
    window.open('https://www.apple.com/jp/iphone/', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-sf font-semibold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
    >
      Apple公式で詳しく見る
      <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );
};

export default CTAButton; 