const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___order] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  category
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        const blogTemplate = path.resolve("./src/templates/blog-post.js")
        const categoryTemplate = path.resolve("./src/templates/category.js")

        Object.entries({
          'computer-science': "Computer Science",
        }).forEach(([path, category]) => {
          createPage({
            path,
            component: categoryTemplate,
            context: {
              category,
            },
          })
        })

        posts.forEach(({ node }, index) => {
          createPage({
            path: `${node.fields.slug}`,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            },
          })
        })
        return
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
