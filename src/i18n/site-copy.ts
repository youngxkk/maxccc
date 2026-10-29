import type { HandwrittenLocale } from './site';
// Chinese source | Traditional Chinese | English. Language names stay in their own script.
const rows = `
invisilab - Mac、iPhone 与 iPad 独立应用|invisilab — Mac、iPhone 與 iPad 獨立 App|invisilab — Independent Apps for Mac, iPhone and iPad
产品与使用指南|產品與使用指南|Products and guides
全部应用|全部 App|All apps
更多应用|更多 App|More apps
更多工具|更多工具|More tools
使用指南|使用指南|Guides
所有应用|所有 App|All apps
所有指南|所有指南|All guides
更多指南|更多指南|More guides
面包屑|導覽路徑|Breadcrumbs
相关使用指南|相關使用指南|Related guides
常见问题|常見問題|Frequently asked questions
了解功能 →|了解功能 →|Explore features →
查看功能和界面 →|查看功能和介面 →|See features and screenshots →
阅读指南 →|閱讀指南 →|Read guide →
抱歉，页面不存在或已被移除。|抱歉，頁面不存在或已移除。|Sorry, this page could not be found or has been removed.
invisilab 应用目录 — Mac、iPhone 与 iPad 软件|invisilab App 目錄 — Mac、iPhone 與 iPad 軟體|invisilab App Directory — Software for Mac, iPhone and iPad
/ 应用目录|/ App 目錄|/ Apps
为 Mac、iPhone 和 iPad 打造的应用|為 Mac、iPhone 和 iPad 打造的 App|Apps made for Mac, iPhone and iPad
从效率工具到日常生活，找到适合自己的应用。每个产品页都提供功能介绍和 App Store 下载入口。|從效率工具到日常生活，找到適合自己的 App。每個產品頁都提供功能介紹和 App Store 下載入口。|Find an app for work or everyday life. Each product page includes features and an official App Store download link.
探索 invisilab 的 NexPaste 剪贴板、Transnap 翻译、invsi 私密空间、精灵壁纸、菠萝英语和 Are You OK，查看功能、适用设备与官方下载链接。|探索 invisilab 的 NexPaste 剪貼簿、Transnap 翻譯、invsi 私密空間、精靈壁紙、鳳梨英語和 Are You OK，查看功能、支援裝置與官方下載連結。|Explore NexPaste, Transnap, invsi, Pixie Wallpaper, Pineapple English and Are You OK. Find features, supported devices and official downloads.
应用使用指南 — 私密相册、壁纸、英语启蒙与独居打卡|App 使用指南 — 私密相簿、桌布、英語啟蒙與獨居打卡|App Guides — Private Photos, Wallpapers, English and Daily Check-Ins
/ 使用指南|/ 使用指南|/ Guides
从日常需要，找到合适的应用。|從日常需要，找到合適的 App。|Find an app for your everyday needs.
这里介绍选择方法、使用场景和产品功能，帮助你在下载前了解应用是否适合自己。|這裡介紹選擇方法、使用情境和產品功能，幫助你在下載前了解 App 是否適合自己。|Explore practical use cases and features to decide whether an app is right for you before downloading.
从真实使用场景出发，了解 iPhone 私密内容管理、iPad 壁纸选择、儿童英语单词练习和独居日常打卡，找到对应的 invisilab 产品。|從實際使用情境出發，了解 iPhone 私密內容管理、iPad 桌布選擇、兒童英語單字練習和獨居日常打卡，找到對應的 invisilab 產品。|Practical guides to private content on iPhone, iPad wallpapers, English vocabulary for children and daily check-ins, with relevant invisilab apps.
数十种壁纸分类，找到你的风格|數十種桌布分類，找到你的風格|Dozens of wallpaper categories to find your style
从主题、色彩到画面氛围，探索精灵壁纸 App 中丰富的壁纸分类。|從主題、色彩到畫面氛圍，探索精靈壁紙 App 中豐富的桌布分類。|Explore Pixie’s wallpaper categories by theme, color and mood.
invisilab 产品资料|invisilab 產品資料|invisilab product information
隐私政策|隱私權政策|Privacy Policy
使用条款|使用條款|Terms of Use
用户协议|使用者協議|User Agreement
invisilab 隐私政策：网站、NexPaste、Transnap、invsi、菠萝英语、精灵壁纸、Are You OK 等 App 如何处理你的信息。|invisilab 隱私權政策：網站、NexPaste、Transnap、invsi、鳳梨英語、精靈壁紙、Are You OK 等 App 如何處理你的資訊。|How the invisilab website and apps including NexPaste, Transnap, invsi, Pineapple English, Pixie and Are You OK handle your information.
invisilab 使用条款：服务范围、自动续订订阅、重要免责（invsi 密码、Are You OK 提醒）与责任限制。|invisilab 使用條款：服務範圍、自動續訂訂閱、重要免責聲明與責任限制。|invisilab terms of use: services, auto-renewing subscriptions, important limitations and liability.
invisilab 用户协议：适用范围、App 内购买与订阅、知识产权、使用规范与各 App 的特别说明。|invisilab 使用者協議：適用範圍、App 內購買與訂閱、智慧財產權、使用規範與各 App 特別說明。|invisilab user agreement: scope, in-app purchases, subscriptions, intellectual property, acceptable use and app-specific information.
翻译，不打断你的状态。复制一句话，它已经在这里了。|翻譯，不打斷你的狀態。複製一句話，它已經在這裡了。|Translation that keeps you in the flow. Copy a sentence and find it here.
+ 添加颜色|+ 新增顏色|+ Add color
点击或拖拽 PDF 到这里|點擊或拖放 PDF 至此|Click or drop a PDF here
初始化引擎...|正在初始化引擎…|Initializing engine…
解析后的内容将显示在这里...|擷取後的內容將顯示於此…|Extracted text will appear here…
支持 PNG、JPG、WEBP。首次处理会下载 AI 模型，时间会稍长一些。|支援 PNG、JPG、WEBP。首次處理會下載 AI 模型，需要稍候。|Supports PNG, JPG and WEBP. The first use downloads an AI model and may take longer.
感谢每一份善意，|感謝每一份善意，|Grateful for every act of kindness,
也珍藏每一句温暖的祝福。|也珍藏每一句溫暖的祝福。|and every warm wish.
特别感谢|特別感謝|Special thanks
图片贡献|圖片貢獻|Artwork contribution
个单词的精美图片|個單字的精美圖片|beautiful word illustrations
超级感谢热心网友 Lusha 提供这些精美图片，为英语启蒙增添了更多美好与想象。🙌💖|特別感謝熱心的 Lusha 提供這些精美圖片，為英語啟蒙增添更多美好與想像。🙌💖|A heartfelt thank-you to Lusha for these beautiful illustrations, bringing more joy and imagination to early English learning. 🙌💖
暖心祝福|暖心祝福|Warm wishes
愿每一天，|願每一天，|May every day
都闪闪发光。|都閃閃發光。|shine brightly.
祝 Lusha 和 Lusha 的宝贝女儿每天都开开心心、快快乐乐，闪闪发光！🌟👨‍👩‍👧|祝 Lusha 和她的寶貝女兒每天都開心、快樂，閃閃發光！🌟👨‍👩‍👧|Wishing Lusha and her lovely daughter happiness, joy and a little sparkle every day! 🌟👨‍👩‍👧
写给 Melody|寫給 Melody|For Melody
一份四岁的礼物。|一份四歲的禮物。|A gift for your fourth birthday.
亲爱的 Melody 公主👸：|親愛的 Melody 公主👸：|Dear Princess Melody 👸,
这是送给你四岁的礼物🎁——一份小小的英语启蒙。你像一段美妙的旋律，轻轻流进我的生活，让每个角落都明亮且有声。你的笑容是最动听的和弦，你的好奇心是最美的节拍🎵。|這是送給你四歲的禮物🎁——一份小小的英語啟蒙。你像美妙的旋律，輕輕流進我的生活，讓每個角落明亮且有聲。你的笑容是最動聽的和弦，好奇心是最美的節拍🎵。|This little introduction to English is a gift for your fourth birthday 🎁. Like a beautiful melody, you bring light and music into my life. Your smile is the sweetest chord, and your curiosity the loveliest rhythm 🎵.
感谢你让我的日子如此丰盛。愿你在未来的每一步，都幸福、坚韧、快乐地成长🩷。|感謝你讓我的日子如此豐盛。願你未來的每一步，都幸福、堅韌、快樂地成長🩷。|Thank you for making my days so full. May every step ahead bring happiness, resilience and joyful growth 🩷.
爱你的 Lusha 妈咪|愛你的 Lusha 媽咪|With love, Mommy Lusha
感谢每一位给予 DoCool 帮助、支持与善意的朋友。|感謝每一位給予 DoCool 幫助、支持與善意的朋友。|Thank you to everyone who has offered DoCool help, support and kindness.
致谢页面照片|致謝頁面照片|Photograph on the acknowledgments page
NexPaste Mac 真实界面：剪贴板历史、内容分类与搜索|NexPaste Mac 實際介面：剪貼簿歷史、內容分類與搜尋|NexPaste on Mac: clipboard history, content categories and search
支持的剪贴板内容类型|支援的剪貼簿內容類型|Supported clipboard content types
NexPaste iPhone 剪贴板历史|NexPaste iPhone 剪貼簿歷史|NexPaste clipboard history on iPhone
NexPaste 桌面小组件|NexPaste 桌面小工具|NexPaste home screen widget
NexPaste iPhone 收藏夹|NexPaste iPhone 收藏夾|NexPaste favorites on iPhone
NexPaste 在 Mac、iPhone 和 iPad 间通过 iCloud 同步|NexPaste 在 Mac、iPhone 和 iPad 間透過 iCloud 同步|NexPaste iCloud sync across Mac, iPhone and iPad
NexPaste iPad 卡片布局|NexPaste iPad 卡片版面|NexPaste card layout on iPad
NexPaste iPhone Duo 列表与内容预览布局|NexPaste iPhone Duo 列表與內容預覽版面|NexPaste Duo list and content preview on iPhone
精选壁纸预览|精選桌布預覽|Curated wallpaper previews
壁纸风格|桌布風格|Wallpaper styles
Pixie 功能|Pixie 功能|Pixie features
精灵壁纸每日精选的真实 iPhone 界面|精靈壁紙每日精選的實際 iPhone 介面|Pixie daily selections on iPhone
精灵壁纸收藏与 iCloud 同步的真实界面|精靈壁紙收藏與 iCloud 同步的實際介面|Pixie favorites and iCloud sync
精灵壁纸 iPad 浏览界面|精靈壁紙 iPad 瀏覽介面|Browsing Pixie on iPad
精灵壁纸 iPhone 浏览界面|精靈壁紙 iPhone 瀏覽介面|Browsing Pixie on iPhone
Dashboard - DoCool|帳號管理 — DoCool|Account — DoCool
Manage your account, subscriptions and settings.|管理帳號、訂閱與設定。|Manage your account, subscriptions and settings.
Loading your account...|正在載入帳號…|Loading your account…
Welcome home|歡迎回來|Welcome back
Manage your account and preferences.|管理帳號與偏好設定。|Manage your account and preferences.
Guest|訪客|Guest
Sign Out|登出|Sign Out
Subscription|訂閱|Subscription
`;
export const extraCopy: Record<string, Record<HandwrittenLocale, string>> = Object.fromEntries(rows.trim().split('\n').map(row => {
  const [source, traditional, english] = row.split('|');
  return [source, { 'zh-CN': source, 'zh-TW': traditional, en: english }];
}));
const visualRows = `
大画家|大畫家|Great artists
可爱的你|可愛的你|Lovely you
女朋友|女朋友|Girlfriend
情侣最爱|情侶最愛|Couples’ favorites
夏日清凉|夏日清涼|Summer refresh
仗剑走天涯|仗劍走天涯|Wandering swords
光影|光影|Light and shadow
编辑推荐|編輯推薦|Editor’s picks
缤纷多彩|繽紛多彩|Colorful
速度与激情|速度與激情|Speed and excitement
减掉这该死的体重|減掉這惱人的體重|Fitness motivation
植物|植物|Plants
黑色|黑色|Black
横屏|橫向螢幕|Landscape orientation
建筑|建築|Architecture
街道|街道|Streets
国风|國風|Chinese art
渐变色|漸層色|Gradients
绿色|綠色|Green
极简|極簡|Minimalist
深邃太空|深邃太空|Deep space
蓝色|藍色|Blue
简单纯色|簡單純色|Solid colors
我爱这个运动|我愛這項運動|Sports
动漫|動漫|Anime
粉粉嫩嫩|粉嫩色系|Soft pink
抽象|抽象|Abstract
纹理|紋理|Textures
男朋友|男朋友|Boyfriend
进入丛林|進入叢林|Into the jungle
人文|人文|Culture
微信聊天背景|微信聊天背景|WeChat backgrounds
灵动岛|動態島|Dynamic Island
风景|風景|Landscapes
大男朋友|大男朋友|Boyfriend portraits
小女朋友|小女朋友|Girlfriend portraits
简单|簡單|Simple
朋友圈封面|朋友圈封面|Moments covers
二次元|二次元|Anime worlds
动物|動物|Animals
卡通|卡通|Cartoons
可爱|可愛|Cute
夜景|夜景|Night scenes
天空|天空|Skies
女孩|女孩|Girls
宁静|寧靜|Calm
宇宙|宇宙|Universe
情侣|情侶|Couples
插画|插畫|Illustration
摄影|攝影|Photography
日出|日出|Sunrise
日落|日落|Sunset
星空|星空|Starry skies
梦幻|夢幻|Dreamlike
水彩|水彩|Watercolor
汽车|汽車|Cars
油画|油畫|Oil painting
海洋|海洋|Oceans
海滩|海灘|Beaches
游戏|遊戲|Games
猫|貓|Cats
美食|美食|Food
花朵|花朵|Flowers
雪山|雪山|Snowy mountains
鸟|鳥|Birds
精灵壁纸 App Icon|精靈壁紙 App 圖示|Pixie Wallpaper app icon
菠萝英语 App Icon|鳳梨英語 App 圖示|Pineapple English app icon
了解 精灵壁纸|了解 精靈壁紙|About Pixie Wallpaper
了解 菠萝英语|了解 鳳梨英語|About Pineapple English
明黄色上的咖啡杯|亮黃色上的咖啡杯|Coffee cup on bright yellow
黑白条纹光影|黑白條紋光影|Black and white striped shadows
碧海与彩色小舟|碧海與彩色小舟|Colorful boats on a turquoise sea
蓝色与杏色抽象曲面|藍色與杏色抽象曲面|Abstract blue and apricot curves
蓝底黄色小鸭插画|藍底黃色小鴨插畫|Yellow duck illustration on blue
红色树林与蓝色湖泊|紅色樹林與藍色湖泊|Red forest and blue lake
一盏灯的光影|一盞燈的光影|Light and shadow from a lamp
碧色水面上的小舟|碧色水面上的小舟|Boat on turquoise water
紫色与黄色的律动|紫色與黃色的律動|Purple and yellow rhythm
蓝色夜空下的灯塔|藍色夜空下的燈塔|Lighthouse under a blue night sky
黑白剪影|黑白剪影|Black and white silhouette
粉色天空下的城堡|粉色天空下的城堡|Castle under a pink sky
粉色背景人物|粉色背景人物|Portrait on a pink background
紫色趣味猴子插画|紫色趣味猴子插畫|Playful purple monkey illustration
可爱的情侣插画|可愛的情侶插畫|Cute couple illustration
清新蓝色趣味插画|清新藍色趣味插畫|Playful illustration in fresh blue
渐变色 Hello|漸層色 Hello|Hello in gradient colors
远山与城市|遠山與城市|Distant mountains and city
蓝色云海与群山|藍色雲海與群山|Blue clouds and mountains
小小宇航员|小小太空人|Little astronaut
蓝色夜幕下的霓虹|藍色夜幕下的霓虹|Neon under a blue night sky
弯月与鹿的剪影|彎月與鹿的剪影|Crescent moon and deer silhouette
屋檐下的风铃|屋簷下的風鈴|Wind chime under the eaves
海上落日|海上落日|Sunset over the sea
蓝天与篮球架|藍天與籃球架|Basketball hoop against a blue sky
月相|月相|Moon phases
绿色数字光影|綠色數字光影|Green digital light and shadow
月下剪影|月下剪影|Silhouette in moonlight
蓝色时刻的建筑|藍色時刻的建築|Architecture at blue hour
穿越绿色山林的道路|穿越綠色山林的道路|Road through green mountains
蓝色海岸与黄色灯塔|藍色海岸與黃色燈塔|Blue coast and yellow lighthouse
黄色星空与白鹿|黃色星空與白鹿|Yellow starry sky and white deer
森林中的弯曲公路|森林中的彎曲公路|Winding road in a forest
云朵下的小小世界|雲朵下的小小世界|Little world beneath the clouds
白色织物与时钟|白色織物與時鐘|White fabric and clock
青绿色的极简线条|青綠色的極簡線條|Minimal teal lines
一朵白云与山崖|一朵白雲與山崖|White cloud and cliff
车旁的蓝衣女孩|車旁的藍衣女孩|Girl in blue beside a car
车内的夏日女孩|車內的夏日女孩|Summer portrait inside a car
并肩漫步的情侣插画|並肩漫步的情侶插畫|Illustration of a couple walking together
旅行中的情侣插画|旅行中的情侶插畫|Illustration of a traveling couple
绿色背景情侣插画|綠色背景情侶插畫|Couple illustration on green
`;
for (const row of visualRows.trim().split('\n')) {
  const [source, traditional, english] = row.split('|');
  extraCopy[source] = { 'zh-CN': source, 'zh-TW': traditional, en: english };
}
const additional: [string, string, string, string][] = [
  ['invisilab 为 Mac、iPhone 和 iPad 打造无广告应用：NexPaste 剪贴板、Transnap 翻译、invsi 私密空间、精灵壁纸、菠萝英语和 Are You OK。', 'invisilab 為 Mac、iPhone 和 iPad 打造無廣告 App：NexPaste 剪貼簿、Transnap 翻譯、invsi 私密空間、精靈壁紙、鳳梨英語和 Are You OK。', 'invisilab makes ad-free apps for Mac, iPhone and iPad: NexPaste clipboard manager, Transnap translator, invsi private vault, Pixie Wallpaper, Pineapple English and Are You OK.', ''],
  ['更多应用', '更多 App', 'More apps', ''],
  ['Change Language', '切換語言', 'Change language', '切换语言'],
  ['Classic Minesweeper', '經典踩地雷', 'Classic Minesweeper', '经典扫雷'],
  ['Childhood memories, retro revival', '重溫童年回憶的經典踩地雷遊戲。', 'Rediscover a classic Minesweeper experience.', '重温童年回忆的经典扫雷游戏。'],
  ['Strawberry Diary - Period Tracking', '草莓日記 — 經期記錄', 'Strawberry Diary — Period Tracking', '草莓日记 — 经期记录'],
  ['Period tracking, caring for women.', '簡單記錄經期，關心自己的身體。', 'Simple period tracking to stay in touch with your body.', '简单记录经期，关心自己的身体。'],
  ['Billing', '帳單', 'Billing', '账单'],
  ['Free Plan', '免費方案', 'Free Plan', '免费方案'],
  ['Manage Subscription ›', '管理訂閱 ›', 'Manage Subscription ›', '管理订阅 ›'],
  ['View History ›', '查看紀錄 ›', 'View History ›', '查看记录 ›'],
  ['Security', '安全性', 'Security', '安全'],
  ['Settings ›', '設定 ›', 'Settings ›', '设置 ›'],
  ['Access all premium tools and unlimited processing. Enjoy priority support and advanced features.', '使用進階工具與不限次數處理，享有優先支援及進階功能。', 'Access all premium tools and unlimited processing. Enjoy priority support and advanced features.', '使用高级工具与不限次数处理，享有优先支持及高级功能。'],
  ['View your history and update payment methods.', '查看紀錄並更新付款方式。', 'View your history and update payment methods.', '查看记录并更新付款方式。'],
  ['Manage your account security and methods.', '管理帳號安全與驗證方式。', 'Manage your account security and methods.', '管理账户安全与验证方式。'],
];
for (const [source, traditional, english, simplified] of additional) extraCopy[source] = { 'zh-CN': simplified || source, 'zh-TW': traditional, en: english };
for (const [source, simplified] of Object.entries({
  'Dashboard - DoCool': '账户管理 — DoCool', 'Manage your account, subscriptions and settings.': '管理账户、订阅与设置。',
  'Loading your account...': '正在加载账户…', 'Welcome home': '欢迎回来', 'Manage your account and preferences.': '管理账户与偏好设置。',
  Guest: '访客', 'Sign Out': '退出登录', Subscription: '订阅',
})) extraCopy[source]['zh-CN'] = simplified;
extraCopy['invisilab 应用目录'] = { 'zh-CN': 'invisilab 应用目录', 'zh-TW': 'invisilab App 目錄', en: 'invisilab App Directory' };
