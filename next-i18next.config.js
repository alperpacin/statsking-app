/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development" ? true : false,
};
