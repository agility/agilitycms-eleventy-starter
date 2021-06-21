# Agility CMS & Eleventy Starter

This is sample Eleventy starter site that uses Agility CMS and aims to be a foundation for building fully static sites using Eleventy and Agility CMS.

[Live Website Demo](https://agilitycms-eleventy-starter.vercel.app/)

[New to Agility CMS? Sign up for a FREE account](https://agilitycms.com/free)

## About This Starter

- Uses [`Nunjucks`](https://mozilla.github.io/nunjucks/) templating engine
- Connected to a sample Agility CMS Instance for sample content & pages
- Supports full [Page Management](https://help.agilitycms.com/hc/en-us/articles/360055805831)
- Provides a functional structure that dynamically routes each page based on the request, loads a Page Templates dynamically, and also dynamically loads and renders appropriate Agility CMS Page Modules (as Nunjuck templates)

### Tailwind CSS

This starter uses [Tailwind CSS](https://tailwindcss.com/), a simple and lightweight utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

It also comes equipped with [Autoprefixer](https://www.npmjs.com/package/autoprefixer), a plugin which use the data based on current browser popularity and property support to apply CSS prefixes for you.

## Getting Started

To start using the Agility CMS & Eleventys Starter, [sign up](https://agilitycms.com/free) for a FREE account and create a new Instance using the Blog Template.

1. Clone this repository
2. Run `npm install` or `yarn install`
3. Rename the `.env.example` file to `.env`
4. Retrieve your `GUID` and `API Keys (Preview/Fetch)` from Agility CMS by going to [Settings > API Keys](https://manager.agilitycms.com/settings/apikeys).

[How to Retrieve your GUID and API Keys from Agility](https://help.agilitycms.com/hc/en-us/articles/360031919212-Retrieving-your-API-Key-s-Guid-and-API-URL-)

## Running the Site Locally

### Development Mode

When running your site in `development` mode, you will see the latest content in real-time from the CMS.

#### yarn

1. `yarn install`
2. `yarn start`

To clear your content cache locally, run `yarn clean`

#### npm

1. `npm install`
2. `npm run start`

To clear your content cache locally, run `npm run clean`

### Production Mode

When running your site in `production` mode, you will see the published from the CMS.

#### yarn

1. `yarn build`
2. `npx http-server _site`

#### npm

1. `npm run build`
2. `npx http-server _site`

## Deploying Your Site

- [Deploying your Eleventy site to Netlify](https://help.agilitycms.com/hc/en-us/articles/360061532771)
- [Deploying your Eleventy site to Vercel](https://help.agilitycms.com/hc/en-us/articles/360061536891)

## Notes

### How to Register Page Modules

To create a new Page Module, create a new Nunjuck template within the `/src/includes/agility-pageModules` directory.

### How to Register Page Modules

To create a new Page Templates, create a new Nunjuck template within the `/src/includes/agility-pageTemplates` directory.

### How to Preview Content

- [How to Set Up a Preview Deployment with Netlify](https://help.agilitycms.com/hc/en-us/articles/360061064432)
- [How to Set Up a Preview Deployment with Vercel](https://help.agilitycms.com/hc/en-us/articles/360061588511)

## Resources

### Agility CMS

- [Official site](https://agilitycms.com)
- [Documentation](https://help.agilitycms.com/hc/en-us)

### Eleventy

- [Official site](https://www.11ty.dev/)
- [Documentation](https://www.11ty.dev/docs/)

### Tailwind CSS

- [Official site](http://tailwindcss.com/)
- [Documentation](http://tailwindcss.com/docs)

### Community

- [Official Slack](https://join.slack.com/t/agilitycommunity/shared_invite/enQtNzI2NDc3MzU4Njc2LWI2OTNjZTI3ZGY1NWRiNTYzNmEyNmI0MGZlZTRkYzI3NmRjNzkxYmI5YTZjNTg2ZTk4NGUzNjg5NzY3OWViZGI)
- [Blog](https://agilitycms.com/resources/posts)
- [GitHub](https://github.com/agility)
- [Forums](https://help.agilitycms.com/hc/en-us/community/topics)
- [Facebook](https://www.facebook.com/AgilityCMS/)
- [Twitter](https://twitter.com/AgilityCMS)

## Feedback and Questions

If you have feedback or questions about this starter, please use the [Github Issues](https://github.com/agility/agilitycms-eleventy-starter/issues) on this repo, join our [Community Slack Channel](https://join.slack.com/t/agilitycommunity/shared_invite/enQtNzI2NDc3MzU4Njc2LWI2OTNjZTI3ZGY1NWRiNTYzNmEyNmI0MGZlZTRkYzI3NmRjNzkxYmI5YTZjNTg2ZTk4NGUzNjg5NzY3OWViZGI) or create a post on the [Agility Developer Community](https://help.agilitycms.com/hc/en-us/community/topics).
