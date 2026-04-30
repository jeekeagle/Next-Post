import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Next Post",
  DESCRIPTION: "记录转瞬即逝的念头，然后等待它们慢慢发芽。",
  EMAIL: "hello@example.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Next Post",
  DESCRIPTION: "记录转瞬即逝的念头，然后等待它们慢慢发芽。",
};

export const BLOG: Metadata = {
  TITLE: "Post",
  DESCRIPTION: "日常的闪念、洞察与判断。长期积累，形成思维轨迹。",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/jeekeagle",
  },
];
