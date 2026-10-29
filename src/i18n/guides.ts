import { guides } from '../data/guides';
import { isHandwritten, type HandwrittenLocale, type Locale } from './site';
import { trDeep } from './translate';
const copy = {
  en: [
    ['Managing Private Photos, Videos and Files on iPhone', 'Separate everyday photos, a passcode-protected space and app access. Explore private content management and calculator access in invsi.', [
      ['Decide what you want to protect', 'Photos, videos and files often live in different places. Decide which items need a separate space and how you want to access them. invsi brings private content together behind a dedicated passcode.'],
      ['Private storage and App Lock serve different needs', 'Private storage holds photos, videos and files; App Lock manages access to apps. Consider both needs separately. The invsi product page shows these features and their interfaces.'],
      ['Choose an access screen that suits you', 'invsi offers calculator and focus timer access screens. Learn how to open and unlock your private space before organizing important content.'],
      ['Check imported content before removing originals', 'After importing, check item counts, open photos, play videos and view files. Confirm everything works before deciding what to do with the originals, and keep a suitable backup of important content.'],
    ]],
    ['Choosing iPhone and iPad Wallpapers: Style, Composition and Preview', 'Choose wallpapers by category, screen size and composition, then preview, save and favorite them with Pixie Wallpaper.', [
      ['Start with the images you enjoy', 'Explore landscapes, plants, oceans and mountains, or try Chinese art, anime, watercolors and oil paintings. Minimalist, solid-color, gradient and texture categories can keep a home screen calm. Pixie offers dozens of categories; the web gallery shows a curated selection.'],
      ['Leave space for the clock and widgets', 'Check whether the subject competes with the clock, notifications or widgets. Portraits, buildings and text wallpapers especially benefit from a preview. Skies and simple backgrounds can leave clearer reading areas; check the final result on your own device.'],
      ['Consider portrait and landscape on iPad', 'The same image may crop differently on iPhone and iPad. Watch for subjects near the edges, especially on larger screens. Pixie supports both devices; check the image in the orientations you use.'],
      ['Preview, favorite, then save', 'Click a web gallery image for a larger preview, then explore more in Pixie. The app offers full-screen previews, favorites and saving to Photos, with iCloud support for favorites. Build a collection so your next wallpaper is easy to find.'],
    ]],
    ['English for Ages 3–10: Pictures, Pronunciation and Word Games', 'Build short sessions with pictures, listening and games. Explore illustrated vocabulary, pronunciation, topics and spaced review in Pineapple English.', [
      ['Begin with familiar topics', 'Animals, fruit, colors and everyday objects connect words with real experience. Let children choose a topic they like, learn a few illustrated words and find matching objects around them. Pineapple English offers 3,000+ illustrated words and 50+ topics for ages 3–10.'],
      ['Connect the picture with the sound', 'Look at the picture, then listen to the word, leaving time to notice and repeat it. Pineapple English offers British and American pronunciation. Choose the accent that fits your plans; the aim is to connect images, sounds and meaning gradually.'],
      ['Revisit words through games', 'Listening games practice recognition, and matching games bring familiar cards back. Observe which words cause hesitation, then return to pictures and pronunciation instead of focusing only on completing a game.'],
      ['Review on different days', 'A correct answer today does not guarantee recall later. Revisit words on another day. Pineapple English offers spaced review and vocabulary organized by topics, CEFR levels and Cambridge word lists. Adjust the pace to each child’s interest and comfort.'],
    ]],
    ['Setting Up a Daily Check-In: Contacts, Timing and Email', 'Set up Are You OK with a check-in window, contact email and a message prepared in advance.', [
      ['Agree on a communication plan', 'A daily check-in gives family and friends an agreed signal. Ask your contact first, confirm their email and discuss how they should reach you after a notification. Are You OK sends an email when a check-in is overdue.'],
      ['Choose timing around your routine', 'Choose a 12, 16, 24, 48 or 72-hour window. Checking in restarts the countdown. Consider sleep, work and travel, and enable reminders to help you remember.'],
      ['Include enough information in the email', 'Prepare the notification yourself. Include your name, a contact number and the steps you want your contact to take, sharing only information you are comfortable with. Send a test email and confirm it arrived before relying on the setup.'],
      ['Use it alongside everyday contact', 'Are You OK responds to a missed check-in; it does not determine whether an accident has occurred. Use it as a supplement to staying in touch. Review settings and the email whenever your routine or contact details change.'],
    ]],
  ],
  'zh-TW': [
    ['iPhone 私密照片、影片和檔案，怎樣分開管理？', '區分日常相簿、專屬密碼空間和 App 存取，了解 invsi 的私密內容管理與計算機入口。', [
      ['先區分要保護的內容', '照片、影片和檔案往往分散在不同位置。整理前先列出需要單獨保存的內容，區分日常瀏覽和私密查看。invsi 將這些內容放在專屬密碼入口後的空間，適合希望集中管理私人資料的人。'],
      ['私密空間與 App 鎖分別解決什麼問題？', '私密空間用於收納照片、影片和檔案；App 鎖用於管理 App 存取。選擇工具時應分別確認需求，而不要把鎖住 App 等同於整理好其中的資料。產品頁展示了這兩項功能及其介面。'],
      ['選擇適合自己的存取入口', 'invsi 提供計算機和專注計時器入口。私密空間需要專屬密碼才能進入。下載後請先熟悉入口與解鎖方式，再整理重要內容。'],
      ['整理前保留可核對的原件', '匯入重要內容後，先檢查數量，打開照片、播放影片、查看檔案，確認能正常存取，再決定如何處理原件。請為重要資料保留適合自己的備份。'],
    ]],
    ['iPhone 與 iPad 桌布怎麼選？從分類、構圖到預覽', '依照螢幕尺寸、畫面構圖與個人風格挑選桌布，透過精靈壁紙 Pixie 預覽、收藏與儲存。', [
      ['先從喜歡的畫面開始', '喜歡真實景色，可以從風景、植物、海洋和雪山開始；喜歡插畫，可以看看國風、動漫、水彩與油畫；希望桌面清爽，可以選極簡、純色、漸層和紋理。App 提供數十種分類，網頁圖庫展示部分精選圖片。'],
      ['鎖定畫面要為時間和小工具留空間', '注意主體是否與時間、通知或小工具搶位置。人物、建築和文字桌布尤其適合先預覽。光影、天空或純色背景通常較容易保留清楚的閱讀區域，最終效果仍應以自己的裝置為準。'],
      ['iPad 要考慮橫向與直向構圖', '相同圖片在 iPhone 與 iPad 上可能有不同裁切。大螢幕尤其要注意靠近邊緣的主體是否被裁掉。精靈壁紙支援兩種裝置，可在實際螢幕檢查不同方向的效果。'],
      ['預覽、收藏，再儲存', '先點擊網頁圖庫查看大圖，再到 App 探索更多。App 支援全螢幕預覽、收藏和儲存至照片，收藏可透過 iCloud 同步。累積喜歡的圖片，換桌布時就不必重新尋找。'],
    ]],
    ['3–10 歲兒童英語啟蒙：用圖片、發音和遊戲認識單字', '安排簡短的看圖、聽音與遊戲練習，了解鳳梨英語的圖解單字、英美發音、主題詞書和間隔複習。', [
      ['從孩子熟悉的主題開始', '動物、水果、顏色和身邊物品容易與日常經驗連結。先讓孩子選感興趣的主題，認識少量圖解單字，再在生活中找對應物品。鳳梨英語提供 3000+ 圖解單字和 50+ 主題。'],
      ['把看圖與聽音連起來', '先看圖片，再聽單字，留出觀察和模仿的時間。鳳梨英語提供英式和美式發音，家長可依學習安排選擇口音，讓畫面、聲音與含義逐漸建立連結。'],
      ['用小遊戲回顧接觸過的單字', '聽音選圖可以練習辨認，單字配對讓熟悉的卡片再次出現。家長可以觀察孩子在哪些單字上猶豫，再回到圖片與發音，而不只看遊戲是否過關。'],
      ['讓複習發生在不同日子', '一次答對不代表以後都能記住，可以隔天再回顧。鳳梨英語提供間隔複習，並依主題、CEFR 和劍橋詞書組織詞彙。依孩子的興趣和接受程度調整節奏。'],
    ]],
    ['獨居日常打卡怎麼設定？聯絡人、時間與通知內容', '了解 Are You OK 的平安打卡流程，安排逾時時間、緊急聯絡人信箱和預先寫好的通知郵件。', [
      ['先與聯絡人約定如何溝通', '日常打卡是給親友一個約定好的聯繫訊號。設定前先徵得聯絡人同意，確認信箱，說明收到通知後希望對方如何聯繫你。Are You OK 透過信箱寄送逾時通知。'],
      ['依作息選擇時間', '支援 12、16、24、48 或 72 小時，點擊打卡後重新倒數。依睡眠、工作和出行安排選擇，並開啟提醒，避免忙碌忘記打卡。'],
      ['讓郵件包含足夠資訊', '通知由你預先填寫，可寫清姓名、電話和希望對方採取的聯繫步驟，確認願意分享這些資訊。正式使用前可寄送測試郵件，與對方核對是否收到。'],
      ['把它作為日常聯繫的一部分', '觸發依據是有沒有按時打卡，不會判斷是否發生意外。適合作為與親友日常聯繫的補充。聯絡方式或作息改變後，應重新檢查設定與郵件內容。'],
    ]],
  ],
} as const;
export function localizedGuides(lang: Locale) {
  return isHandwritten(lang) ? handwrittenGuides(lang) : trDeep(lang, handwrittenGuides('en'));
}
function handwrittenGuides(lang: HandwrittenLocale) {
  if (lang === 'zh-CN') return guides;
  return guides.map((guide, index) => ({ ...guide, title: copy[lang][index][0], description: copy[lang][index][1], sections: copy[lang][index][2] }));
}
