import { productSeo } from '../data/product-seo';
import { invsiSeo } from '../data/invsi-seo';
import { isHandwritten, type HandwrittenLocale, type Locale } from './site';
import { trDeep } from './translate';
const translated = {
  en: {
    nexpaste: {
      name: 'NexPaste', alternateName: 'NexPaste Clipboard Manager', title: 'NexPaste — Clipboard Manager for Mac, iPhone and iPad with iCloud Sync',
      description: 'NexPaste is an ultra-lightweight clipboard manager that remembers everything you copy and keeps it in sync across Mac, iPhone and iPad. On Mac it saves text, links, images and file references, with search, tags, favorites and keyboard shortcuts. It works offline, uses no third-party SDKs and can ignore password managers and other sensitive apps. Pro syncs through your own iCloud. Regular history holds up to 500 items.',
      features: ['Mac clipboard history and search', 'Text, links, images and file references', 'Up to 500 regular history items', 'Tags, favorites and keyboard shortcuts', 'Center, top or side panels plus a menu bar mini panel', 'Exclude password managers and sensitive apps', 'Runs locally and offline, no third-party SDKs', 'iPhone and iPad app and widgets', 'Optional iCloud sync with Pro'],
      questions: [['Does NexPaste continuously record the clipboard on iPhone?', 'No. On iPhone and iPad, save text, links and images through the app or widget. Mac supports automatic recording, which you can pause or disable for selected apps.'], ['Are files copied into NexPaste?', 'Mac stores file references, not backup copies. Keep the original files; moving or deleting them may make a saved reference unavailable.'], ['Which devices does NexPaste support?', 'NexPaste supports Mac, iPhone and iPad. Mac can record clipboard history automatically; on mobile, save content through the app or widgets.'], ['Can NexPaste sync my clipboard?', 'Pro users can enable iCloud sync to share saved content across Mac, iPhone and iPad using the same Apple Account. Sync uses Apple’s native iCloud framework and your own iCloud storage, with no third-party cloud services.'], ['Does NexPaste save my passwords?', 'NexPaste runs locally and uses no third-party SDKs. You can exclude password managers and other sensitive apps so nothing you copy from them is saved.'], ['Is NexPaste free?', 'The basic features are free. Upgrade to Pro to unlock all premium features, including iCloud sync.']],
    },
    transnap: {
      name: 'Transnap', alternateName: 'Transnap Menu Bar Translator', title: 'Transnap — Instant Menu Bar Translation for Mac, Offline and with History',
      description: 'Transnap is an ultra-lightweight menu bar translator for macOS. Open the panel and it reads the latest text on your clipboard and translates it right away. It uses macOS’s built-in translation, with offline language packs you can download, so it keeps working without a connection. Translation history stays on your Mac, ready to revisit or copy.',
      features: ['macOS menu bar translation', 'Translates clipboard text when you open the panel', 'Native macOS translation engine', 'View and download offline language packs', 'Local translation history with one-click copy', 'Type text and press Return to translate', 'Light and dark appearance, launch at login'],
      questions: [['What is Transnap?', 'Transnap is a menu bar translation tool for Mac. Copy some text and open the panel: it reads your clipboard, translates right away and keeps your translation history.'], ['Can Transnap translate offline?', 'Yes. Transnap uses macOS’s built-in translation. You can check and download offline language packs in the app, then translate without an internet connection.'], ['What does Transnap require?', 'Transnap runs on Macs with macOS 15 or later.']],
    },
    'pixie-wallpaper': {
      name: 'Pixie Wallpaper', alternateName: 'Pixie', title: 'Pixie Wallpaper — HD Wallpapers, Chat Backgrounds and Daily Picks for iPhone and iPad',
      description: 'Pixie is a clean, lightweight wallpaper app for iPhone and iPad. Discover HD wallpapers curated daily across dozens of categories, including landscapes, anime, light, textures, Chinese art, Dynamic Island designs and chat backgrounds, plus landscape wallpapers for foldable screens. No ads, no pop-ups and no sign-up. Preview full screen, save to Photos and sync favorites with iCloud.',
      features: ['Daily curated HD wallpapers', 'Dozens of wallpaper categories', 'Dynamic Island designs and chat backgrounds', 'Landscape wallpapers for foldable screens', 'Full-screen previews', 'Save wallpapers to Photos', 'iCloud favorites sync', 'No ads, no pop-ups, no sign-up'],
      questions: [['What wallpapers does Pixie offer?', 'Explore landscapes, minimalist designs, abstract art, portraits and illustrations, as well as Dynamic Island designs, chat backgrounds and landscape wallpapers for foldable screens, with fresh daily selections for iPhone and iPad.'], ['How do I preview and save a wallpaper?', 'Preview full screen in Pixie, add favorites or save to Photos. Favorites support iCloud sync. You can also click pictures in the web gallery to preview them.'], ['Do I need an account? Are there ads?', 'No sign-up is needed: open the app and start downloading. There are no ads or pop-ups. Basic features are free, and membership unlocks all premium features.']],
    },
    'pineapple-english': {
      name: 'Pineapple English', alternateName: 'Pineapple English: Word Match', title: 'Pineapple English — Word Match and Picture Vocabulary Games for Kids',
      description: 'Pineapple English is a picture vocabulary app for children ages 3–10 on iPhone and iPad. See the picture, hear the word, find the match and clear the cards: kids practice 3,000+ everyday English words through matching and listening games, linking pictures directly to English. It includes 50+ topics, CEFR and Cambridge Young Learners word books, British and American pronunciation and spaced review, with a layout optimized for iPad.',
      features: ['3,000+ illustrated English words', '50+ everyday topics', 'CEFR and Cambridge Young Learners word books', 'British and American pronunciation', 'Word matching games', 'Listen and choose a picture', 'Adjustable autoplay and repeat count', 'Spaced review', 'Optimized for iPad', '100+ words free with no time limit'],
      questions: [['Who is Pineapple English for?', 'Pineapple English is designed for children ages 3–10, using illustrated word cards, pronunciation and games on iPhone and iPad.'], ['How do children learn and review words?', 'Explore pictures and pronunciation, then practice with listening and matching games. Vocabulary is organized by topics, CEFR levels and Cambridge word lists, with spaced review.'], ['Is Pineapple English free?', 'Enjoy full access to 100+ words for free, with no time limit. Pro unlocks all 3,000+ words and every vocabulary game, with monthly, annual and one-time lifetime options.'], ['Which app languages does Pineapple English support?', 'The app interface is available in English, Simplified Chinese, Traditional Chinese, Japanese, German, Spanish and Korean, with British and American English pronunciation.']],
    },
    'are-you-ok': {
      name: 'Are You OK', alternateName: 'Are You OK Missed Check-In Alert', title: 'Are You OK — Daily Check-In and Missed Check-In Email Alerts for Living Alone',
      description: 'Are You OK is a missed check-in alert for people who live alone or travel solo. Choose a contact email and timeout, then tap once a day to check in. If you miss your check-in window, your contact receives an email you prepared. No location tracking, no listening, nothing about your life uploaded.',
      features: ['One-tap daily check-in', 'Adjustable timeout', 'Check-in reminders', 'Contact email settings', 'Custom notification email', 'No location tracking or listening'],
      questions: [['What is Are You OK?', 'Are You OK is a missed check-in alert that helps people living alone stay connected with family and friends. Add a contact email and tap to restart the check-in countdown.'], ['What happens if I miss a check-in?', 'Your contact receives your prepared email after the selected timeout. Choose 12, 16, 24, 48 or 72 hours and enable reminders.'], ['Does Are You OK track my location?', 'No. Are You OK does not track your location, listen in or upload your daily life. It only sends the notification email when you miss a check-in.']],
    },
  },
  'zh-TW': {
    nexpaste: {
      name: 'NexPaste', alternateName: 'NexPaste 剪貼簿管理器', title: 'NexPaste — Mac、iPhone、iPad 剪貼簿管理器與 iCloud 同步',
      description: 'NexPaste 是超輕量的剪貼簿管理器，記住你複製過的內容，並在 Mac、iPhone 和 iPad 間同步。Mac 自動保存文字、連結、圖片和檔案參照，支援搜尋、標籤、收藏與快捷鍵貼上；可離線使用，不含第三方 SDK，可排除密碼管理器等敏感 App。Pro 透過你自己的 iCloud 同步。一般歷史最多保留 500 筆。',
      features: ['Mac 剪貼簿歷史與搜尋', '文字、連結、圖片和檔案參照', '最多 500 筆一般歷史', '標籤、收藏與快捷鍵貼上', '置中、頂部、左右側面板與選單列迷你面板', '可排除密碼管理器等敏感 App', '本機執行、可離線使用、無第三方 SDK', 'iPhone 和 iPad App 及小工具', 'Pro 可選 iCloud 同步'],
      questions: [['iPhone 會在背景持續記錄剪貼簿嗎？', '不會。iPhone 與 iPad 需要透過 App 或小工具儲存文字、連結和圖片；Mac 支援自動記錄，也可暫停或排除指定 App。'], ['檔案會複製進 NexPaste 嗎？', 'Mac 儲存的是檔案參照，並不是檔案備份。請保留原始檔案；移動或刪除後，參照可能無法繼續使用。'], ['NexPaste 支援哪些裝置？', 'NexPaste 支援 Mac、iPhone 和 iPad。Mac 可自動記錄剪貼簿，行動裝置透過 App 或小工具保存內容。'], ['NexPaste 可以同步剪貼簿嗎？', 'Pro 使用者可開啟 iCloud 同步，在使用相同 Apple 帳號的 Mac、iPhone 和 iPad 間共享保存的內容。同步使用 Apple 原生 iCloud 框架，資料佔用你自己的 iCloud 空間，不經過第三方雲端服務。'], ['NexPaste 會保存密碼嗎？', 'NexPaste 在本機執行，不含第三方 SDK。你可以排除密碼管理器和其他敏感 App，從這些 App 複製的內容不會被保存。'], ['NexPaste 可以免費使用嗎？', '基礎功能可以免費使用，升級 Pro 可解鎖全部進階功能，包括 iCloud 同步。']],
    },
    transnap: {
      name: 'Transnap', alternateName: 'Transnap 選單列翻譯', title: 'Transnap — Mac 選單列秒速翻譯，支援離線與翻譯歷史',
      description: 'Transnap 是 macOS 上超輕量的選單列翻譯工具。打開面板時自動讀取剪貼簿裡最新的文字並立即翻譯；使用 macOS 系統原生翻譯，可下載離線語言包，沒有網路也能用。翻譯紀錄保存在本機，可隨時翻閱和一鍵複製。',
      features: ['macOS 選單列翻譯', '打開面板自動翻譯剪貼簿文字', 'macOS 原生翻譯引擎', '離線語言包查看與下載', '本機翻譯歷史與一鍵複製', '手動輸入、Return 翻譯', '深淺色外觀與登入時啟動'],
      questions: [['Transnap 是什麼軟體？', 'Transnap 是為 Mac 打造的選單列翻譯工具。複製文字後打開面板，它會自動讀取剪貼簿並立即翻譯，同時保留翻譯歷史。'], ['Transnap 可以離線翻譯嗎？', '可以。Transnap 使用 macOS 系統原生翻譯，可以在 App 內查看和下載離線語言包，下載後沒有網路也能翻譯。'], ['Transnap 需要什麼系統？', 'Transnap 適用於 macOS 15 及以上版本的 Mac。']],
    },
    'pixie-wallpaper': {
      name: '精靈壁紙 Pixie', alternateName: 'Pixie Wallpaper', title: '精靈壁紙 Pixie — iPhone、iPad 高畫質桌布、聊天背景與每日精選',
      description: '精靈壁紙 Pixie 是乾淨、輕量的 iPhone 和 iPad 桌布 App，首頁每天更新精選高畫質桌布，涵蓋風景、國風、動漫、人物、光影、紋理、動態島創意桌布、聊天背景等數十種分類，並提供摺疊螢幕橫向桌布。沒有廣告和彈窗，無需註冊即可下載，支援全螢幕預覽、儲存至照片及 iCloud 收藏同步。',
      features: ['每日精選高畫質桌布', '風景、國風、動漫等數十種分類', '動態島創意桌布與聊天背景', '摺疊螢幕橫向桌布', '全螢幕桌布預覽', '儲存桌布至照片', 'iCloud 收藏同步', '無廣告、無彈窗、無需註冊'],
      questions: [['精靈壁紙 Pixie 提供哪些桌布？', '提供風景、極簡、抽象藝術、人物及趣味插畫等風格，也有適配動態島的創意桌布、聊天背景和摺疊螢幕橫向桌布，適用於 iPhone 和 iPad，並持續更新每日精選。'], ['如何預覽和儲存喜歡的桌布？', '在 App 中可以全螢幕預覽、收藏或儲存至照片。收藏支援 iCloud 同步，網頁圖庫也可點擊預覽。'], ['精靈壁紙需要註冊嗎？有廣告嗎？', '無需註冊登入，打開就能下載桌布，也沒有廣告和彈窗。基礎功能免費，會員可解鎖全部進階功能。']],
    },
    'pineapple-english': {
      name: '鳳梨英語', alternateName: 'Pineapple English', title: '鳳梨英語 — 兒童英語單字配對遊戲與看圖聽音啟蒙',
      description: '鳳梨英語是面向 3–10 歲兒童的 iPhone、iPad 英語單字啟蒙 App。看圖、聽音、配對、消除，在單字配對和聽音選圖遊戲中反覆練習 3000+ 常用英語單字，建立「圖片—英文」的直接聯繫。提供 50+ 主題、CEFR 與劍橋兒童英語詞書、英美發音及間隔複習，並為 iPad 大螢幕最佳化。',
      features: ['3000+ 圖解英語單字', '50+ 生活與興趣主題', 'CEFR 與劍橋兒童英語詞書', '英式與美式發音', '單字配對', '聽音選圖', '可設定自動播放和播放次數', '間隔複習', '為 iPad 大螢幕最佳化', '100+ 單字永久免費體驗'],
      questions: [['鳳梨英語適合多大的孩子？', '鳳梨英語面向 3–10 歲兒童，用插畫單字卡、發音和小遊戲幫助孩子開始認識英語，支援 iPhone 和 iPad。'], ['鳳梨英語如何學習和複習單字？', '孩子可以看圖片、聽英式或美式發音，再透過聽音選圖和單字配對練習。詞彙按生活主題、CEFR 和劍橋詞書組織，並提供間隔複習。'], ['鳳梨英語可以免費使用嗎？', '可以永久免費體驗 100+ 單字的全部功能。Pro 解鎖全部 3000+ 單字和所有單字遊戲，提供月度、年度訂閱和一次性永久會員。'], ['鳳梨英語支援哪些介面語言？', '支援英文、簡體中文、繁體中文、日文、德文、西班牙文和韓文介面，單字發音為英式和美式英語。']],
    },
    'are-you-ok': {
      name: 'Are You OK', alternateName: 'Are You OK 失聯預警', title: 'Are You OK — 獨居與獨自旅行的每日平安打卡、失聯郵件預警',
      description: 'Are You OK 是一款失聯預警工具，適合獨居、一個人旅行的人。設定緊急聯絡人信箱和逾時時間，每天點一下確認平安；若未在設定時間內打卡，App 會向聯絡人寄送預先寫好的電子郵件。不定位、不監聽、不上傳你的生活。',
      features: ['一鍵平安打卡', '可選逾時時間', '打卡提醒', '緊急聯絡人信箱設定', '自訂逾時通知郵件', '不定位、不監聽'],
      questions: [['Are You OK 是什麼 App？', 'Are You OK 是幫助獨居使用者與親友保持聯繫的失聯預警工具。填寫緊急聯絡人信箱後，點擊打卡即可重新開始倒數。'], ['沒有按時打卡會怎樣？', '超過設定時間仍未打卡，聯絡人會收到預先寫好的電子郵件。可選擇 12、16、24、48 或 72 小時，並開啟提醒。'], ['Are You OK 會取得我的位置嗎？', '不會。Are You OK 不定位、不監聽，也不上傳你的日常生活，只有在逾時未打卡時才會寄送通知郵件。']],
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
