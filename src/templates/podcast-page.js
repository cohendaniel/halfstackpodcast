import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default class PodcastPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        podcast: this.props.data.podcastsJson
    };
  }
  render() {
    return (
      <Layout>
        TITLE OF PODCAST: <div>{this.state.podcast.name}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($name: String!) {
    podcastsJson(name: {eq: $name}) {
      name
      fields {
        slug
      }
    }
  }
`
