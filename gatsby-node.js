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
      from: "/web-development/add-extra-information-web-page-semantic-markup",
      to: "/web-development/semantic-html-markup",
    },
    {
      from:
        "/web-development/build-web-page-with-simple-structural-html-markup",
      to: "/web-development/structural-html-markup",
    },
    {
      from: "/web-development/ordered-unordered-description-lists-html",
      to: "/web-development/ordered-unordered-description-lists",
    },
    {
      from: "/web-development/html-unorderd-ordered-description-lists",
      to: "/web-development/ordered-unordered-description-lists",
    },
    {
      from: "/web-development/create-links-html-anchor-tag",
      to: "/web-development/anchor-tag",
    },
    {
      from: "/web-development/connect-html-pages-html-anchor-element",
      to: "/web-development/anchor-tag",
    },
    {
      from: "/web-development/add-photos-graphics-web-page-html-img-element",
      to: "/web-development/html-image-element",
    },
    {
      from: "/web-development/build-game-board-html-table-element",
      to: "/web-development/html-tables",
    },
    {
      from: "/web-development/html-forms-inputs-buttons-fieldsets-legends",
      to: "/web-development/html-form-elements",
    },
    {
      from: "/web-development/html-audio-video-media-players",
      to: "/web-development/html-video-audio-elements",
    },
    {
      from: "/web-development/html-head-title-meta-link-script-elements",
      to: "/web-development/html-head-meta-link-script-elements",
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
        const categories = [
          {
            path: "computer-science",
            category: "Computer Science",
            description:
              "We use computers daily to simplify intricate tasks, facilitate cross-cultural communication, and entertain ourselves. From the early mechanical work of Charles Babbage and Ada Lovelace, the field of computer science has expanded to include a diversity of subjects from hardware, software, robots, artificial intelligence, graphics, networks, and more. With our videos and tutorials, you will learn to think like a computer and approach complex problems with a new perspective. Master the tools and technology that are shaping the future.",
          },
          {
            path: "linux",
            category: "Linux",
            description:
              "Explore the fastest-growing computer operating system and learn the basic commands you need to take greater control of your computer. Linux is a free, open source operating system that powers smartphones, web servers, supercomputers, and even space stations. In short… Linux is everywhere! Become a superuser today with our free videos and tutorials.",
          },
          {
            path: "web-development",
            category: "Web Development",
            description:
              "Behind every great website, and many phone applications and games, is HTML. HTML is the essential building block of the web, and is a great first language to learn when starting in web development. It is not so much a programming language as it is a means of tagging and organizing content within a page. To make a website truly come to life, you will eventually need to combine HTML with CSS and JavaScript. While it may look complicated, HTML is not a difficult language. You can learn the basics in less than a day, but it can be a real chore to master everything. Our free videos and tutorials make learning HTML easy and fun.",
          },
          {
            path: "python",
            category: "Python",
            description:
              "Python is a fast, flexible, beginner-friendly programming language. It’s gradual learning curve and readability make it an excellent choice for launching your adventures in coding. Python is also amazingly powerful. NASA, Google and Disney, to name a few, use it for everything from web applications to robots. Take a byte of Python and quickly learn to think like a programmer with our free videos and tutorials.",
          },
        ]

        categories.forEach(({ path, category, description }) => {
          lessonCount[category] = posts.filter(
            ({ node }) => node.frontmatter.category === category
          ).length
          createPage({
            path,
            component: categoryTemplate,
            context: {
              category,
              description,
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
