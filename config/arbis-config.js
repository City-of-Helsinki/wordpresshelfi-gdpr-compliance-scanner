const nodebug = { headless: true, pause: false }
// eslint-disable-next-line no-unused-vars
const debug = { headless: false, pause: true };

const config = {
  name: 'arbis',
  mainUrl: 'https://arbis.hel.fi',
  apiUrl: 'https://arbis.hel.fi/wp-json/helfi-cookie-consent/v1/settings'+'?cacheBuster='+Date.now(),
  settingsDomainSubstitution: 'https://arbis.hel.fi',
  urls: [
    {
      only: false,
      nameBase: 'Frontpage',
      url: 'https://arbis.hel.fi',
      actions: [],
      variants: [
        'none',
        'required',
        'all',
      ],
      ...nodebug,
    }
  ],
};

export {
  config,
};
