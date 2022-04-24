const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            Content
            Slug
          }
        }
      }
    }
  `)

  result.data.allStrapiArticle.edges.forEach(article => {
    createPage({
      path: `/blog/${article.Slug}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        Slug: article.Slug,
      },
    })
  })
}
