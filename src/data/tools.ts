export type ToolEntry = {
  href: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  titleKey: string;
  descriptionKey: string;
};

export const tools: ToolEntry[] = [
  {
    href: "/tools/password.html",
    icon: "🔑",
    titleKey: "tool_pwd_title",
    descriptionKey: "tool_pwd_desc"
  },
  {
    href: "/tools/units.html",
    icon: "⚖️",
    titleKey: "tool_units_title",
    descriptionKey: "tool_units_desc"
  },
  {
    href: "/tools/lorem.html",
    icon: "📝",
    titleKey: "tool_lorem_title",
    descriptionKey: "tool_lorem_desc"
  },
  {
    href: "/tools/wordcount.html",
    icon: "🔢",
    titleKey: "tool_words_title",
    descriptionKey: "tool_words_desc"
  },
  {
    href: "/tools/textconvert.html",
    icon: "🔀",
    titleKey: "tool_text_title",
    descriptionKey: "tool_text_desc"
  },
  {
    href: "/tools/bmi.html",
    icon: "🏃",
    titleKey: "tool_bmi_title",
    descriptionKey: "tool_bmi_desc"
  },
  {
    href: "/tools/remove-bg.html",
    icon: "🖼️",
    titleKey: "tool_removebg_title",
    descriptionKey: "tool_removebg_desc"
  },
  {
    href: "/tools/gradient.html",
    icon: "🎨",
    titleKey: "tool_gradient_title",
    descriptionKey: "tool_gradient_desc"
  },
  {
    href: "/tools/json.html",
    icon: "📋",
    titleKey: "tool_json_title",
    descriptionKey: "tool_json_desc"
  },
  {
    href: "/tools/pdf2text.html",
    image: "/images/pdf2text.jpg",
    imageAlt: "PDF2Text Icon",
    titleKey: "tool2_title",
    descriptionKey: "tool2_desc"
  }
];
