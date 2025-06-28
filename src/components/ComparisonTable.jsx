import React from 'react';
import { iphoneData } from '../data/iphoneData';

const ComparisonTable = ({ onModelClick }) => {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full min-w-[1200px] md:min-w-0 bg-white border-collapse">
        <thead>
          <tr className="border-b border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100/50">
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[160px] tracking-wide">
              モデル名
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[140px] tracking-wide">
              ディスプレイ
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[140px] tracking-wide">
              解像度
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[160px] tracking-wide">
              チップ
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[140px] tracking-wide">
              カメラ
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[140px] tracking-wide">
              ストレージ
            </th>
            <th className="px-8 py-6 text-left text-sm font-sf font-bold text-gray-900 min-w-[160px] tracking-wide">
              発売日
            </th>
          </tr>
        </thead>
        <tbody>
          {iphoneData.map((iphone, index) => (
            <tr onClick={() => {
                console.log('Table row clicked:', iphone.model);
                onModelClick && onModelClick(iphone);
              }} 
              key={iphone.id} 
              className={
                `border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 cursor-pointer group odd:bg-white even:bg-gray-50`
              }
            >
              <td className="px-8 py-6 text-sm text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {iphone.model}
                  {!iphone.isJapanRelease && (
                    <span className="ml-3 px-3 py-1 text-xs text-red-600 font-semibold bg-red-50 rounded-full border border-red-200 whitespace-nowrap">
                      ※日本未発売
                    </span>
                  )}
                </div>
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                {iphone.displaySize}
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                {iphone.resolution}
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                {iphone.chip}
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                {iphone.camera}
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                {iphone.storage}
              </td>
              <td className="px-8 py-6 text-sm text-gray-700 font-medium">
                <div>
                  {iphone.releaseDate}
                  {!iphone.isJapanRelease && (
                    <div className="text-xs text-red-600 mt-1 font-medium">
                      （アメリカ発売日）
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable; 