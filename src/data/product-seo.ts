// Keep search descriptions and structured data aligned with the visible product copy.
export const productSeo = {
  invsi: {
    name: 'invsi', alternateName: 'invsi 私密空间',
    title: 'invsi — iPhone、iPad 私密相册、文件保护与应用锁',
    description: 'invsi 是适用于 iPhone 和 iPad 的隐私保护应用，可通过专属密码管理私密照片、视频和文件，支持应用锁，以及计算器和专注计时器入口。',
    category: 'UtilitiesApplication', os: 'iOS, iPadOS', image: '/images/invis.webp', store: '6444667120',
    features: ['私密照片、视频和文件管理', '专属密码入口', '应用锁', '计算器入口', '专注计时器入口'],
    questions: [
      ['invsi 是什么软件？', 'invsi 是面向 iPhone 和 iPad 的隐私保护工具，将私密照片、视频和文件集中放入专属密码保护的空间。'],
      ['invsi 有哪些入口和保护功能？', 'invsi 提供计算器和专注计时器入口，并支持应用锁，方便管理个人内容和应用访问。'],
    ],
  },
  'pixie-wallpaper': {
    name: '精灵壁纸 Pixie', alternateName: 'Pixie Wallpaper',
    title: '精灵壁纸 Pixie — iPhone、iPad 高清壁纸与每日精选',
    description: '精灵壁纸 Pixie 是 iPhone 和 iPad 壁纸应用，提供每日更新的精选高清壁纸，涵盖风景、极简、人物和趣味插画，支持全屏预览、保存到相册及 iCloud 收藏同步。',
    category: 'LifestyleApplication', os: 'iOS, iPadOS', image: '/images/pixie.webp', store: '6446266063',
    features: ['每日精选高清壁纸', '风景、极简、人物与插画分类', '全屏壁纸预览', '保存壁纸到相册', 'iCloud 收藏同步'],
    questions: [
      ['精灵壁纸 Pixie 提供哪些壁纸？', '精灵壁纸提供风景、极简、抽象艺术、人物及趣味插画等风格，适用于 iPhone 和 iPad，并持续更新每日精选。'],
      ['如何预览和保存喜欢的壁纸？', '在精灵壁纸 App 中可以全屏预览，收藏喜欢的图片或保存到相册。收藏支持通过 iCloud 同步。网页画廊也可点击图片预览。'],
    ],
  },
  'pineapple-english': {
    name: '菠萝英语', alternateName: 'Pineapple English',
    title: '菠萝英语 Pineapple English — 3–10 岁儿童英语启蒙与单词游戏',
    description: '菠萝英语是面向 3–10 岁儿童的 iPhone、iPad 英语启蒙应用，提供 3000+ 配图单词、50+ 主题、英美发音、听音选图、单词连连看及间隔复习。',
    category: 'EducationalApplication', os: 'iOS, iPadOS', image: '/images/pinaappleenglish.webp', store: '6451401303',
    features: ['3000+ 配图英语单词', '50+ 生活与兴趣主题', '英式与美式发音', '听音选图', '单词连连看', '间隔复习'],
    questions: [
      ['菠萝英语适合多大的孩子？', '菠萝英语面向 3–10 岁儿童，用插画单词卡、发音和小游戏帮助孩子开始认识英语，支持 iPhone 和 iPad。'],
      ['菠萝英语如何学习和复习单词？', '孩子可以看配图、听英式或美式发音，再通过听音选图和单词连连看练习。词汇按生活主题、CEFR 和剑桥词书组织，并提供间隔复习。'],
    ],
  },
  'are-you-ok': {
    name: 'Are You OK', alternateName: 'Are You OK 独居打卡',
    title: 'Are You OK — 独居日常打卡与紧急联系人邮件通知',
    description: 'Are You OK 是独居日常打卡应用。设置紧急联系人邮箱和超时时间，点击确认平安；如果在设定时间内未打卡，应用会向联系人发送预先写好的邮件。',
    category: 'LifestyleApplication', os: 'iOS', image: '/images/areyouok.jpg', store: '6757640166',
    features: ['日常平安打卡', '可选超时时间', '打卡提醒', '紧急联系人邮箱设置', '自定义超时通知邮件'],
    questions: [
      ['Are You OK 是什么应用？', 'Are You OK 是帮助独居用户与亲友保持联系的日常打卡工具。填写紧急联系人邮箱后，点击打卡即可重新开始倒计时。'],
      ['没有按时打卡会怎样？', '超过设定时间仍未打卡时，联系人会收到你预先写好的邮件。可选择 12、16、24、48 或 72 小时的超时时间，并开启打卡提醒。'],
    ],
  },
} as const;
export type ProductSlug = keyof typeof productSeo;
