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
    href: "/tools/password/",
    icon: "🔑",
    titleKey: "tool_pwd_title",
    descriptionKey: "tool_pwd_desc"
  },
  {
    href: "/tools/units/",
    icon: "⚖️",
    titleKey: "tool_units_title",
    descriptionKey: "tool_units_desc"
  },
  {
    href: "/tools/wordcount/",
    icon: "🔢",
    titleKey: "tool_words_title",
    descriptionKey: "tool_words_desc"
  },
  {
    href: "/tools/textconvert/",
    icon: "🔀",
    titleKey: "tool_text_title",
    descriptionKey: "tool_text_desc"
  },
  {
    href: "/tools/bmi/",
    icon: "🏃",
    titleKey: "tool_bmi_title",
    descriptionKey: "tool_bmi_desc"
  },
];

// Tools section is hidden from the home page and nav for now; pages under /tools/ still work
export const showToolsSection = false;
