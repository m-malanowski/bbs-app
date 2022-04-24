const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allStrapiArticle.edges.forEach(edge => {
    const slug = edge.node.Slug
    actions.createPage({
      // path: slug,
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })

  // result.data.allStrapiArticle.edges.forEach(article => {
  //   createPage({
  //     path: `/blog/${article.Slug}`,
  //     component: path.resolve(`src/templates/blog-post.js`),
  //     context: {
  //       Slug: article.Slug,
  //     },
  //   })
  // })
}
