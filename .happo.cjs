const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  project: 'Svelte Template',

  targets: {
    // "chrome-mobile": new RemoteBrowserTarget("chrome", {
    //   viewport: "750x1334",
    // }),
    // "chrome-tablet": new RemoteBrowserTarget("chrome", {
    //   viewport: "1024x768",
    // }),
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1366x768',
    }),
    // "chrome-desktop-xl": new RemoteBrowserTarget("chrome", {
    //   viewport: "1920x1080",
    // }),
    // "firefox-desktop": new RemoteBrowserTarget("chrome", {
    //   viewport: "1366x768",
    // }),
    // "firefox-desktop-xl": new RemoteBrowserTarget("chrome", {
    //   viewport: "1920x1080",
    // }),
    // "ios-safari": new RemoteBrowserTarget("ios-safari", {
    //   viewport: "375x667", //Cannot override this value
    // }),
    // "safari-mobile": new RemoteBrowserTarget("safari", {
    //   viewport: "750x1334",
    // }),
    // "safari-tablet": new RemoteBrowserTarget("safari", {
    //   viewport: "1024x768",
    // }),
    // "safari-desktop": new RemoteBrowserTarget("safari", {
    //   viewport: "1196x800", //1200x1200 is max on safari
    // }),
    // "edge-tablet": new RemoteBrowserTarget("edge", {
    //   viewport: "1024x768",
    // }),
    // "edge-desktop": new RemoteBrowserTarget("edge", {
    //   viewport: "1196x1800", //1200x1200 is max on edge
    // }),
  },
};
