/* src/data/site.ts — Centralised site-wide data for Smartgarðar */

import type { SiteData } from '../types/site';

export const siteData: SiteData = {
  companyName: 'Smartgarðar',
  foundedYear: 2005,
  phone: '764-6868',
  email: 'smartgardar@smartgardar.is',
  navigation: [
    { label: 'Forsíða', path: '/' },
    { label: 'Þjónusta', path: '/thjonusta' },
    { label: 'Um okkur', path: '/um-okkur' },
    { label: 'Hafðu samband', path: '/hafdu-samband' },
  ],
  pages: {
    home: {
      title: 'Smartgarðar — Garðaþjónusta',
      description:
        'Smartgarðar sér um almenna umhirðu garða og grasflata. Grassláttur, beðahreinsun, trjáklippingar.',
    },
    services: {
      title: 'Þjónusta — Smartgarðar',
      description:
        'Við bjóðum upp á grasslátt, beðahreinsun, trjáklippingar og almenna garðhirðu fyrir einstaklinga og fyrirtæki.',
    },
    about: {
      title: 'Um okkur — Smartgarðar',
      description:
        'Smartgarðar er staðbundið garðyrkjufyrirtæki sem leggur áherslu á gæði, áreiðanleika og góð samskipti.',
    },
    contact: {
      title: 'Hafðu samband — Smartgarðar',
      description:
        'Sendu okkur fyrirspurn og við svörum eins fljótt og auðið er. Smartgarðar — garðaþjónusta sem þú getur treyst.',
    },
  },
};
