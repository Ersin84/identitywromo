const path = require('path');
module.exports = {
  i18n: {
    locales: ['en','he','ru','az'],
    defaultLocale: 'az',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
