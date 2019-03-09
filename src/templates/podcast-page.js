import React from "react"
import Grid from '@material-ui/core/Grid';
import { Link } from "gatsby"
import { Typography } from "@material-ui/core";

import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader";

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
        <PageHeader title={this.state.podcast.name}></PageHeader>
        <Grid container>
          <Grid item xs={9} style={{margin: "auto"}}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <img src={this.state.podcast.image} alt=""/>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h4'>SHOW NOTES</Typography>
                <Typography variant='body1'>{this.state.podcast.description}</Typography>
                <Grid item xs={12}>
                  <div>
                    <Typography variant='h6'>episode links</Typography>
                    <ul>
                      {this.getLinks()}
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
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
      image
      description
      links
      fields {
        slug
      }
    }
  }
`
