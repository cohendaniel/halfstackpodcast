import React from "react"
import Grid from '@material-ui/core/Grid';
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default class PodcastPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        podcast: this.props.data.podcastsJson
    };
  }

  getLinks() {
    return this.state.podcast.links.map((link) => {
      return <li><a href={link}>{link}</a></li>
    })
  }

  render() {
    return (
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <h1>{this.state.podcast.name}</h1>
            <h3>{this.state.podcast.description}</h3>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h4>Links from this episode</h4>
              <ul>
                {this.getLinks()}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export const query = graphql`
  query($name: String!) {
    podcastsJson(name: {eq: $name}) {
      name
      description
      links
      fields {
        slug
      }
    }
  }
`
