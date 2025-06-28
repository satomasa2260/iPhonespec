import React from 'react';
import { iphoneData } from '../data/iphoneData';

const ComparisonTable = () => {
  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[140px]">
              モデル名
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[120px]">
              ディスプレイ
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[120px]">
              解像度
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[140px]">
              チップ
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[120px]">
              カメラ
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[120px]">
              ストレージ
            </th>
            <th className="px-6 py-4 text-left text-sm font-sf font-semibold text-gray-900 min-w-[140px]">
              発売日
            </th>
          </tr>
        </thead>
        <tbody>
          {iphoneData.map((iphone, index) => (
            <tr 
              key={iphone.id} 
              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                <div>
                  {iphone.model}
                  {!iphone.isJapanRelease && (
                    <span className="ml-2 text-xs text-red-600 font-medium">
                      ※日本未発売
                    </span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {iphone.displaySize}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {iphone.resolution}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {iphone.chip}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {iphone.camera}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {iphone.storage}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                <div>
                  {iphone.releaseDate}
                  {!iphone.isJapanRelease && (
                    <div className="text-xs text-red-600 mt-1">
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