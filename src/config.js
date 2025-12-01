// src/config.js

export const CONFIG = {
  seo: {
    maxTitleLength: 60,
    maxDescriptionLength: 160,
    minOgImageWidth: 200,
    minOgImageHeight: 200,
    enableJsonLdValidation: true
  },

  ux: {
    checkAltAttributes: true,
    checkBrokenLinks: true
  },

  copyright: {
    checkImageLicenses: true
  },

  metaDefaults: {
    title: "Default SEO Title",
    description: "Default SEO description.",
    canonical: "https://example.com/",
    ogImage: "https://example.com/default-image.jpg"
  }
};
