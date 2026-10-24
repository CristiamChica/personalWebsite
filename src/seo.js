// Per-route metadata. Used by the client (document.title) and by scripts/prerender.js (static <head>).
export const SITE_URL = 'https://www.cristianchica.com';
export const SITE_NAME = 'Cristian Chica';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
// The address is only assembled in the browser so it never appears as plain text in the HTML
export const EMAIL_DISPLAY = 'cristiam.chica at gmail dot com';
export const emailAddress = () => ['cristiam.chica', 'gmail.com'].join('@');

export const ROUTES = {
  '/': {
    label: 'Home',
    title: 'Cristian Chica | Mathematician and Head of Data at Dapper',
    description: 'Cristian Chica has a PhD in Mathematics from the University of Minnesota and is Head of Data at Dapper. His research spans algorithmic pricing, reinforcement learning and two-sided markets.'
  },
  '/research': {
    label: 'Research',
    title: 'Research | Cristian Chica',
    description: 'Papers by Cristian Chica on algorithmic collusion by Q-learning agents, competition in two-sided markets with network externalities, and dynamic pricing of customer memberships.'
  },
  '/cv': {
    label: 'CV',
    title: 'CV | Cristian Chica',
    description: 'Curriculum vitae of Cristian Chica: Head of Data at Dapper, Quantitative Strategist at Morgan Stanley, Research Assistant at Harvard Business School, PhD in Mathematics from the University of Minnesota.'
  },
  '/privacy': {
    label: 'Privacy Policy',
    title: 'Privacy Policy | Cristian Chica',
    description: 'How cristianchica.com uses Google Analytics, what is collected, and how to opt out.'
  }
};

export const SAME_AS = [
  'https://www.linkedin.com/in/cccc24/',
  'https://scholar.google.com/citations?user=7uZo3mQAAAAJ',
  'https://github.com/CristiamChica',
  'https://x.com/ccchicac'
];

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cristian Camilo Chica Castaño',
  alternateName: 'Cristian Chica',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  jobTitle: 'Head of Data',
  worksFor: { '@type': 'Organization', name: 'Dapper' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Minnesota' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad Nacional de Colombia' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad EAFIT' }
  ],
  knowsAbout: ['Game theory', 'Machine learning', 'Algorithmic collusion', 'Two-sided markets', 'Industrial organization'],
  sameAs: SAME_AS
};
