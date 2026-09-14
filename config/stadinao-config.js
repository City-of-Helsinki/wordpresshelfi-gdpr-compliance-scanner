const nodebug = { headless: true, pause: false }
// eslint-disable-next-line no-unused-vars
const debug = { headless: false, pause: true };

const config = {
  name: 'stadinao',
  mainUrl: 'https://stadinao.hel.fi',
  apiUrl: 'https://stadinao.hel.fi/wp-json/helfi-cookie-consent/v1/settings'+'?cacheBuster='+Date.now(),
  settingsDomainSubstitution: 'https://stadinao.hel.fi',
  urls: [
    {
      only: false,
      nameBase: 'Frontpage',
      url: 'https://stadinao.hel.fi',
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
