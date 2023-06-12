module.exports = {
  siteMetadata: {
    title: `BBS Polska`,
    author: {
      name: `Mateusz Malanowski`,
      summary: `Lumina Studio`,
    },
    description: `BBS Polska App`,
    siteUrl: `https://bbs-polska.com/`,
    social: {
      twitter: `bbspolska`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: 'http://localhost:1337',
        // accessToken: '68f69958dd6d4a891c4835a62100ebec0c2fb5420e1e39d33e42e40d6a210b5e150fd3f9b8a55362300197acde2681172ab1e39e68c8d7be02d7e6522a67ed1fa94a812885e74adce9949aef7687a0a15e5dc06f431cf7a2a4e3a44a59441a491c131f15075bde47acbd81d2b75d09a30bd6181840ece4444ee452a31e828848',
        apiURL: 'https://bbs-polska.herokuapp.com',
        accessToken: '8d1290ef0a924a82605133d7eaaa524d7209ccd5e18d505a681d1a4339856ac544fec3459f002ff5b25b344ff33e94922f8c361e039e5854af82a4b5ba7d723ba987340c7a21916a0b2f1e2b20a38c476138c3a1ca8f727e31c9f1039f5d098984ea3b44015508cad4a5dc51bdfe6e14b7bdcbf58a03733a6ebb9b7898cf29fc',
        collectionTypes: ['article', 'project'],
        singleTypes: ['private-policy'],
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl: `https://bbs-polska.com/`,
        // generateDefaultLanguagePage: true,
        i18nextOptions: {
          fallbackLng: 'pl',
          interpolation: {
            escapeValue: false
          },
          keySeparator: '.',
          nsSeparator: false
        },
        // pages: [
        //   {
        //     matchPath: '/:lang?/blog/:uid',
        //     getLanguageFromPath: true,
        //     excludeLanguages: ['es']
        //   },
        //   {
        //     matchPath: '/preview',
        //     languages: ['en']
        //   }
        // ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-NDPNFSLVVY",
        ]
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.nodes.map(node => {
    //             return Object.assign({}, node.frontmatter, {
    //               description: node.excerpt,
    //               date: node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + node.fields.slug,
    //               custom_elements: [{ "content:encoded": node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               nodes {
    //                 excerpt
    //                 html
    //                 fields {
    //                   slug
    //                 }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Gatsby Starter Blog RSS Feed",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BBS Polska`,
        short_name: `BBS Polska`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FF8C36`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
