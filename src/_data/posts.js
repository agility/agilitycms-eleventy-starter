const {
  getSyncClient,
  agilityConfig,
} = require("../../agility/agility.config");

async function getAgilityContent() {
  const languageCode = agilityConfig.languageCode;
  const isPreview = agilityConfig.isPreviewMode;

  const syncClient = getSyncClient({ isPreview });

  // get posts
  let posts = await syncClient.store.getContentList({
    referenceName: "posts",
    languageCode,
  });

  // get categories
  let categories = await syncClient.store.getContentList({
    referenceName: "categories",
    languageCode,
  });

  if (!posts) return {};

  return posts.map((p) => {
    // categoryID
    const categoryID = p.fields?.category?.contentid;

    // find category
    const category = categories?.find((c) => c.contentID == categoryID);

    // category
    p.category = category?.fields?.title || "Uncategorized";

    // date
    p.date = new Date(p.fields.date).toLocaleDateString();

    // title
    p.title = p.fields.title;

    // slug
    p.slug = p.fields.slug;

    // image
    p.image = p.fields.image;

    return p;
  });
}

// export for 11ty
module.exports = getAgilityContent;
