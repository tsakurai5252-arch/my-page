// 共通メニューのCSSスタイルを適用
const menuStyle = document.createElement('style');
menuStyle.textContent = `
  .common-header-bar {
    background-color: #FFFFFF;
    padding: 12px 20px;
    margin: -20px -20px 20px -20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .common-nav-list {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    list-style: none;
    padding: 0;
  }
  .header-main-group {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .header-logo {
    max-height: 35px;
    width: auto;
  }
  .common-nav-link {
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    transition: opacity 0.2s;
  }
  .common-nav-link:hover {
    opacity: 0.6;
  }
  .header-copyright {
    font-size: 12px;
    white-space: nowrap;
    margin: 0;
  }

  /* スマホ向け対応 */
  @media (max-width: 768px) {
    .common-header-bar { padding: 8px 10px; }
    .common-nav-list { flex-direction: column; gap: 6px; }
    .header-main-group { gap: 8px; flex-wrap: wrap; justify-content: center; }
    .header-logo { max-height: 24px; }
    .common-nav-link { font-size: 11px; padding: 4px 6px; }
    .header-copyright { font-size: 9px; opacity: 0.8; }
  }
`;
document.head.appendChild(menuStyle);

// 共通メニューのHTML構造を生成して挿入
window.addEventListener('DOMContentLoaded', () => {
  const menuArea = document.getElementById('common-menu-area');
  if (!menuArea) return;

  // ★<menu-text>タグの内容を読み取る（なければ黒 #000000）
  let textColor = '#000000';
  const menuTextTag = document.querySelector('menu-text');

  if (menuTextTag) {
    // 空白や#を除去して大文字化
    const rawVal = menuTextTag.textContent.trim().replace('#', '').toUpperCase();
    if (rawVal === 'FFFFFF') {
      textColor = '#FFFFFF';
    } else if (rawVal === '000000') {
      textColor = '#000000';
    } else if (rawVal.length === 6) {
      textColor = '#' + rawVal; // その他のカラーコードが指定された場合にも対応
    }
  }

  // メニューのHTML描画
  menuArea.innerHTML = `
    <header class="common-header-bar" id="commonHeader">
      <nav>
        <div class="common-nav-list">
          <div class="header-main-group">
            <img src="logo.png" alt="ロゴ" class="header-logo">
            <p>TS FTP</p>
            <a href="../index.html" class="common-nav-link">オンラインマニュアル</a>
            <a href="download.html" class="common-nav-link">ダウンロード</a>
          </div>
          <p class="header-copyright">&copy; HomeMade Tools Project All Rights Reserved.</p>
        </div>
      </nav>
    </header>
  `;

  // 指定された文字色（textColor）をリンク・著作権表記に適用
  const header = document.getElementById('commonHeader');
  if (header) {
    header.querySelectorAll('.common-nav-link').forEach(link => {
      link.style.color = textColor;
    });
    const copyright = header.querySelector('.header-copyright');
    if (copyright) {
      copyright.style.color = textColor;
    }
  }
});