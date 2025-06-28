import React, { useRef } from 'react';
import ComparisonTable from './components/ComparisonTable';
import CTAButton from './components/CTAButton';
import { iphoneData } from './data/iphoneData';
import './index.css';

function App() {
  const detailsSectionRef = useRef(null);
  const cardRefs = useRef({});

  const handleModelClick = (iphone) => {
    console.log('Model clicked:', iphone.model);
    const cardRef = cardRefs.current[iphone.id];
    if (cardRef) {
      cardRef.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-apple-gray to-white font-sf">
      {/* ヘッダー */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-sf font-semibold text-gray-900">
              iPhone スペック比較
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              初代から最新モデルまで
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ヒーローセクション */}
        <section className="text-center mb-24">
          <div className="mb-8">
            <h2 className="text-6xl md:text-7xl font-sf font-bold text-gray-900 mb-8 leading-tight">
              iPhoneの進化を<br />
              <span className="bg-gradient-to-r from-apple-blue to-purple-500 bg-clip-text text-transparent">
                一覧で比較
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              2007年の初代iPhoneから最新のiPhone 16 Pro Maxまで、<br />
              <span className="font-medium text-apple-blue">17年間の革新的な進化の歴史</span>をご覧ください。
            </p>
          </div>
        </section>

        {/* 比較表セクション */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-sf font-bold text-gray-900 mb-6">
              スペック比較表
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              横スクロールで全モデルの詳細スペックを確認できます
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden backdrop-blur-sm">
            <ComparisonTable iphones={iphoneData} onModelClick={handleModelClick} />
          </div>
        </section>

        {/* iPhoneカードセクション */}
        <section className="mb-24" ref={detailsSectionRef}>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-sf font-bold text-gray-900 mb-6">
              各モデルの詳細
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              スペックと進化ポイントを詳しくご紹介
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iphoneData.map((iphone) => (
              <div 
                key={iphone.id} 
                ref={(el) => cardRefs.current[iphone.id] = el}
                className="group bg-white rounded-3xl shadow-lg border border-gray-200/60 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-sf font-bold text-gray-900">
                        {iphone.model}
                      </h3>
                      {!iphone.isJapanRelease && (
                        <span className="px-3 py-1 text-xs text-red-600 font-semibold bg-red-50 rounded-full border border-red-200">
                          ※日本未発売
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-500 font-medium">{iphone.year}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">ディスプレイ</span>
                      <span className="text-sm font-semibold text-gray-900">{iphone.displaySize}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">チップ</span>
                      <span className="text-sm font-semibold text-gray-900">{iphone.chip}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">カメラ</span>
                      <span className="text-sm font-semibold text-gray-900">{iphone.camera}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">ストレージ</span>
                      <span className="text-sm font-semibold text-gray-900">{iphone.storage}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-500 font-medium">発売日</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {iphone.releaseDate}
                        {!iphone.isJapanRelease && (
                          <span className="text-xs text-red-600 ml-1">（米国）</span>
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200/50">
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{iphone.evolution}</p>
                    {iphone.note && (
                      <p className="text-xs text-red-600 mt-3 font-semibold bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                        {iphone.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <p className="text-lg text-gray-300 font-medium">
              iPhone スペック比較
            </p>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            © 2025 iPhone スペック比較. このサイトはApple公式サイトではありません。
          </p>
          <p className="text-xs text-gray-500">
            データは参考情報です。詳細はApple公式サイトをご確認ください。
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 