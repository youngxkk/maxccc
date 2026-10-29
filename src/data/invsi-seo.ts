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
    alternateName: 'invsi 私密空間',
    title: 'invsi — iPhone、iPad 私密相簿、檔案保護與應用程式鎖',
    description: 'invsi 是適用於 iPhone 和 iPad 的隱私保護應用程式，可透過專屬密碼管理私密照片、影片和檔案，支援應用程式鎖，以及計算機和專注計時器入口。',
    features: ['私密照片、影片與檔案管理', '專屬密碼入口', '應用程式鎖', '計算機入口', '專注計時器入口'],
    heading: '了解 invsi', faqHeading: '關於 invsi 的常見問題',
    questions: [
      ['invsi 是什麼應用程式？', 'invsi 是面向 iPhone 和 iPad 的隱私保護工具，將私密照片、影片和檔案集中放入專屬密碼保護的空間。'],
      ['invsi 有哪些入口？', 'invsi 提供計算機和專注計時器入口，使用專屬密碼打開自己的私密空間。'],
      ['invsi 可以存放哪些內容？', '可以管理私密照片、影片和檔案。內容集中放在透過專屬密碼打開的私密空間裡。'],
      ['應用程式鎖需要什麼權限？', '應用程式鎖使用 iOS「螢幕使用時間」權限。你可以選擇需要鎖定的應用程式。'],
      ['在哪裡下載 invsi？', '透過本頁的 App Store 下載按鈕前往 invsi 官方商店頁面，查看目前價格、系統需求和應用程式詳情。'],
    ],
  },
  en: {
    ...productSeo.invsi,
    alternateName: 'invsi Private Space',
    title: 'invsi — Private Photo Vault, File Storage & App Lock for iPhone and iPad',
    description: 'Keep private photos, videos and files in a passcode-protected space on iPhone and iPad. invsi includes App Lock, a calculator entrance and a focus timer entrance.',
    features: ['Private photo, video and file storage', 'Personal passcode access', 'App Lock', 'Calculator entrance', 'Focus timer entrance'],
    heading: 'Meet invsi', faqHeading: 'Frequently asked questions about invsi',
    questions: [
      ['What is invsi?', 'invsi is a privacy app for iPhone and iPad. It keeps private photos, videos and files together in a space protected by your personal passcode.'],
      ['How do the calculator and focus timer entrances work?', 'invsi offers a calculator entrance and a focus timer entrance. Use your personal code to open your private space.'],
      ['What can I store in invsi?', 'You can manage private photos, videos and files in your passcode-protected space.'],
      ['What permission does App Lock require?', 'App Lock uses iOS Screen Time permission. You choose which apps to lock.'],
      ['Where can I download invsi?', 'Use the App Store button on this page to open the official invsi listing. Check that listing for current pricing, system requirements and app details.'],
    ],
  },
};
export const invsiSeoFor = (lang: Locale) => isHandwritten(lang) ? invsiSeo[lang] : trDeep(lang, invsiSeo.en);
