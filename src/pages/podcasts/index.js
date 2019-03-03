import React from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Layout from "../../components/Layout"
import { Typography } from "@material-ui/core";
import PageHeader from "../../components/PageHeader";

const listProducts = (data) => {
  return data.allPodcastsJson.edges.map((edge) => {
    const urlPath = "/" + edge.node.fields.slug
    return (
      <Grid item xs={4}>
        <Paper>
          <Link style={{textAlign: 'center'}} to={urlPath} key={edge.node.name}>
            <div>
              <img src="https://images.pexels.com/photos/76172/pexels-photo-76172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            </div>
            <Typography variant="subtitle1">{edge.node.name}</Typography>
            <Typography variant="caption">{('Episode ' + edge.node.number).toUpperCase()}</Typography>
          </Link>
        </Paper>
      </Grid>
    )
  });
}

const IndexPage = ({data}) => (
  <Layout>
    <PageHeader title={"Podcasts"}></PageHeader>
    <div>
      <Grid container>
        <Grid item xs={9} style={{margin: "auto"}}>
          <Grid container justify={"flex-start"} spacing={24}>
            {listProducts(data)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allPodcastsJson {
      edges {
        node {
          name
          number
          fields {
            slug
          }
        }
      }
    }
  }
`
