export type AppEntry = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  titleKey?: string;
  descriptionKey: string;
};

export const apps: AppEntry[] = [
  {
    name: "invsi",
    href: "https://apps.apple.com/app/id6444667120",
    image: "/images/invis.webp",
    imageAlt: "invsi App Icon",
    descriptionKey: "app1_desc"
  },
  {
    name: "Are You OK",
    href: "https://apps.apple.com/app/id6757640166",
    image: "/images/areyouok.jpg",
    imageAlt: "Are You OK App Icon",
    descriptionKey: "app2_desc"
  },
  {
    name: "菠萝英语",
    href: "https://apps.apple.com/app/id6451401303",
    image: "/images/pinaappleenglish.webp",
    imageAlt: "菠萝英语 App Icon",
    titleKey: "app3_title",
    descriptionKey: "app3_desc"
  },
  {
    name: "精灵壁纸",
    href: "https://apps.apple.com/app/id6446266063",
    image: "/images/pixie.webp",
    imageAlt: "精灵壁纸 App Icon",
    titleKey: "app4_title",
    descriptionKey: "app4_desc"
  },
  {
    name: "经典扫雷",
    href: "https://apps.apple.com/app/id6742346503",
    image: "/images/scanboom.webp",
    imageAlt: "经典扫雷 App Icon",
    titleKey: "app5_title",
    descriptionKey: "app5_desc"
  },
  {
    name: "草莓日记",
    href: "https://apps.apple.com/app/id6748330094",
    image: "/images/strawberry.webp",
    imageAlt: "草莓日记 App Icon",
    titleKey: "app6_title",
    descriptionKey: "app6_desc"
  }
];
