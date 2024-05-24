import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd5e2b4aa1fbd4c1182a54d1133a2cd9c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'SoTayMMO',
  domain: 'sotaymmo.com',
  author: 'Sổ Tay MMO',
  seotitle: 'Everything You Need to Make Money Online',

  // open graph metadata (optional)
  description: 'This is a demo website created with wr8.',

  // social usernames (optional)
  twitter: 'jotzilla',
  github: 'verfasor',
  linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: 'dac900a5e34f41f3afe33d3dec7e3170'
    },    
    {
      title: 'About',
      pageId: 'ae5bfcd4bca748a19e83a2fcee59b8f9'
    },
    {
      title: 'Contact',
      pageId: '46a397bfa2f04a1e861ba56c06db2964'
    }
  ]
})
