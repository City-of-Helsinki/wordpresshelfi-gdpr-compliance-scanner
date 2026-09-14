const nodebug = { headless: true, pause: false }
// eslint-disable-next-line no-unused-vars
const debug = { headless: false, pause: true };

const config = {
  name: 'tyovaenopisto',
  mainUrl: 'https://tyovaenopisto.hel.fi',
  apiUrl: 'https://tyovaenopisto.hel.fi/wp-json/helfi-cookie-consent/v1/settings'+'?cacheBuster='+Date.now(),
  settingsDomainSubstitution: 'https://tyovaenopisto.hel.fi',
  urls: [
    {
      only: false,
      nameBase: 'Frontpage',
      url: 'https://tyovaenopisto.hel.fi',
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
