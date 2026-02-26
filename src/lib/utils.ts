export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export const SITE = {
  title: 'Mahmoud Sameh',
  description: 'AI Solution Engineer — Building intelligent solutions at the intersection of AI research and engineering.',
  url: 'https://mahmoud-sameh.me',
  author: 'Mahmoud Sameh',
  email: 'mahmoud.sameh0101@gmail.com',
  social: {
    github: 'https://github.com/mah-sam',
    linkedin: 'https://linkedin.com/in/mahmoud-sameh-37560420b',
    twitter: 'https://twitter.com/mah_sam01',
  },
  analytics: {
    gtmId: 'GTM-5JWKJPT',
    gaId: 'G-9461TF3354',
  },
};
