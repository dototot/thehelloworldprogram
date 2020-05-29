const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  const redirects = [
    {
      from: "/linux/getting-help-built-in-bash-shell-commands",
      to: "/linux/help",
    },
    {
      from: "/web-development/technology-behind-web-applications",
      to: "/web-development/how-websites-made",
    },
    {
      from:
        "/computer-science/three-great-reasons-to-use-free-open-source-software",
      to: "/computer-science/free-open-source-software",
    },
    {
      from: "/computer-science/computer",
      to: "/computer-science/how-does-a-computer-work",
    },
    {
      from: "/computer-science/what-is-a-vector-graphic",
      to: "/computer-science/graphics",
    },
    {
      from:
        "/python/why-python-should-be-the-first-programming-language-you-learn",
      to:
        "https://dototot.com/why-python-should-be-the-first-programming-language-you-learn",
    },
    {
      from: "/linux/why-you-should-install-linux-now",
      to: "https://dototot.com/why-you-should-install-linux-now",
    },
    {
      from: "/linux/locate-find-waldo-bash-shell",
      to: "https://dototot.com/locate-find-waldo-bash-shell",
    },
    {
      from: "/linux/list-doughnut-contents-ls-command",
      to: "https://dototot.com/list-doughnut-contents-ls-command",
    },
    {
      from: "/linux/touch-rm-ls-cp-files-linuxunix-bash-shell-petting-zoo",
      to: "https://dototot.com/touch-rm-ls-cp-files-bash-shell-petting-zoo",
    },
  ]

  redirects.forEach((redirect) => {
    createRedirect({
      fromPath: redirect.from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: redirect.to,
    })
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___lesson] }
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
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        const postTemplate = path.resolve("./src/templates/blog-post.js")
        const categoryTemplate = path.resolve("./src/templates/category.js")
        const lessonCount = {}

        Object.entries({
          "computer-science": "Computer Science",
          linux: "Linux",
          "web-development": "Web Development",
          python: "Python",
        }).forEach(([path, category]) => {
          lessonCount[category] = posts.filter(
            ({ node }) => node.frontmatter.category === category
          ).length
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
            component: postTemplate,
            context: {
              slug: node.fields.slug,
              totalLessons: lessonCount[node.frontmatter.category],
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
