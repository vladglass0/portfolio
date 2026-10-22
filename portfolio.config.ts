import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
  VscVscode,
} from 'react-icons/vsc';
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { Project } from '@/types';

// Everything personal about the portfolio lives here. Edit this file to make
// the template your own; pages and components read from it.

export const profile = {
  name: 'RtxBB',
  role: 'Hobby developer',
  currentPosition: 'Hobby developer',
  location: 'Russia',
  siteUrl: 'https://rtxbb.lts-net.ru',
  ogImage: 'https://imgur.com/4zi5KkQ.png',
  repository: 'https://github.com/vladglass0/portfolio',
  metaDescription:
    "RtxBB is hobby developer.",
  ogDescription:
    "A hobby developer.",
  keywords: [
    'rtxbb',
    'rtxbb portfolio',
    'vladglass0',
    'minecraft mods',
    'hobby developer',
  ],
  intro:
    'I build things for fun: Minecraft mods, Linux utilities in Python and Go, and small web projects.',
  bio: [
    "I'm a hobby developer who likes tinkering with whatever is interesting at the moment, from Forge and NeoForge mods to hardware control tools on Linux.",
    'Most of my code lives on GitHub: Java mods, Python desktop apps, Go CLI toys, Lua scripts for ComputerCraft and a bit of web.',
  ],
  beyondCode:
    'Aside from programming, I enjoy playing and hosting Minecraft servers.',
};

export interface Social {
  id: string;
  handle: string;
  href: string;
}

export const socials: Social[] = [
  {
    id: 'website',
    handle: 'rtxbb.lts-net.ru',
    href: 'https://rtxbb.lts-net.ru',
  },
  {
    id: 'github',
    handle: 'vladglass0',
    href: 'https://github.com/vladglass0',
  },
];

export const getSocial = (id: string) => socials.find(s => s.id === id);

export interface Experience {
  role: string;
  company?: string;
  period: string;
  highlights?: string[];
  description?: string;
}

export const experience: Experience[] = [
  {
    role: 'Hobby developer',
    period: 'Present',
    highlights: [
      'Minecraft mods for Forge and NeoForge, including LTS Auth on Modrinth',
      'Linux desktop tools in Python and PySide6',
      'Contributions to MaterialMC, a fork of Prism Launcher',
    ],
  },
];

// Your skills, shown as installed extensions in the Extensions view. Each one
// gets a detail page at /extensions/<id>.
export interface Extension {
  id: string;
  name: string;
  publisher: string;
  category: string;
  icon: IconType;
  // Brand color for the icon
  color: string;
  // One-liner shown in the extensions list
  description: string;
  // Longer write-up shown on the extension's detail page
  details?: string;
  // Shown where VS Code shows the version, e.g. "4 years"
  experience?: string;
}

export const extensions: Extension[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    publisher: 'Ecma International',
    category: 'Languages',
    icon: SiJavascript,
    color: '#f7df1e',
    description: 'The language I started with and still write every day.',
    experience: '5 years',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    publisher: 'Microsoft',
    category: 'Languages',
    icon: SiTypescript,
    color: '#3178c6',
    description: 'My default for anything beyond a quick script.',
    details:
      'I reach for TypeScript on every project, from component libraries to backend services. Strict mode on, types as documentation.',
    experience: '4 years',
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    publisher: 'W3C',
    category: 'Languages',
    icon: SiHtml5,
    color: '#e34f26',
    description: 'Semantic markup and layouts that hold up on every screen.',
    experience: '5 years',
  },
  {
    id: 'react',
    name: 'React',
    publisher: 'Meta',
    category: 'Frontend',
    icon: SiReact,
    color: '#61dafb',
    description: 'Building interactive UIs, from video editors to portfolios.',
    experience: '4 years',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    publisher: 'Vercel',
    category: 'Frontend',
    icon: SiNextdotjs,
    color: '#ffffff',
    description: 'Full-stack React apps, including this portfolio.',
    experience: '3 years',
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    publisher: 'Tailwind Labs',
    category: 'Frontend',
    icon: SiTailwindcss,
    color: '#06b6d4',
    description: 'Utility-first styling for shipping UI quickly.',
    experience: '3 years',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiNodedotjs,
    color: '#5fa04e',
    description: 'APIs and tooling on the server side of the stack.',
    experience: '4 years',
  },
  {
    id: 'express',
    name: 'Express',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiExpress,
    color: '#ffffff',
    description: 'Minimal, unopinionated REST APIs.',
    experience: '4 years',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    publisher: 'MongoDB Inc.',
    category: 'Backend',
    icon: SiMongodb,
    color: '#47a248',
    description: 'Document storage for MERN stack apps.',
    experience: '3 years',
  },
  {
    id: 'git',
    name: 'Git',
    publisher: 'Software Freedom Conservancy',
    category: 'Tools',
    icon: SiGit,
    color: '#f05032',
    description: 'Version control, rebases and all.',
    experience: '5 years',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    publisher: 'Microsoft',
    category: 'Tools',
    icon: VscVscode,
    color: '#0098ff',
    description: 'Where I spend my days, hence this portfolio.',
    experience: '5 years',
  },
  {
    id: 'figma',
    name: 'Figma',
    publisher: 'Figma',
    category: 'Tools',
    icon: SiFigma,
    color: '#f24e1e',
    description: 'Reading designs and occasionally making them.',
    experience: '3 years',
  },
];

export const getExtension = (id: string) => extensions.find(e => e.id === id);

// Extension names grouped by category, in the order they're listed above
export const skills = extensions.reduce<Record<string, string[]>>(
  (groups, { category, name }) => {
    (groups[category] ??= []).push(name);
    return groups;
  },
  {}
);

export const writing: { name: string; href: string }[] = [];

export const projects: Project[] = [
  {
    title: 'FX240 LCD',
    description:
      'Python + PySide6 app for the ID-COOLING FX240 pump display on Linux: live temperatures, custom images and GIFs, theme editor.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/id-cooling_lcd',
    slug: 'id-cooling_lcd',
  },
  {
    title: 'LTS Auth',
    description: 'A server-side authentication mod for Minecraft Forge 1.20.1.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/lts-auth',
    slug: 'lts-auth',
  },
  {
    title: 'MaterialMC',
    description:
      'A custom Minecraft launcher for managing multiple installations. Fork of Prism Launcher.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/MaterialMC',
    slug: 'MaterialMC',
  },
  {
    title: 'MaterialMC Website',
    description: 'A modern Material 3 landing page concept for MaterialMC.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/vladglass0/MaterialMC-site',
    slug: 'MaterialMC-site',
  },
  {
    title: 'Mekanism MoreSolarPanels',
    description:
      'A Mekanism addon with up to 9 new configurable solar panels, including a creative one.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/Mekanism-Panels',
    slug: 'Mekanism-Panels',
  },
  {
    title: 'fakebuild',
    description:
      'Type `build browser`, watch a Gentoo-style emerge animation, then the real program launches. Written in Go.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/fakebuild',
    slug: 'fakebuild',
  },
  {
    title: 'LTS Checker',
    description: 'A Python utility, also packaged as a Windows exe with PyInstaller.',
    logo: 'https://avatars.githubusercontent.com/u/129985729',
    link: 'https://github.com/vladglass0/ltscheck',
    slug: 'ltscheck',
  },
];

export interface Route {
  path: string;
  label: string;
  // Activity bar and command palette icon
  icon: IconType;
  // Where the route's icon sits in the activity bar, if at all
  activityBar?: 'top' | 'bottom';
  // Second key of the "G <key>" navigation chord
  shortcut?: string;
  // Routes with a file appear in the explorer and tabs bar
  file?: {
    name: string;
    icon: string;
  };
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    icon: VscFiles,
    activityBar: 'top',
    shortcut: 'h',
    file: { name: 'home.tsx', icon: '/logos/react_icon.svg' },
  },
  {
    path: '/about',
    label: 'About',
    icon: VscAccount,
    activityBar: 'bottom',
    shortcut: 'a',
    file: { name: 'about.html', icon: '/logos/html_icon.svg' },
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: VscMail,
    activityBar: 'top',
    shortcut: 'c',
    file: { name: 'contact.css', icon: '/logos/css_icon.svg' },
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: VscCode,
    activityBar: 'top',
    shortcut: 'p',
    file: { name: 'projects.js', icon: '/logos/js_icon.svg' },
  },
  {
    path: '/articles',
    label: 'Articles',
    icon: VscEdit,
    activityBar: 'top',
    shortcut: 'r',
    file: { name: 'articles.json', icon: '/logos/json_icon.svg' },
  },
  {
    path: '/github',
    label: 'GitHub',
    icon: VscGithubAlt,
    activityBar: 'top',
    shortcut: 'g',
    file: { name: 'github.md', icon: '/logos/markdown_icon.svg' },
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: VscSettings,
    activityBar: 'bottom',
    shortcut: 's',
  },
];

export const fileRoutes = routes.filter(
  (route): route is Route & { file: NonNullable<Route['file']> } =>
    route.file !== undefined
);
