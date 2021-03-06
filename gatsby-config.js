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
        apiURL: 'https://bbs-polska.herokuapp.com',
        accessToken: '4a506e96901df34df3d9e77645a6937c009b27a0a0ac32d3b3b65aa59131f16bfb77479c66dc035aa24a6a193a8c17b082b488788c4b70e110b93d7151e1a8592bfec7221c01ffaaf3094293ba9468b5b834ebd5fe733017c8e9493c9e7848e0b16d770aa6dcd5aba0b4d76929a0d1875fa9a144665b9eabf4dbc4914a28aee2',
        // collectionTypes: ['article', 'project'],
        collectionTypes: ['article', 'project'],
        // contentTypes: ['articles', 'projects'],
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
