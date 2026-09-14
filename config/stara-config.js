const nodebug = { headless: true, pause: false }
// eslint-disable-next-line no-unused-vars
const debug = { headless: false, pause: true };

const config = {
  name: 'stara',
  mainUrl: 'https://stara.hel.fi',
  apiUrl: 'https://stara.hel.fi/wp-json/helfi-cookie-consent/v1/settings'+'?cacheBuster='+Date.now(),
  settingsDomainSubstitution: 'https://stara.hel.fi',
  urls: [
    {
      only: false,
      nameBase: 'Frontpage',
      url: 'https://stara.hel.fi',
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
