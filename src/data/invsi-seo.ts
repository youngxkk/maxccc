import { productSeo } from './product-seo';
import { isHandwritten, languageLinks, type Locale } from '../i18n/site';
import { trDeep } from '../i18n/translate';

export const invsiLanguages = languageLinks('/invsi/');
export type InvsiLanguage = Locale;
export const invsiSeo = {
  'zh-CN': {
    ...productSeo.invsi,
    heading: '了解 invsi', faqHeading: '关于 invsi 的常见问题',
    questions: [
      ...productSeo.invsi.questions,
      ['invsi 可以存放哪些内容？', '可以管理私密照片、视频和文件。内容集中放在通过专属密码打开的私密空间里。'],
      ['应用锁需要什么权限？', '应用锁使用 iOS「屏幕使用时间」权限。你可以选择需要锁定的应用。'],
      ['在哪里下载 invsi？', '通过本页的 App Store 下载按钮前往 invsi 官方商店页面，查看当前价格、系统要求和应用详情。'],
    ],
  },
  'zh-TW': {
    ...productSeo.invsi,
    alternateName: 'invsi 隱私保險箱',
    title: 'invsi — iPhone、iPad 照片影片保險箱、私密檔案與應用程式鎖',
    description: 'invsi 是適用於 iPhone 和 iPad 的隱私保險箱和應用程式鎖。匯入照片、影片和檔案，輸入專屬密碼才能查看；可鎖定所選 App 並設定自動解鎖時長，也可在孩子使用手機時限制遊戲。無廣告、無通知、無需註冊，資料只保存在你的裝置上。',
    features: ['私密照片、影片與檔案管理', '專屬密碼入口', '應用程式鎖與定時自動解鎖', '孩子使用時限制遊戲和不當內容', '計算機入口', '專注計時器入口', '無廣告、無通知、無需註冊', '資料只保存在本機'],
    heading: '了解 invsi', faqHeading: '關於 invsi 的常見問題',
    questions: [
      ['invsi 是什麼應用程式？', 'invsi 是面向 iPhone 和 iPad 的隱私保險箱和應用程式鎖，將私密照片、影片和檔案集中放入專屬密碼保護的空間。手機借給別人時，哪些內容可以看由你決定。'],
      ['invsi 有哪些入口和保護功能？', 'invsi 提供計算機和專注計時器入口，並支援應用程式鎖。你可以鎖定所選 App，也可以設定時長，到時自動恢復。'],
      ['invsi 會上傳我的照片嗎？', '不會。invsi 是本機 App，沒有伺服器，所有資料只保存在你的裝置上。也因此無法找回密碼，請妥善保管，並備份重要內容。'],
      ['invsi 可以存放哪些內容？', '可以管理私密照片、影片和檔案。內容集中放在透過專屬密碼打開的私密空間裡。'],
      ['應用程式鎖需要什麼權限？', '應用程式鎖使用 iOS「螢幕使用時間」權限。你可以選擇需要鎖定的應用程式。'],
      ['在哪裡下載 invsi？', '透過本頁的 App Store 下載按鈕前往 invsi 官方商店頁面，查看目前價格、系統需求和應用程式詳情。'],
    ],
  },
  en: {
    ...productSeo.invsi,
    alternateName: 'invsi Photo & Video Vault',
    title: 'invsi — Photo & Video Vault, Private Files and App Lock for iPhone and iPad',
    description: 'invsi is a private vault and app lock for iPhone and iPad. Import photos, videos and files and view them only with your passcode. Lock selected apps, set a timer to unlock them automatically, or limit games when your child uses your phone. No ads, no notifications, no sign-up: your data stays on your device.',
    features: ['Private photo, video and file storage', 'Personal passcode access', 'App Lock with timed auto-unlock', 'Limit games and inappropriate content for kids', 'Calculator entrance', 'Focus timer entrance', 'No ads, no notifications, no sign-up', 'Data stays on your device'],
    heading: 'Meet invsi', faqHeading: 'Frequently asked questions about invsi',
    questions: [
      ['What is invsi?', 'invsi is a private vault and app lock for iPhone and iPad. It keeps private photos, videos and files together in a space protected by your personal passcode. When you lend someone your phone, you decide what they can see.'],
      ['How do the calculator and focus timer entrances work?', 'invsi offers a calculator entrance and a focus timer entrance, plus App Lock. Lock selected apps whenever you need to, or set a timer to unlock them automatically.'],
      ['Does invsi upload my photos?', 'No. invsi runs locally and has no servers, so your data stays on your device. This also means a lost passcode cannot be recovered, so keep it safe and back up anything important.'],
      ['What can I store in invsi?', 'You can manage private photos, videos and files in your passcode-protected space.'],
      ['What permission does App Lock require?', 'App Lock uses iOS Screen Time permission. You choose which apps to lock.'],
      ['Where can I download invsi?', 'Use the App Store button on this page to open the official invsi listing. Check that listing for current pricing, system requirements and app details.'],
    ],
  },
};
export const invsiSeoFor = (lang: Locale) => isHandwritten(lang) ? invsiSeo[lang] : trDeep(lang, invsiSeo.en);
