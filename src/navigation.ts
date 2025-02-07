import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Meet',
      href: 'https://fantastical.app/evanharmon',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Services', href: '/services' },
    { text: 'Meet', href: '/meet' },
    { text: 'Blog', href: '/blog' },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Triplicate-Group' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/evanharmon1' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Based on theme by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> OnWidget</a>
  `,
};
