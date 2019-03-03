const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const podcastTemplate = path.resolve('src/templates/podcast-page.js')
  return graphql(
      `{
          allPodcastsJson(limit: 10) {
              edges {
                  node {
                      name
                      description
                      fields {
                        slug
                      }
                  }
              }
          },
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                  templateKey
                }
              }
            }
          }
      }`
  ).then(result => {
    if (result.errors) {
        throw result.errors
    }
    result.data.allPodcastsJson.edges.forEach(edge => {
        createPage({
            path: edge.node.fields.slug,
            component: podcastTemplate,
            context: {
                name: edge.node.name
            }
        })
    })

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  let value = ""
  if (node.internal.type === `MarkdownRemark`) {
    value = createFilePath({ node, getNode })
  } else if (node.internal.type === 'PodcastsJson') {
    value = "/podcasts/episode-" + node.number 
  }
  createNodeField({
    name: `slug`,
    node,
    value,
  })
}
