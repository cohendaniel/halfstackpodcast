import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"

const listProducts = (data) => {
  return data.allPodcastsJson.edges.map((edge) => {
    const urlPath = "/" + edge.node.fields.slug
    return (
      <Link style={{display: 'inline-block', textAlign: 'center', width: "33%"}} to={urlPath} key={edge.node.name}>
        <div>
          {edge.node.name}
        </div>
      </Link>
    )
  });
}

const IndexPage = ({data}) => (
  <Layout>
    <div style={{textAlign: 'center', margin: '40px'}}>
      <h1>Podcasts</h1>
    </div>
    {listProducts(data)}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allPodcastsJson {
      edges {
        node {
          name
          fields {
            slug
          }
        }
      }
    }
  }
`
