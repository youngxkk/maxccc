export type AppEntry = {
  name: string;
  slug: string;
  href: string;
  image: string;
  imageAlt: string;
  titleKey?: string;
  descriptionKey: string;
};

export const apps: AppEntry[] = [
  {
    name: "NexPaste",
    slug: "nexpaste",
    href: "https://apps.apple.com/app/id6761368515",
    image: "/images/nexpaste-icon.png",
    imageAlt: "NexPaste App Icon",
    titleKey: "np_title",
    descriptionKey: "np_desc"
  },
  {
    name: "invsi",
    slug: "invsi",
    href: "https://apps.apple.com/app/id6444667120",
    image: "/images/invis.webp",
    imageAlt: "invsi App Icon",
    descriptionKey: "app1_desc"
  },
  {
    name: "Are You OK",
    slug: "are-you-ok",
    href: "https://apps.apple.com/app/id6757640166",
    image: "/images/areyouok.jpg",
    imageAlt: "Are You OK App Icon",
    descriptionKey: "app2_desc"
  },
  {
    name: "菠萝英语",
    slug: "pineapple-english",
    href: "https://apps.apple.com/app/id6451401303",
    image: "/images/pinaappleenglish.webp",
    imageAlt: "菠萝英语 App Icon",
    titleKey: "app3_title",
    descriptionKey: "app3_desc"
  },
  {
    name: "精灵壁纸",
    slug: "pixie-wallpaper",
    href: "https://apps.apple.com/app/id6446266063",
    image: "/images/pixie.webp",
    imageAlt: "精灵壁纸 App Icon",
    titleKey: "app4_title",
    descriptionKey: "app4_desc"
  },
  {
    name: "经典扫雷",
    slug: "classic-minesweeper",
    href: "https://apps.apple.com/app/id6742346503",
    image: "/images/scanboom.webp",
    imageAlt: "经典扫雷 App Icon",
    titleKey: "app5_title",
    descriptionKey: "app5_desc"
  },
  {
    name: "草莓日记",
    slug: "strawberry-diary",
    href: "https://apps.apple.com/app/id6748330094",
    image: "/images/strawberry.webp",
    imageAlt: "草莓日记 App Icon",
    titleKey: "app6_title",
    descriptionKey: "app6_desc"
  }
];
