// The CVs served at mahmoud-sameh.me/<slug>. Each slug has a page in src/pages/
// that opens its PDF straight away (src/components/CvRedirect.astro), and the build
// copies each PDF from CV/ to dist/<slug>/<file> (scripts/copy-cvs.mjs).
// To add a CV: add it here, add its page, and un-ignore its PDF in .gitignore.
export const cvs = [
  // Fresh AI graduate, built from Mahmoud_Sameh_CV_AI_Entry.tex
  { slug: 'fai', source: 'Mahmoud_Sameh_CV.pdf', file: 'Mahmoud_Sameh_CV.pdf', lang: 'en' },
  // The old name for /fai, kept so links already sent out still open
  { slug: 'cv', source: 'Mahmoud_Sameh_CV.pdf', file: 'Mahmoud_Sameh_CV.pdf', lang: 'en' },
  // AI and research, built from Mahmoud_Sameh_CV_AI.tex
  { slug: 'ai', source: 'Mahmoud_Sameh_CV_AI.pdf', file: 'Mahmoud_Sameh_CV.pdf', lang: 'en' },
  // AI and full stack
  { slug: 'ais', source: 'Mahmoud_Sameh_CV_AIS.pdf', file: 'Mahmoud_Sameh_CV.pdf', lang: 'en' },
  { slug: 'aisar', source: 'Mahmoud_Sameh_CV_AIS_AR.pdf', file: 'Mahmoud_Sameh_CV_AR.pdf', lang: 'ar' },
  // Electrical engineering
  { slug: 'ee', source: 'Mahmoud_Sameh_CV_EE.pdf', file: 'Mahmoud_Sameh_CV.pdf', lang: 'en' },
  { slug: 'eear', source: 'Mahmoud_Sameh_CV_EE_AR.pdf', file: 'Mahmoud_Sameh_CV_AR.pdf', lang: 'ar' },
];
