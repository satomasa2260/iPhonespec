import React from 'react';

const iPhoneCard = ({ iphone }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* 画像セクション */}
      <div className="relative bg-apple-gray p-8 flex justify-center items-center">
        <img 
          src={iphone.imageUrl} 
          alt={`${iphone.model}`}
          className="w-48 h-64 object-contain"
        />
        {/* 日本未発売バッジ */}
        {!iphone.isJapanRelease && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            日本未発売
          </div>
        )}
      </div>
      
      {/* 情報セクション */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-sf font-bold text-gray-900 mb-2">
            {iphone.model}
            {!iphone.isJapanRelease && (
              <span className="ml-2 text-sm text-red-600 font-medium">
                ※日本未発売
              </span>
            )}
          </h3>
          <p className="text-lg text-gray-600 font-medium">
            {iphone.year}
          </p>
        </div>
        
        {/* スペック概要 */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">ディスプレイ</span>
            <span className="text-sm font-medium text-gray-900">{iphone.displaySize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">チップ</span>
            <span className="text-sm font-medium text-gray-900">{iphone.chip}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">カメラ</span>
            <span className="text-sm font-medium text-gray-900">{iphone.camera}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">ストレージ</span>
            <span className="text-sm font-medium text-gray-900">{iphone.storage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">発売日</span>
            <span className="text-sm font-medium text-gray-900">
              {iphone.releaseDate}
              {!iphone.isJapanRelease && (
                <span className="text-xs text-red-600 ml-1">
                  （米国）
                </span>
              )}
            </span>
          </div>
        </div>
        
        {/* 進化ポイント */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {iphone.evolution}
          </p>
          {iphone.note && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              {iphone.note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default iPhoneCard; 