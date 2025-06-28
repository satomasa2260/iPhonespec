# iPhone スペック比較 LP

iPhone初代から最新モデルまでのスペック比較ランディングページです。Apple公式サイトを意識したシンプルでミニマルなデザインで、各モデルの進化を一覧で比較できます。

## 特徴

- **Apple公式風デザイン**: 白ベースの清潔感のあるデザイン
- **レスポンシブ対応**: スマートフォンからデスクトップまで対応
- **横スクロール比較表**: 全モデルのスペックを一覧で比較
- **高画質画像表示**: 各モデルの公式イメージを表示
- **進化ポイント**: 各世代の主要な進化を簡潔に説明
- **CTAボタン**: Apple公式サイトへの誘導

## 技術スタック

- React 18
- Tailwind CSS
- JavaScript (JSX)

## セットアップ

### 前提条件

- Node.js (v16以上)
- npm または yarn

### インストール

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm start
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

### ビルド

本番用ビルドを作成:
```bash
npm run build
```

## プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── AppleLogo.jsx   # AppleロゴSVG
│   ├── CTAButton.jsx   # CTAボタン
│   ├── ComparisonTable.jsx # 比較表
│   └── iPhoneCard.jsx  # iPhoneカード
├── data/
│   └── iphoneData.js   # iPhoneデータ配列
├── App.jsx             # メインアプリケーション
├── index.js            # エントリーポイント
└── index.css           # スタイル
```

## データ構造

各iPhoneモデルは以下の構造で管理されています:

```javascript
{
  id: 1,
  year: 2007,
  model: "iPhone",
  displaySize: "3.5インチ",
  resolution: "320×480",
  chip: "Samsung S5L8900",
  camera: "2MP",
  releaseDate: "2007年6月29日",
  imageUrl: "画像URL",
  evolution: "進化ポイントの説明"
}
```

## カスタマイズ

### 新しいiPhoneモデルの追加

`src/data/iphoneData.js` の配列に新しいオブジェクトを追加するだけで、自動的に比較表とカードに反映されます。

### デザインの変更

Tailwind CSSクラスを変更することで、色やレイアウトを簡単にカスタマイズできます。

## ライセンス

このプロジェクトは教育目的で作成されています。Apple公式サイトではありません。 