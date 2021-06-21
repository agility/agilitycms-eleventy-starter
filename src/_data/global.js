const {
  getSyncClient,
  agilityConfig,
} = require("../../agility/agility.config");

async function getAgilityContent() {
  const languageCode = agilityConfig.languageCode;
  const isPreview = agilityConfig.isPreviewMode;
  const channelName = agilityConfig.channelName;
  const syncClient = getSyncClient({ isPreview });
  const agility = syncClient.store;

  // get sitemap
  let nestedSitemap = await agility.getSitemapNested({
    channelName,
    languageCode,
  });

  if (!nestedSitemap) return {};

  let navigation = nestedSitemap.filter((n) => n.visible.menu);

  // get header
  let header = await agility.getContentList({
    referenceName: "siteheader",
    languageCode,
  });

  if (header && header.length > 0) header = header[0].fields;

  return {
    header,
    navigation,
    isPreview,
  };
}

// export for 11ty
module.exports = getAgilityContent;
