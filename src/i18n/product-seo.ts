import { productSeo } from '../data/product-seo';
import { invsiSeo } from '../data/invsi-seo';
import { isHandwritten, type HandwrittenLocale, type Locale } from './site';
import { trDeep } from './translate';
const translated = {
  en: {
    nexpaste: {
      name: 'NexPaste', alternateName: 'NexPaste Clipboard Manager', title: 'NexPaste — Clipboard History for Mac, iPhone and iPad',
      description: 'NexPaste saves text, links, images and file references on Mac, with search, tags, favorites and keyboard shortcuts. Save content through the app or widgets on iPhone and iPad. Pro offers optional iCloud sync. Regular history holds up to 500 items.',
      features: ['Mac clipboard history and search', 'Text, links, images and file references', 'Up to 500 regular history items', 'Tags, favorites and a compact panel', 'iPhone and iPad app and widgets', 'Optional iCloud sync with Pro'],
      questions: [['Which devices does NexPaste support?', 'NexPaste supports Mac, iPhone and iPad. Mac can record clipboard history automatically; on mobile, save content through the app or widgets.'], ['Can NexPaste sync my clipboard?', 'Pro users can enable iCloud sync to share saved content across Mac, iPhone and iPad using the same Apple Account.']],
    },
    transnap: {
      name: 'Transnap', alternateName: 'Transnap Menu Bar Translator', title: 'Transnap — Mac Menu Bar Translation and History',
      description: 'Transnap is a macOS menu bar translation app. Copy text to translate quickly and keep translation history on your Mac for reading and everyday work.',
      features: ['macOS menu bar translation', 'Quick translation of copied text', 'Translation history on your Mac'],
      questions: [['What is Transnap?', 'Transnap is a menu bar translation tool for Mac. Translate copied text quickly and revisit your translation history.']],
    },
    'pixie-wallpaper': {
      name: 'Pixie Wallpaper', alternateName: 'Pixie', title: 'Pixie Wallpaper — HD Wallpapers for iPhone and iPad',
      description: 'Discover daily curated HD wallpapers for iPhone and iPad, with dozens of categories including landscapes, anime, light, textures and Chinese art. Preview full screen, save to Photos and sync favorites with iCloud.',
      features: ['Daily curated HD wallpapers', 'Dozens of wallpaper categories', 'Full-screen previews', 'Save wallpapers to Photos', 'iCloud favorites sync'],
      questions: [['What wallpapers does Pixie offer?', 'Explore landscapes, minimalist designs, abstract art, portraits and illustrations for iPhone and iPad, with fresh daily selections.'], ['How do I preview and save a wallpaper?', 'Preview full screen in Pixie, add favorites or save to Photos. Favorites support iCloud sync. You can also click pictures in the web gallery to preview them.']],
    },
    'pineapple-english': {
      name: 'Pineapple English', alternateName: 'Pineapple English for Kids', title: 'Pineapple English — Picture Vocabulary and Games for Ages 3–10',
      description: 'Pineapple English helps children ages 3–10 explore English on iPhone and iPad, with 3,000+ illustrated words, 50+ topics, British and American pronunciation, listening games, word matching and spaced review.',
      features: ['3,000+ illustrated English words', '50+ everyday topics', 'British and American pronunciation', 'Listen and choose a picture', 'Word matching games', 'Spaced review'],
      questions: [['Who is Pineapple English for?', 'Pineapple English is designed for children ages 3–10, using illustrated word cards, pronunciation and games on iPhone and iPad.'], ['How do children learn and review words?', 'Explore pictures and pronunciation, then practice with listening and matching games. Vocabulary is organized by topics, CEFR levels and Cambridge word lists, with spaced review.']],
    },
    'are-you-ok': {
      name: 'Are You OK', alternateName: 'Are You OK Daily Check-In', title: 'Are You OK — Daily Check-In and Contact Email Notifications',
      description: 'Are You OK is a daily check-in app for people living alone. Choose a contact email and timeout, then tap to check in. If you miss your check-in window, your contact receives an email you prepared.',
      features: ['Daily check-in', 'Adjustable timeout', 'Check-in reminders', 'Contact email settings', 'Custom notification email'],
      questions: [['What is Are You OK?', 'Are You OK helps people living alone stay connected with family and friends. Add a contact email and tap to restart the check-in countdown.'], ['What happens if I miss a check-in?', 'Your contact receives your prepared email after the selected timeout. Choose 12, 16, 24, 48 or 72 hours and enable reminders.']],
    },
  },
  'zh-TW': {
    nexpaste: {
      name: 'NexPaste', alternateName: 'NexPaste 剪貼簿管理器', title: 'NexPaste — Mac、iPhone、iPad 剪貼簿歷史與 iCloud 同步',
      description: 'NexPaste 是 Mac、iPhone 和 iPad 上的剪貼簿管理器。Mac 自動保存文字、連結、圖片和檔案參照，支援搜尋、標籤、收藏與快捷鍵貼上；行動裝置透過 App 或小工具保存內容，Pro 可開啟 iCloud 同步。一般歷史最多保留 500 筆。',
      features: ['Mac 剪貼簿歷史與搜尋', '文字、連結、圖片和檔案參照', '最多 500 筆一般歷史', '標籤、收藏與迷你面板', 'iPhone 和 iPad App 及小工具', 'Pro 可選 iCloud 同步'],
      questions: [['NexPaste 支援哪些裝置？', 'NexPaste 支援 Mac、iPhone 和 iPad。Mac 可自動記錄剪貼簿，行動裝置透過 App 或小工具保存內容。'], ['NexPaste 可以同步剪貼簿嗎？', 'Pro 使用者可開啟 iCloud 同步，在使用相同 Apple 帳號的 Mac、iPhone 和 iPad 間共享保存的內容。']],
    },
    transnap: {
      name: 'Transnap', alternateName: 'Transnap 選單列翻譯', title: 'Transnap — Mac 選單列複製翻譯與翻譯歷史',
      description: 'Transnap 是 macOS 選單列翻譯工具。複製文字後快速翻譯，並在 Mac 上保留翻譯歷史，適合閱讀與日常工作。',
      features: ['macOS 選單列翻譯', '複製文字快速翻譯', 'Mac 本機翻譯歷史'],
      questions: [['Transnap 是什麼軟體？', 'Transnap 是為 Mac 打造的選單列翻譯工具，可以在複製文字後快速翻譯，並保留翻譯歷史。']],
    },
    'pixie-wallpaper': {
      name: '精靈壁紙 Pixie', alternateName: 'Pixie Wallpaper', title: '精靈壁紙 Pixie — iPhone、iPad 高畫質桌布與每日精選',
      description: '精靈壁紙 Pixie 為 iPhone 和 iPad 提供每日更新的精選高畫質桌布，涵蓋風景、國風、動漫、人物、光影、紋理等數十種分類，支援全螢幕預覽、儲存至照片及 iCloud 收藏同步。',
      features: ['每日精選高畫質桌布', '風景、國風、動漫等數十種分類', '全螢幕桌布預覽', '儲存桌布至照片', 'iCloud 收藏同步'],
      questions: [['精靈壁紙 Pixie 提供哪些桌布？', '提供風景、極簡、抽象藝術、人物及趣味插畫等風格，適用於 iPhone 和 iPad，並持續更新每日精選。'], ['如何預覽和儲存喜歡的桌布？', '在 App 中可以全螢幕預覽、收藏或儲存至照片。收藏支援 iCloud 同步，網頁圖庫也可點擊預覽。']],
    },
    'pineapple-english': {
      name: '鳳梨英語', alternateName: 'Pineapple English', title: '鳳梨英語 — 3–10 歲兒童英語啟蒙與單字遊戲',
      description: '鳳梨英語是面向 3–10 歲兒童的 iPhone、iPad 英語啟蒙 App，提供 3000+ 圖解單字、50+ 主題、英美發音、聽音選圖、單字配對及間隔複習。',
      features: ['3000+ 圖解英語單字', '50+ 生活與興趣主題', '英式與美式發音', '聽音選圖', '單字配對', '間隔複習'],
      questions: [['鳳梨英語適合多大的孩子？', '鳳梨英語面向 3–10 歲兒童，用插畫單字卡、發音和小遊戲幫助孩子開始認識英語，支援 iPhone 和 iPad。'], ['鳳梨英語如何學習和複習單字？', '孩子可以看圖片、聽英式或美式發音，再透過聽音選圖和單字配對練習。詞彙按生活主題、CEFR 和劍橋詞書組織，並提供間隔複習。']],
    },
    'are-you-ok': {
      name: 'Are You OK', alternateName: 'Are You OK 獨居打卡', title: 'Are You OK — 獨居日常打卡與緊急聯絡人電子郵件通知',
      description: 'Are You OK 是獨居日常打卡 App。設定緊急聯絡人信箱和逾時時間，點擊確認平安；若未在設定時間內打卡，App 會向聯絡人寄送預先寫好的電子郵件。',
      features: ['日常平安打卡', '可選逾時時間', '打卡提醒', '緊急聯絡人信箱設定', '自訂逾時通知郵件'],
      questions: [['Are You OK 是什麼 App？', 'Are You OK 幫助獨居使用者與親友保持聯繫。填寫緊急聯絡人信箱後，點擊打卡即可重新開始倒數。'], ['沒有按時打卡會怎樣？', '超過設定時間仍未打卡，聯絡人會收到預先寫好的電子郵件。可選擇 12、16、24、48 或 72 小時，並開啟提醒。']],
    },
  },
};
function handwrittenProducts(lang: HandwrittenLocale) {
  if (lang === 'zh-CN') return productSeo;
  return Object.fromEntries(Object.entries(productSeo).map(([slug, product]) => [slug, {
    ...product, ...(slug === 'invsi' ? invsiSeo[lang] : translated[lang][slug as keyof typeof translated.en]),
  }])) as unknown as typeof productSeo;
}
export function localizedProducts(lang: Locale) {
  return isHandwritten(lang) ? handwrittenProducts(lang) : trDeep(lang, handwrittenProducts('en'));
}
